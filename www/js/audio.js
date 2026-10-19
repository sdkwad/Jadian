/* Pengurus bunyi hibrid Jadian.
   Kategori A: fail .mp3 (ElevenLabs) untuk suasana organik: malam tiba, pagi aman, pagi bahaya, suasana malam (gelung) dan bunyi menang.
   Kategori B: sintesis Web Audio (tiada fail) untuk klik, kad terbalik, detik masa, amaran dan bunyi Mahkamah Kampung.
   Kedua-duanya guna SATU AudioContext dan satu gain induk, jadi suis "Bunyi" dalam Tetapan senyapkan semuanya serentak. */
(function () {
  const FILES = {
    malam: 'assets/audio/malam-tiba.mp3',
    pagiAman: 'assets/audio/pagi-aman.mp3',
    pagiBahaya: 'assets/audio/pagi-bahaya.mp3',
    suasanaMalam: 'assets/audio/suasana-malam.mp3',
    menangKampung: 'assets/audio/menang-kampung.mp3',
    menangHarimau: 'assets/audio/menang-harimau.mp3'
  };
  const LVL = { ui: 0.55, sting: 0.8, amb: 0.6 };

  let enabled = true, ctx = null, master = null, uiBus = null, stingBus = null, ambBus = null, noise = null;
  let ambWanted = false, ambSrc = null, loading = null;
  const bufs = {};

  function build() {
    if (ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try { ctx = new AC({ latencyHint: 'interactive' }); } catch (e) { try { ctx = new AC(); } catch (_) { return false; } }
    master = ctx.createGain(); master.gain.value = enabled ? 1 : 0;
    // Pemampat ringan supaya gong + gelung malam + klik tak pecah di pembesar suara telefon.
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -10; comp.ratio.value = 4; comp.attack.value = 0.003; comp.release.value = 0.2;
    master.connect(comp); comp.connect(ctx.destination);
    uiBus = ctx.createGain(); uiBus.gain.value = LVL.ui; uiBus.connect(master);
    stingBus = ctx.createGain(); stingBus.gain.value = LVL.sting; stingBus.connect(master);
    ambBus = ctx.createGain(); ambBus.gain.value = 0; ambBus.connect(master);
    noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return true;
  }

  // Safari lama hanya sokong decodeAudioData versi callback.
  const decode = (ab) => new Promise((res, rej) => { const p = ctx.decodeAudioData(ab, res, rej); if (p && p.then) p.then(res, rej); });
  function preload() {
    if (loading || !ctx) return loading;
    loading = Promise.all(Object.keys(FILES).map((k) => fetch(FILES[k]).then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(r.status)))
      .then(decode).then((b) => { bufs[k] = b; if (k === 'suasanaMalam' && ambWanted) startAmb(); }).catch(() => {})));
    return loading;
  }

  // Dipanggil pada setiap sentuhan: cipta/sambung semula AudioContext dalam gerak isyarat pengguna (syarat autoplay iOS & Chrome).
  function unlock() {
    if (!enabled || !build()) return;
    if (ctx.state !== 'running') {
      resume();
      // iOS: mainkan 1 sampel senyap dalam gerak isyarat untuk "buka kunci" output.
      try { const s = ctx.createBufferSource(); s.buffer = ctx.createBuffer(1, 1, 22050); s.connect(ctx.destination); s.start(0); } catch (e) {}
    }
    preload();
  }
  ['pointerdown', 'touchend', 'keydown'].forEach((ev) => document.addEventListener(ev, unlock, { capture: true, passive: true }));
  // Bila app ke latar belakang (skrin dikunci, tukar tab), hentikan semua bunyi; sambung semula bila kembali.
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) { try { ctx.suspend().catch(() => {}); } catch (e) {} } else if (enabled) resume();
  });
  function resume() { try { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); } catch (e) {} }
  const live = () => enabled && ctx && ctx.state !== 'closed';

  // Turun/naik gain dengan lancar dari nilai semasa (elak bunyi "klik" bila potong).
  function ramp(param, to, sec) {
    const t = ctx.currentTime;
    param.cancelScheduledValues(t); param.setValueAtTime(param.value, t); param.linearRampToValueAtTime(to, t + sec);
  }

  /* ---------- Kategori A: fail .mp3 ---------- */
  function playBuf(k, vol) {
    const s = ctx.createBufferSource(), g = ctx.createGain();
    s.buffer = bufs[k]; g.gain.value = vol == null ? 1 : vol; s.connect(g); g.connect(stingBus); s.start();
    return s;
  }
  // Kalau fail belum siap dimuat (sentuhan pertama = butang Mula), tunggu sekejap; kalau lambat, guna versi sintesis.
  function sting(k, fallback) {
    if (!live()) return;
    if (bufs[k]) { playBuf(k); return; }
    let done = false;
    const fb = setTimeout(() => { done = true; if (fallback) sfx(fallback); }, 900);
    (loading || Promise.resolve()).then(() => { if (done || !live()) return; clearTimeout(fb); if (bufs[k]) playBuf(k); else if (fallback) sfx(fallback); });
  }
  function startAmb() {
    if (!live() || ambSrc || !bufs.suasanaMalam) return;
    ambSrc = ctx.createBufferSource(); ambSrc.buffer = bufs.suasanaMalam; ambSrc.loop = true;
    ambSrc.connect(ambBus); ambSrc.start();
    ramp(ambBus.gain, LVL.amb, 2.5);
  }
  function stopAmb(sec) {
    if (!ambSrc) return;
    const s = ambSrc; ambSrc = null;
    ramp(ambBus.gain, 0, sec);
    try { s.stop(ctx.currentTime + sec + 0.05); } catch (e) {}
  }
  function ambience(on) {
    ambWanted = !!on;
    if (!ctx) return;
    if (ambWanted) startAmb(); else stopAmb(1.6);
  }

  /* ---------- Kategori B: sintesis Web Audio ---------- */
  function env(g, at, vol, attack, dur) {
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(vol, at + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  }
  function tone(at, f, dur, vol, type, f2) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, at);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, at + dur * 0.6);
    env(g, at, vol, 0.004, dur); o.connect(g); g.connect(uiBus); o.start(at); o.stop(at + dur + 0.02);
  }
  function hiss(at, dur, vol, freq, q, freq2) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noise; f.type = 'bandpass'; f.Q.value = q || 1; f.frequency.setValueAtTime(freq, at);
    if (freq2) f.frequency.exponentialRampToValueAtTime(freq2, at + dur);
    env(g, at, vol, 0.003, dur); s.connect(f); f.connect(g); g.connect(uiBus); s.start(at, Math.random() * 0.5); s.stop(at + dur + 0.02);
  }
  // Ketukan kayu (kentung / woodblock): nada pendek yang jatuh + "tok" hingar.
  const wood = (at, f, vol) => { tone(at, f, 0.09, vol, 'sine', f * 0.82); tone(at, f * 2.7, 0.03, vol * 0.35, 'triangle'); hiss(at, 0.025, vol * 0.5, f * 2.5, 6); };
  // Gendang / rebana: pukulan rendah dengan pic menurun.
  const drum = (at, f, vol) => { tone(at, f * 2.2, 0.32, vol, 'sine', f); hiss(at, 0.05, vol * 0.4, 900, 0.8); };
  // Gong / bonang: separa nada logam yang lambat pudar.
  const gong = (at, f, dur, vol) => [[1, 1], [2.01, 0.45], [2.76, 0.3], [4.07, 0.12], [1.003, 0.6]].forEach(([r, v]) => tone(at, f * r, dur * (r > 2 ? 0.55 : 1), vol * v, 'sine'));

  const SFX = {
    click: (t) => { tone(t, 620, 0.05, 0.22, 'triangle', 480); hiss(t, 0.02, 0.08, 2400, 3); },
    tab: (t) => { tone(t, 700, 0.07, 0.16, 'sine', 980); },
    flip: (t) => { hiss(t, 0.2, 0.22, 700, 1.2, 3200); tone(t + 0.16, 784, 0.12, 0.16, 'triangle'); },
    tick: (t) => wood(t, 1250, 0.18),
    tickUrgent: (t) => { wood(t, 760, 0.42); wood(t + 0.11, 620, 0.26); },
    alarm: (t) => { [0, 0.13, 0.26, 0.5, 0.63, 0.76].forEach((d) => wood(t + d, 560, 0.5)); gong(t + 1.0, 98, 1.8, 0.35); },
    vote: (t) => { tone(t, 330, 0.08, 0.28, 'triangle', 260); hiss(t, 0.03, 0.12, 1600, 2); },
    tap: (t) => wood(t, 1500, 0.14),
    accuse: (t) => drum(t, 70, 0.6),
    court: (t) => { drum(t, 65, 0.55); drum(t + 0.28, 65, 0.6); gong(t + 0.6, 147, 1.2, 0.18); },
    defense: (t) => gong(t, 392, 1.0, 0.16),
    verdict: (t) => { drum(t, 55, 0.65); drum(t + 0.35, 50, 0.75); gong(t + 0.75, 82, 1.8, 0.3); },
    success: (t) => [523, 587, 784, 880].forEach((f, i) => gong(t + i * 0.1, f, 0.6, 0.1)),
    error: (t) => { tone(t, 220, 0.28, 0.25, 'square', 140); },
    // Versi sintesis untuk bunyi Kategori A (dipakai jika fail .mp3 belum siap atau gagal dimuat).
    night: (t) => { gong(t, 87, 2.4, 0.4); hiss(t + 0.3, 1.6, 0.05, 4200, 4); },
    morning: (t) => [523, 659, 784].forEach((f, i) => gong(t + i * 0.13, f, 0.7, 0.12)),
    danger: (t) => { [0, 0.12, 0.24, 0.36].forEach((d) => wood(t + d, 520, 0.5)); gong(t + 0.5, 110, 1.4, 0.25); },
    win: (t) => [523, 587, 659, 784, 1046].forEach((f, i) => gong(t + i * 0.12, f, 0.9, 0.12)),
    lose: (t) => { gong(t, 73, 2.6, 0.45); tone(t + 0.2, 147, 1.5, 0.12, 'sawtooth', 98); }
  };
  function sfx(k) {
    if (!live() || !SFX[k]) return;
    try { SFX[k](ctx.currentTime + 0.005); } catch (e) {}
  }

  // Suis Bunyi: senyapkan gain induk dengan lancar, hentikan gelung malam. Bila dihidupkan semula waktu malam, gelung disambung.
  // gesture = true bila dipanggil dari ketikan pengguna (boleh terus buka kunci); semasa app dimuat, tunggu sentuhan pertama.
  function setEnabled(on, gesture) {
    enabled = !!on;
    if (!ctx) { if (enabled && gesture) unlock(); return; }
    if (enabled) {
      resume();
      ramp(master.gain, 1, 0.15); preload();
      if (ambWanted) startAmb();
    } else {
      ramp(master.gain, 0, 0.15);
      stopAmb(0.15);
    }
  }

  window.JadianAudio = {
    unlock, setEnabled, sfx, ambience,
    night: () => sting('malam', 'night'),
    morning: (danger) => sting(danger ? 'pagiBahaya' : 'pagiAman', danger ? 'danger' : 'morning'),
    win: (f) => { if (f === 'good' || f === 'love') sting('menangKampung', 'win'); else if (f === 'wolf') sting('menangHarimau', 'lose'); else sfx('lose'); },
    get unlocked() { return !!ctx && ctx.state === 'running'; }
  };
})();

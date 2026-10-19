(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ==================== LENCANA OBJEK KAMPUNG (SVG VEKTOR NUSANTARA) ====================
     Semua ikon dilukis dalam viewBox 32x32 dengan garisan tebal #0b1121 dan warna rata bertekstur kampung. */
  const svg = (body) => `<svg class="j-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const ICONS = {
    brand: svg('<circle cx="16" cy="16" r="13" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><path d="M16 3a13 13 0 0 1 0 26Z" fill="#18223d"/><path d="M6 12c2-4 6-6 10-6v6H6Z" fill="#f4efe2" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 12c1 7 4 12 9 14V12H7Z" fill="#d9a16c" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><circle cx="11.5" cy="17" r="1.5" fill="#0b1121"/><path d="M16 6c5 0 9 3 10 8 1 6-3 11-10 12V6Z" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><path d="M22 7l3-3v5M21 11l4 1M22 15l4 1M20 22l4 2" stroke="#0b1121" stroke-width="2" stroke-linecap="round"/><polygon points="18,15 24,13 22,18" fill="#e2b04a" stroke="#0b1121" stroke-width="1.4" stroke-linejoin="round"/><polygon points="16,22 19,22 18,26" fill="#f4efe2" stroke="#0b1121" stroke-width="1.3" stroke-linejoin="round"/><line x1="16" y1="3" x2="16" y2="29" stroke="#0b1121" stroke-width="2"/>'),
    // --- PASUKAN KAMPUNG ---
    // Orang Kampung: Terendak Mengkuang & Sabit Rumput
    orang_kampung: svg('<path d="M3 19L16 7l13 12H3Z" fill="#e2b04a" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M9 13.5l7 5.5 7-5.5M6 16.5h20" stroke="#9b6b15" stroke-width="1.6" stroke-linecap="round"/><path d="M22 13c3 4 2 10-4 12-3 1-6 0-8-2 4 0 8-2 9-6 .5-2 0-3-1-4" fill="#d8e2ef" stroke="#0b1121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="6" y="22" width="6" height="3.5" rx="1.5" transform="rotate(-25 6 22)" fill="#9b5a28" stroke="#0b1121" stroke-width="1.8"/>'),
    // Tok Nujum: Bekas Bara Kemenyan Berasap (asap berbentuk mata mistik)
    tok_nujum: svg('<path d="M16 4c-5 0-9 3.5-9 3.5S11 11 16 11s9-3.5 9-3.5S21 4 16 4Z" fill="#b98be6" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="7.5" r="2.2" fill="#e2b04a" stroke="#0b1121" stroke-width="1.5"/><path d="M12 16c-1-2.5 1-3.5 0-5M20 16c1-2.5-1-3.5 0-5" stroke="#b98be6" stroke-width="2" stroke-linecap="round"/><path d="M7 18h18l-2.5 6.5a3 3 0 0 1-2.8 2H12.3a3 3 0 0 1-2.8-2L7 18Z" fill="#c9631d" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M9 18c2-2 5-2 7 0 2-2 5-2 7 0" fill="#ef5a51" stroke="#0b1121" stroke-width="1.6"/><path d="M10 26.5l-1.5 2.5h15l-1.5-2.5" stroke="#0b1121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'),
    // Pak Belalang: Belalang Kunyit Di Atas Kanta Pembesar Retak
    pak_belalang: svg('<circle cx="14" cy="14" r="9" fill="#212d4d" stroke="#e2b04a" stroke-width="2.4"/><path d="M20.5 20.5L28 28" stroke="#9b5a28" stroke-width="3.5" stroke-linecap="round"/><path d="M11 8l3 5-3 2 4 5" stroke="#f4efe2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="15" cy="14" rx="5.5" ry="2.6" transform="rotate(-20 15 14)" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8"/><circle cx="19" cy="12" r="1.4" fill="#e2b04a"/><path d="M19 11l3-4M20 12l4-1M12 15l-3 4" stroke="#4cbf86" stroke-width="1.8" stroke-linecap="round"/>'),
    // Mak Bidan: Tiga Helai Daun Sirih Bertemu Urat & Botol Minyak Kaca
    mak_bidan: svg('<path d="M9 6C4 10 4 17 9 22c5-5 5-12 0-16Z" fill="#2e9461" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 4c-6 5-6 14 0 20 6-6 6-15 0-20Z" fill="#4cbf86" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M15 7v14M12 12l3 3 3-3M12 16l3 3 3-3" stroke="#0b1121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="12" width="4" height="3" rx="1" fill="#e2b04a" stroke="#0b1121" stroke-width="1.6"/><rect x="18" y="15" width="8" height="12" rx="3" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><path d="M22 18v6M19 21h6" stroke="#0b1121" stroke-width="2" stroke-linecap="round"/>'),
    // Mak Dukun / Tok Herba: Lesung Batu Herba & 2 Botol Kaca (Penawar & Racun)
    mak_dukun: svg('<rect x="4" y="9" width="3" height="2" fill="#d9a16c" stroke="#0b1121" stroke-width="1.4"/><rect x="2.5" y="11" width="6" height="9" rx="2" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8"/><rect x="25" y="9" width="3" height="2" fill="#d9a16c" stroke="#0b1121" stroke-width="1.4"/><rect x="23.5" y="11" width="6" height="9" rx="2" fill="#ef5a51" stroke="#0b1121" stroke-width="1.8"/><path d="M18 6l4 2-4 11-3-1.5L18 6Z" fill="#8b95ab" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M8 18h16l-2.5 9a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L8 18Z" fill="#68738c" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M11 18c1-2 3-3 5-1 2-2 4-1 5 1" fill="#4cbf86" stroke="#0b1121" stroke-width="1.5"/>'),
    // Mak Cik Bawang: Sepasang Mata Mengintai Dari Celah Tingkap Nako & Bawang Merah
    mak_cik_bawang: svg('<rect x="3" y="4" width="26" height="22" rx="2" fill="#7c4722" stroke="#0b1121" stroke-width="2"/><line x1="3" y1="9" x2="29" y2="9" stroke="#0b1121" stroke-width="2"/><line x1="3" y1="21" x2="29" y2="21" stroke="#0b1121" stroke-width="2"/><path d="M6 15c2-2.5 5-2.5 7 0-2 2.5-5 2.5-7 0ZM19 15c2-2.5 5-2.5 7 0-2 2.5-5 2.5-7 0Z" fill="#f4efe2" stroke="#0b1121" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="15" r="1.5" fill="#e2b04a"/><circle cx="23" cy="15" r="1.5" fill="#e2b04a"/><path d="M23 19c0-2 2-3.5 3-5 1 1.5 3 3 3 5a3 3 0 1 1-6 0Z" fill="#c94b76" stroke="#0b1121" stroke-width="1.8" transform="translate(0,5)"/>'),
    // Pemburu: Senapang Patah Kampung Bersilang Dengan Peluru Tabur
    pemburu: svg('<path d="M4 23L26 5l2 2.5L6 25.5 4 23Z" fill="#8b95ab" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M3 24l6-4 3 3.5-6 5.5L3 24Z" fill="#9b5a28" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><g transform="rotate(-35 16 16)"><rect x="13" y="7" width="6" height="14" rx="1.5" fill="#ef5a51" stroke="#0b1121" stroke-width="2"/><rect x="13" y="17" width="6" height="5" rx="1" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/></g>'),
    // Cikgu Disiplin: Rotan Buluh Melengkung & Wisel Besi
    cikgu: svg('<path d="M6 27C5 15 12 6 22 6c5 0 7 3 6 7-1 3-4 4-6 2" stroke="#e2b04a" stroke-width="3.5" stroke-linecap="round"/><path d="M10 16l3 1M16 9l1 3M24 8l-2 2" stroke="#9b5a28" stroke-width="2" stroke-linecap="round"/><path d="M13 21h9a4 4 0 1 1-4 4v-1h-5v-3Z" fill="#d8e2ef" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><circle cx="22" cy="25" r="1.5" fill="#0b1121"/>'),
    // Peronda RT: Lampu Picit Besi Lama Menyuluh Terang & Cota
    peronda: svg('<polygon points="16,13 30,5 30,23" fill="#e2b04a" opacity="0.85"/><path d="M6 25L24 7" stroke="#0b1121" stroke-width="4.5" stroke-linecap="round"/><rect x="3" y="13" width="10" height="6" rx="1.5" transform="rotate(-15 8 16)" fill="#8b95ab" stroke="#0b1121" stroke-width="2"/><polygon points="12,11 16,9 18,17 14,18" fill="#ef5a51" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/>'),
    // Ketua Kampung: Songkok Hitam Tinggi Berkerongsang Emas & Cop Mohor
    ketua: svg('<path d="M5 9l2-3h18l2 3-1.5 11H6.5L5 9Z" fill="#18223d" stroke="#e2b04a" stroke-width="2" stroke-linejoin="round"/><path d="M6.5 17h19" stroke="#e2b04a" stroke-width="1.5"/><polygon points="11,10 12.5,12.5 11,15 9.5,12.5" fill="#e2b04a"/><circle cx="23" cy="23" r="5" fill="#ef5a51" stroke="#0b1121" stroke-width="2"/><circle cx="23" cy="23" r="2.2" fill="#e2b04a"/>'),
    // Anak Datuk: Cermin Mata Hitam Berbingkai Emas & Kunci Kereta
    anak_datuk: svg('<rect x="3" y="8" width="11" height="8" rx="2" fill="#0b1121" stroke="#e2b04a" stroke-width="2.2"/><rect x="18" y="8" width="11" height="8" rx="2" fill="#0b1121" stroke="#e2b04a" stroke-width="2.2"/><line x1="14" y1="11" x2="18" y2="11" stroke="#e2b04a" stroke-width="2.2"/><line x1="6" y1="10" x2="9" y2="14" stroke="#f4efe2" stroke-width="1.5" stroke-linecap="round"/><line x1="21" y1="10" x2="24" y2="14" stroke="#f4efe2" stroke-width="1.5" stroke-linecap="round"/><circle cx="11" cy="24" r="4" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><path d="M15 24h11v3m-3-3v3" stroke="#e2b04a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'),
    // Abang Sado: Lengan Berotot & Besi Angkat Berat
    abang_sado: svg('<path d="M7 22c-2-4-1-10 3-12 2-1 4 1 3 3-1 2 2 2 4 0 3-2 7 0 8 4 1 5-3 9-9 9H7v-4Z" fill="#f08a3c" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><line x1="4" y1="9" x2="28" y2="9" stroke="#d8e2ef" stroke-width="2.5" stroke-linecap="round"/><rect x="3" y="5" width="3.5" height="8" rx="1" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8"/><rect x="25.5" y="5" width="3.5" height="8" rx="1" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8"/>'),
    // Mak Andam: Sepasang Bunga Manggar & Tepak Sirih Pengantin
    mak_andam: svg('<path d="M16 18C14 11 9 7 4 7M16 18C14 12 10 10 6 12M16 18c2-7 7-11 12-11M16 18c2-6 6-8 10-6" stroke="#e2b04a" stroke-width="2" stroke-linecap="round"/><circle cx="4" cy="7" r="2" fill="#f27fa8"/><circle cx="6" cy="12" r="2" fill="#4cbf86"/><circle cx="28" cy="7" r="2" fill="#f27fa8"/><circle cx="26" cy="12" r="2" fill="#4cbf86"/><path d="M8 20h16l-2 7H10l-2-7Z" fill="#e2b04a" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M16 19c-1.5-2-4-1-4 1.5 0 2 4 4 4 4s4-2 4-4c0-2.5-2.5-3.5-4-1.5Z" fill="#ef5a51" stroke="#0b1121" stroke-width="1.4"/>'),
    // Pak Pandir: Kopiah Putih Senget & Tempayan Terbalik
    pak_pandir: svg('<path d="M9 14c1-6 6-9 12-7 4 1 6 5 5 10L9 14Z" fill="#f4efe2" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M12 11l11 2" stroke="#a2a9bf" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M7 27c0-6 4-10 9-10s9 4 9 10H7Z" fill="#c9631d" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><rect x="12" y="25" width="8" height="3" rx="1" fill="#9b5a28" stroke="#0b1121" stroke-width="1.8"/><path d="M6 7l2 2m0-2l-2 2" stroke="#e2b04a" stroke-width="2" stroke-linecap="round"/>'),
    // Kena Gigit: Kain Pelikat Koyak Dengan 3 Kesan Cakaran Kuku
    kena_gigit: svg('<rect x="4" y="4" width="24" height="24" rx="4" fill="#2e9461" stroke="#0b1121" stroke-width="2"/><path d="M4 12h24M4 20h24M12 4v24M20 4v24" stroke="#e2b04a" stroke-width="1.4" opacity="0.65"/><path d="M7 9L23 25M11 6L26 21M6 14L19 27" stroke="#ef5a51" stroke-width="3" stroke-linecap="round"/><path d="M7 9L23 25M11 6L26 21M6 14L19 27" stroke="#0b1121" stroke-width="1.2" stroke-linecap="round"/>'),
    // --- PIHAK HARIMAU ---
    // Harimau Jadian: Sepasang Mata Kuning Menyala & Taring Dalam Belang Gelap
    harimau: svg('<rect x="3" y="3" width="26" height="26" rx="7" fill="#f08a3c" stroke="#0b1121" stroke-width="2"/><path d="M3 9l7 3-7 3ZM29 9l-7 3 7 3ZM13 3l3 6 3-6Z" fill="#0b1121"/><polygon points="6,14 14,17 11,20 5,18" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><polygon points="26,14 18,17 21,20 27,18" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 23h16l-2 5-3-3-3 2-3-2-3 3-2-5Z" fill="#f4efe2" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/>'),
    // Anak Harimau: Tapak Kaki Harimau Kecil Di Dalam Kesan Cakaran Berganda
    anak_harimau: svg('<path d="M5 6l22 20M11 4l17 16M4 12l16 16" stroke="#ef5a51" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/><ellipse cx="16" cy="20" rx="5.5" ry="4.5" fill="#f08a3c" stroke="#0b1121" stroke-width="2"/><circle cx="9.5" cy="14" r="2.3" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8"/><circle cx="13.8" cy="11.5" r="2.3" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8"/><circle cx="18.2" cy="11.5" r="2.3" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8"/><circle cx="22.5" cy="14" r="2.3" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8"/>'),
    // Harimau Tua: Rahang Harimau Berparut Dengan Sebelah Taring Patah
    harimau_tua: svg('<path d="M4 15L8 6l5 4h6l5-4 4 9-3 11H7L4 15Z" fill="#c9631d" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M8 10l5 8M6 14l6-2" stroke="#ef5a51" stroke-width="2.2" stroke-linecap="round"/><circle cx="11" cy="15" r="1.8" fill="#e2b04a"/><circle cx="21" cy="15" r="1.8" fill="#e2b04a"/><polygon points="9,21 13,21 11,28" fill="#f4efe2" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><polygon points="19,21 23,21 22.5,24.5 19.5,24" fill="#f4efe2" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/>'),
    // Toyol: Tangan Kecil Hijau Mencapai Uncang Emas / Kuasa
    toyol: svg('<path d="M18 13h8l2 9a4 4 0 0 1-4 5h-4a4 4 0 0 1-4-5l2-9Z" fill="#e2b04a" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M17 13l-2-4h10l-2 4" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><path d="M4 24v-6c0-2 1.5-2 2 0v-5c0-2 2-2 2 0v-4c0-2 2-2 2 0v5l3-2c1.5-1 2.5.5 1 2l-4 5v5H4Z" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/>'),
    // Pelesit: Belalang Pelesit Bermata Merah Di Depan Bulan Sabit
    pelesit: svg('<path d="M21 4a11 11 0 1 0 7 19.5A9 9 0 1 1 21 4Z" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8"/><path d="M7 22l12-10 4 2-9 10-7-2Z" fill="#2e9461" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="12.5" r="2.2" fill="#ef5a51" stroke="#0b1121" stroke-width="1.4"/><path d="M21 11l5-5M22 13l6-1" stroke="#ef5a51" stroke-width="1.8" stroke-linecap="round"/>'),
    // Musuh Dalam Selimut: Kain Selimut Kampung Terselak Menampakkan Ekor Harimau Belang
    musuh: svg('<path d="M18 22c5 1 9-1 9-5 0-3-3-4-2-7" stroke="#f08a3c" stroke-width="5" stroke-linecap="round"/><path d="M23 22l1-3M26 17l-3-1M25 12l-3 1" stroke="#0b1121" stroke-width="2" stroke-linecap="round"/><path d="M4 7h19v11L11 26H4V7Z" fill="#4cbf86" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><polygon points="23,18 11,26 11,18" fill="#e2b04a" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/>'),
    // --- PEMAIN SOLO ---
    // Pontianak: Bunga Harum Sundal Malam & Siluet Kuku Tajam Berambut Panjang
    pontianak: svg('<path d="M6 4c-2 8-2 16 1 24h18c3-8 3-16 1-24H6Z" fill="#18223d" stroke="#b98be6" stroke-width="1.8"/><circle cx="12" cy="12" r="1.6" fill="#ef5a51"/><circle cx="20" cy="12" r="1.6" fill="#ef5a51"/><path d="M16 15l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4Z" fill="#f4efe2" stroke="#0b1121" stroke-width="1.6" stroke-linejoin="round"/><circle cx="16" cy="21" r="1.5" fill="#e2b04a"/>'),
    // Si Luncai: Buah Labu Air Kayu Tradisional Diikat Tali
    si_luncai: svg('<path d="M15 4h2v4h-2z" fill="#4cbf86" stroke="#0b1121" stroke-width="1.6"/><circle cx="16" cy="12" r="5" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><circle cx="16" cy="21.5" r="7.5" fill="#f08a3c" stroke="#0b1121" stroke-width="2"/><path d="M11 15.5h10M16 15.5l4 4" stroke="#ef5a51" stroke-width="2.4" stroke-linecap="round"/>'),
    // Hantu Raya: Manusia Kecil Dengan Bayang-Bayang Gergasi Bermata Merah Di Belakangnya
    hantu_raya: svg('<path d="M6 27c0-10 3-16 10-21 7 5 10 11 10 21H6Z" fill="#212d4d" stroke="#b98be6" stroke-width="2" stroke-linejoin="round"/><polygon points="11,11 14,12 12,14" fill="#ef5a51"/><polygon points="21,11 18,12 20,14" fill="#ef5a51"/><circle cx="16" cy="19" r="3" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8"/><path d="M11 28c0-3 2.2-5 5-5s5 2 5 5" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8"/>'),
    // Si Pendendam: Keris Kecil Tercacak Pada Kertas Sasaran
    pendendam: svg('<circle cx="15" cy="18" r="10" fill="#f4efe2" stroke="#0b1121" stroke-width="2"/><circle cx="15" cy="18" r="6" fill="#ef5a51"/><circle cx="15" cy="18" r="2.5" fill="#e2b04a"/><path d="M23 4l4 4-4 3-3-3 3-4Z" fill="#9b5a28" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><path d="M22 9c-2 2 0 4-2 5s-1 3-5 4" stroke="#d8e2ef" stroke-width="3" stroke-linecap="round"/>'),
    // --- PERISTIWA KAMPUNG ---
    purnama: svg('<circle cx="16" cy="16" r="11" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><circle cx="12" cy="13" r="2" fill="#c9631d" opacity="0.45"/><circle cx="20" cy="19" r="3" fill="#c9631d" opacity="0.45"/>'),
    kenduri: svg('<path d="M4 22c0-7 5.4-12 12-12s12 5 12 12H4Z" fill="#e2b04a" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="8" r="2" fill="#ef5a51" stroke="#0b1121" stroke-width="1.6"/><path d="M10 16l6-5 6 5M8 22l8-8 8 8" stroke="#4cbf86" stroke-width="1.8"/><rect x="3" y="22" width="26" height="3.5" rx="1.5" fill="#ef5a51" stroke="#0b1121" stroke-width="1.8"/>'),
    banjir: svg('<path d="M8 14l8-7 8 7H8Z" fill="#c9631d" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><rect x="10" y="14" width="12" height="6" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8"/><path d="M3 20c3-2 5 2 8 0s5 2 8 0 5 2 8 0v7H3v-7Z" fill="#4cbf86" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/>'),
    blackout: svg('<path d="M16 4v4M11 12a5 5 0 0 1 10 0c0 2-1.5 3.5-2.5 5h-5C12.5 15.5 11 14 11 12Z" fill="#212d4d" stroke="#a2a9bf" stroke-width="2"/><rect x="13" y="17" width="6" height="3.5" rx="1" fill="#e2b04a" stroke="#0b1121" stroke-width="1.6"/><path d="M6 26L26 6" stroke="#ef5a51" stroke-width="2.6" stroke-linecap="round"/>'),
    pasar: svg('<polygon points="4,13 9,6 23,6 28,13" fill="#ef5a51" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><polygon points="10,13 13,6 19,6 22,13" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><line x1="7" y1="13" x2="7" y2="26" stroke="#a2a9bf" stroke-width="2"/><line x1="25" y1="13" x2="25" y2="26" stroke="#a2a9bf" stroke-width="2"/><circle cx="16" cy="18" r="2.2" fill="#e2b04a"/>'),
    hujan: svg('<path d="M9 18a5 5 0 0 1 1-9.8A6 6 0 0 1 22 9a4.5 4.5 0 0 1 1 9H9Z" fill="#68738c" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M10 21l-2 5M16 21l-2 5M22 21l-2 5" stroke="#4cbf86" stroke-width="2" stroke-linecap="round"/>'),
    gotong: svg('<path d="M22 5l5 5-9 9-5-5 9-9Z" fill="#e2b04a" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><path d="M13 14L4 23l5 5 9-9" fill="#c9631d" stroke="#0b1121" stroke-width="2" stroke-linejoin="round"/><line x1="12" y1="13" x2="19" y2="20" stroke="#ef5a51" stroke-width="2.5"/>'),
    // --- MOD PERMAINAN ---
    mod_digital: svg('<rect x="11" y="4" width="10" height="14" rx="5" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><path d="M7 13a9 9 0 0 0 18 0M16 22v5m-5 0h10" stroke="#f4efe2" stroke-width="2.2" stroke-linecap="round"/>'),
    pass_play: svg('<rect x="8" y="3" width="16" height="26" rx="3" fill="#212d4d" stroke="#e2b04a" stroke-width="2"/><circle cx="16" cy="24" r="1.5" fill="#e2b04a"/><path d="M12 12h8l-2.5-2.5M20 16h-8l2.5 2.5" stroke="#4cbf86" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'),
    mod_fizikal: svg('<rect x="5" y="6" width="14" height="20" rx="2.5" transform="rotate(-10 12 16)" fill="#4cbf86" stroke="#0b1121" stroke-width="2"/><rect x="13" y="6" width="14" height="20" rx="2.5" transform="rotate(8 20 16)" fill="#e2b04a" stroke="#0b1121" stroke-width="2"/><polygon points="20,12 22,16 20,20 18,16" fill="#0b1121"/>'),
    // --- IKON PERSEDIAAN UTAMA ---
    ui_players: svg('<circle cx="12" cy="11" r="4" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8"/><path d="M5 25c1-4.5 3.5-7 7-7s6 2.5 7 7H5Z" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/><circle cx="21" cy="12" r="3.2" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8"/><path d="M19 25c.6-3.5 2.5-5.5 5-5.5 1.8 0 3.3 1.2 4 3.5v2h-9Z" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8" stroke-linejoin="round"/>'),
    ui_roles: svg('<rect x="5" y="6" width="13" height="19" rx="2.5" transform="rotate(-8 11.5 15.5)" fill="#212d4d" stroke="#e2b04a" stroke-width="1.8"/><rect x="14" y="6" width="13" height="19" rx="2.5" transform="rotate(8 20.5 15.5)" fill="#f08a3c" stroke="#0b1121" stroke-width="1.8"/><polygon points="20.5,11 23,15.5 20.5,20 18,15.5" fill="#e2b04a" stroke="#0b1121" stroke-width="1.4"/>'),
    ui_settings: svg('<path d="M4 10h14M22 10h6M4 22h6M14 22h14" stroke="#f4efe2" stroke-width="2.4" stroke-linecap="round"/><circle cx="19" cy="10" r="3.5" fill="#e2b04a" stroke="#0b1121" stroke-width="1.8"/><circle cx="12" cy="22" r="3.5" fill="#4cbf86" stroke="#0b1121" stroke-width="1.8"/>')
  };

  /* ==================== DATA WATAK ====================
     Setiap watak satu rekod. f = puak, w = berat imbangan, seer = cara Tok Nujum nampak, wake = bangun malam,
     n1 = Malam 1 sahaja, multi = boleh lebih daripada 1 kad dalam dek. Enjin, skrip dan Auto-Balance dibina daripada sini. */
  const ROLES = {
    orang_kampung: { n: 'Orang Kampung', i: ICONS.orang_kampung, f: 'good', w: 1, seer: 'good', wake: false, multi: true, s: 'Tiada kuasa. Undi dengan bijak.', d: 'Tiada kuasa malam. Waktu siang, perhati, tuduh dan undi Harimau keluar dari kampung.' },
    tok_nujum: { n: 'Tok Nujum', i: ICONS.tok_nujum, f: 'good', w: 4, seer: 'good', wake: true, s: 'Tilik 1 pemain setiap malam.', d: 'Setiap malam tilik 1 pemain dan dapat tahu sama ada dia BAIK atau BAHAYA. Harimau, Toyol, Pontianak dan Pak Pandir nampak BAHAYA.' },
    pak_belalang: { n: 'Pak Belalang', i: ICONS.pak_belalang, f: 'good', w: -1, seer: 'good', wake: true, s: 'Sangka dirinya Tok Nujum.', d: 'App tunjuk kad Tok Nujum kepadanya, jadi dia betul-betul sangka dia Tok Nujum. Tapi keputusan tilikannya rawak. Identiti sebenar cuma terdedah bila dia mati.' },
    mak_bidan: { n: 'Mak Bidan', i: ICONS.mak_bidan, f: 'good', w: 3, seer: 'good', wake: true, s: 'Jaga 1 pemain setiap malam.', d: 'Setiap malam pilih 1 pemain untuk dijaga. Pemain itu selamat daripada semua serangan malam itu.' },
    mak_dukun: { n: 'Mak Dukun', alt: 'Tok Herba', i: ICONS.mak_dukun, f: 'good', w: 4, seer: 'good', wake: true, s: 'Air Penawar & Racun, sekali setiap satu.', d: 'Bangun selepas Harimau dan nampak mangsa malam itu. Ada 2 botol, sekali guna setiap satu: Air Penawar menyelamatkan mangsa Harimau, Racun membunuh 1 pemain.' },
    mak_cik_bawang: { n: 'Mak Cik Bawang', i: ICONS.mak_cik_bawang, f: 'good', w: 3, seer: 'good', wake: true, s: 'Intai 1 rumah, tahu siapa keluar.', d: 'Setiap malam intai rumah 1 pemain. Dia dapat tahu sama ada penghuni rumah itu keluar waktu malam (ada kuasa malam), walaupun kuasanya dicuri Toyol.' },
    pemburu: { n: 'Pemburu', i: ICONS.pemburu, f: 'good', w: 3, seer: 'good', wake: false, s: 'Bila mati, tembak 1 pemain.', d: 'Bila mati (malam atau siang), dia boleh terus tembak 1 pemain lain, atau pilih untuk tak tembak.' },
    cikgu: { n: 'Cikgu Disiplin', i: ICONS.cikgu, f: 'good', w: 2, seer: 'good', wake: true, s: 'Denda 1 pemain: diam esok.', d: 'Setiap malam denda 1 pemain. Pemain itu dilarang bercakap sepanjang mesyuarat esok. Tak boleh denda orang sama 2 malam berturut.' },
    peronda: { n: 'Peronda RT', i: ICONS.peronda, f: 'good', w: 3, seer: 'good', wake: true, s: 'Kawal 1 rumah, mati menggantikan.', d: 'Setiap malam kawal rumah 1 pemain lain. Kalau rumah itu diserang, Peronda yang mati menggantikan tuan rumah.' },
    ketua: { n: 'Ketua Kampung', i: ICONS.ketua, f: 'good', w: 2, seer: 'good', wake: false, s: 'Undi dikira 2 selepas dedah diri.', d: 'Boleh dedah diri waktu siang. Selepas disahkan app, undinya dikira 2. Kalau orang lain mengaku Ketua Kampung, app akan umum dia menipu.' },
    anak_datuk: { n: 'Anak Datuk', i: ICONS.anak_datuk, f: 'good', w: 2, seer: 'good', wake: false, s: 'Kebal undian sekali.', d: 'Kali pertama diundi keluar, wataknya didedahkan dan dia terselamat. Kali kedua, dia keluar macam orang lain.' },
    abang_sado: { n: 'Abang Sado', i: ICONS.abang_sado, f: 'good', w: 2, seer: 'good', wake: false, s: 'Tahan 1 serangan malam.', d: 'Badan tegap. Serangan malam pertama ke atasnya (Harimau, Pontianak atau Racun) gagal. Serangan kedua baru dia tumbang.' },
    mak_andam: { n: 'Mak Andam', i: ICONS.mak_andam, f: 'good', w: 0, seer: 'good', wake: true, n1: true, s: 'Jodohkan 2 pemain pada Malam 1.', d: 'Malam 1 jodohkan 2 pemain jadi pasangan. Kalau seorang mati, pasangannya mati merana. Kalau pasangan dari pihak berbeza, mereka menang berdua bila tinggal mereka sahaja.' },
    pak_pandir: { n: 'Pak Pandir', i: ICONS.pak_pandir, f: 'good', w: 0, seer: 'bad', wake: false, s: 'Orang baik, tapi nampak BAHAYA.', d: 'Orang kampung biasa yang lurus bendul. Malangnya Tok Nujum nampak dia BAHAYA.' },
    kena_gigit: { n: 'Kena Gigit', i: ICONS.kena_gigit, f: 'good', w: -1, seer: 'good', wake: false, s: 'Kalau diserbu, jadi Harimau.', d: 'Orang kampung biasa. Kalau diserbu Harimau, dia tak mati tetapi bertukar jadi Harimau Jadian dan sertai kawanan.' },
    harimau: { n: 'Harimau Jadian', i: ICONS.harimau, f: 'wolf', w: -4, seer: 'bad', wake: true, pack: true, multi: true, s: 'Serbu 1 mangsa setiap malam.', d: 'Siang jadi orang, malam jadi harimau. Bangun bersama kawanan dan pilih 1 mangsa setiap malam.' },
    anak_harimau: { n: 'Anak Harimau', i: ICONS.anak_harimau, f: 'wolf', w: -5, seer: 'bad', wake: true, pack: true, s: 'Bila mati, kawanan serbu 2.', d: 'Ahli kawanan Harimau. Kalau dia mati, kawanan yang marah dapat serbu 2 mangsa pada malam berikutnya.' },
    harimau_tua: { n: 'Harimau Tua', i: ICONS.harimau_tua, f: 'wolf', w: -5, seer: 'bad', wake: true, pack: true, s: 'Sekali: gigit mangsa jadi Harimau.', d: 'Ketua kawanan. Sekali sepanjang permainan, dia boleh gigit mangsa supaya mangsa bertukar jadi Harimau Jadian, bukan mati. Gigitan gagal (dan boleh dicuba lagi) kalau mangsa dijaga, dikawal Peronda, Pontianak atau Abang Sado.' },
    toyol: { n: 'Toyol', i: ICONS.toyol, f: 'wolf', w: -3, seer: 'bad', wake: true, s: 'Curi kuasa 1 pemain setiap malam.', d: 'Pihak Harimau, tapi bangun seorang diri dan tak kenal kawanan. Setiap malam curi kuasa 1 pemain: kuasa orang itu batal malam itu. Kalau dia curi kuasa Harimau yang tinggal seorang, malam itu tiada serbuan. Mak Andam dan Hantu Raya tak boleh dicuri.' },
    pelesit: { n: 'Pelesit', i: ICONS.pelesit, f: 'wolf', w: -3, seer: 'good', wake: true, s: 'Intai siapa Tok Nujum & Mak Dukun.', d: 'Utusan pihak Harimau yang bangun seorang diri dan tak kenal kawanan. Setiap malam intai 1 pemain untuk tahu sama ada dia Tok Nujum atau Mak Dukun. Tok Nujum nampak dia BAIK.' },
    musuh: { n: 'Musuh Dalam Selimut', i: ICONS.musuh, f: 'wolf', w: -2, seer: 'good', wake: false, s: 'Pengkhianat yang tak kenal kawanan.', d: 'Pihak Harimau, tapi tak bangun malam dan tak kenal kawanan. Tok Nujum nampak dia BAIK. Bila Harimau terakhir mati, dia bertukar jadi Harimau Jadian.' },
    pontianak: { n: 'Pontianak', i: ICONS.pontianak, f: 'solo', w: -6, seer: 'bad', wake: true, s: 'Bunuh 1 setiap malam, menang sendiri.', d: 'Bunuh 1 pemain setiap malam dan kebal serangan Harimau. Menang bila tinggal dia seorang, atau berdua dengan seorang lagi.' },
    si_luncai: { n: 'Si Luncai', i: ICONS.si_luncai, f: 'solo', w: -1, seer: 'good', wake: false, s: 'Menang kalau diundi keluar.', d: 'Biarlah, biarlah! Menang serta-merta kalau berjaya buat kampung mengundinya keluar.' },
    hantu_raya: { n: 'Hantu Raya', i: ICONS.hantu_raya, f: 'solo', w: 0, seer: 'good', wake: true, n1: true, s: 'Pilih tuan, warisi wataknya.', d: 'Malam 1 pilih seorang tuan. Bila tuan mati, Hantu Raya ambil alih wataknya secara rahsia dan main untuk pihak itu. Kalau permainan tamat sebelum tuan mati, Hantu Raya kalah.' },
    pendendam: { n: 'Si Pendendam', i: ICONS.pendendam, f: 'solo', w: -1, seer: 'good', wake: false, s: 'Buat sasaran diundi keluar.', d: 'App beri 1 sasaran dari pihak kampung. Menang serta-merta kalau sasaran itu diundi keluar. Kalau sasaran mati dengan cara lain, dendamnya bertukar dan dia jadi Si Luncai.' }
  };
  const IDS = Object.keys(ROLES);
  const FACTIONS = [
    { f: 'good', name: 'Pasukan Kampung', c: 'var(--pandan)' },
    { f: 'wolf', name: 'Pihak Harimau', c: 'var(--belang)' },
    { f: 'solo', name: 'Pemain Solo', c: 'var(--ungu)' }
  ];
  const FC = { good: 'var(--pandan)', wolf: 'var(--belang)', solo: 'var(--ungu)', none: 'var(--kabur)', love: '#f27fa8' };
  const FNAME = { good: 'Pasukan Kampung', wolf: 'Pihak Harimau', solo: 'Solo' };
  const MODES = [
    { id: 'mod_digital', ic: ICONS.mod_digital, name: 'Moderator', d: 'Seorang jadi moderator. Pemain imbas QR guna telefon sendiri, atau lihat kad di telefon moderator. Lepas tu moderator baca skrip malam.' },
    { id: 'pass_play', ic: ICONS.pass_play, name: 'Pass & Play', d: 'Tiada moderator, semua orang main. Telefon diedar ikut giliran dengan skrin kunci dan misi Anti-Kantoi.' },
    { id: 'mod_fizikal', ic: ICONS.mod_fizikal, name: 'Kad Fizikal', d: 'Guna kad fizikal sendiri. Semasa Malam 1, moderator panggil watak dan tag siapa pegang kad apa dalam app.' }
  ];
  const EVENTS = {
    purnama: { i: ICONS.purnama, n: 'Bulan Purnama', d: 'Harimau makin ganas. Malam ni kawanan serbu 1 rumah tambahan.' },
    kenduri: { i: ICONS.kenduri, n: 'Kenduri Kahwin', d: 'Seluruh kampung makan nasi minyak. Malam ni Harimau kekenyangan dan tak menyerbu.' },
    banjir: { i: ICONS.banjir, n: 'Banjir Kilat', d: 'Balai raya dinaiki air. Tiada undian hari ini.' },
    blackout: { i: ICONS.blackout, n: 'Blackout', d: 'Bekalan elektrik terputus. Malam ni semua kuasa tilik dan intai tak nampak apa-apa.' },
    pasar: { i: ICONS.pasar, n: 'Pasar Malam', d: 'Orang ramai lepak lama. Mesyuarat hari ini dapat 1 minit tambahan.' },
    hujan: { i: ICONS.hujan, n: 'Hujan Lebat', d: 'Semua nak cepat balik. Masa mesyuarat hari ini dipotong separuh.' },
    gotong: { i: ICONS.gotong, n: 'Gotong-royong', d: 'Sebelum mengundi, setiap orang mesti sebut 1 nama yang dia syak dan sebabnya.' }
  };
  const AVA = ['😎','🥳','🤠','🦊','🐼','🦁','🐸','🐵','🦄','🐝','🦉','🦖','🐙','🦋','🐢','🐨','🐧','🦜','🐰','🐻'];
  const emptyRc = () => Object.fromEntries(IDS.map((k) => [k, 0]));
  const isPack = (p) => !!(p && p.role && ROLES[p.role].pack);
  const INFO = ['tok_nujum', 'pak_belalang', 'pelesit', 'mak_cik_bawang'];

  let soundOn = true, audioKey = null, audioQuiet = false, curPg = null, timerInt = null, holdT = null, remSec = 0, timerTotal = 0, minInt = null, minUntil = 0, flipNext = false;
  let tempTargetId = null, tempTargets = [], tempDukun = { save: null, poison: null }, tempBite = false, tempQR = false, seerDone = false;
  let history = [], game = null, editingGroupId = null, modalOk = null, toastT = null;

  const setup = {
    mode: 'mod_digital', balMode: 'auto', preset: 'santai', disc: '180', vote: '45', hold: '6', voteMode: 'mahkamah',
    players: [], rc: emptyRc(),
    rules: { skImmune: true, docSelf: true, docNoRep: true, dukunSelf: false, loneWolf: true, reveal: true, neutral: false, ghost: true, radar: true, events: true, callDead: true }
  };
  const FEATURES = [
    { k: 'events', name: 'Kad Peristiwa', d: 'Kadang-kadang ada peristiwa kampung waktu pagi: Bulan Purnama, Kenduri Kahwin, Banjir Kilat dan lain-lain.' },
    { k: 'ghost', name: 'Roh Penasaran', d: 'Pemain yang dah mati dapat 1 undi terakhir dalam Mahkamah Kampung.' },
    { k: 'radar', name: 'Radar Syak', d: 'Pass & Play: pilihan Anti-Kantoi dikumpul dan ditunjuk tanpa nama waktu pagi.' },
    { k: 'callDead', name: 'Panggil watak yang dah mati', d: 'Mod Moderator: skrip tetap panggil watak yang dah mati, supaya pemain tak dapat teka siapa yang dah tiada.' }
  ];
  const RULES = [
    { k: 'skImmune', name: 'Pontianak kebal Harimau', d: 'Serbuan Harimau tak boleh bunuh Pontianak.' },
    { k: 'docSelf', name: 'Mak Bidan boleh jaga diri', d: 'Mak Bidan boleh pilih dirinya sendiri.' },
    { k: 'docNoRep', name: 'Mak Bidan tukar orang', d: 'Tak boleh jaga orang yang sama 2 malam berturut.' },
    { k: 'dukunSelf', name: 'Mak Dukun boleh selamatkan diri', d: 'Air Penawar boleh diguna kalau dia sendiri mangsa Harimau.' },
    { k: 'loneWolf', name: 'Perisai Malam 1 Harimau Tunggal', d: 'Kalau cuma ada 1 Harimau, Tok Nujum nampak dia BAIK pada Malam 1.' },
    { k: 'reveal', name: 'Dedah watak bila mati', d: 'Tunjuk watak pemain yang terkorban.' },
    { k: 'neutral', name: 'Nama neutral', d: 'Guna "Tok Herba" sebagai ganti "Mak Dukun".' }
  ];
  const RN = (id) => (setup.rules.neutral && ROLES[id].alt) ? ROLES[id].alt : ROLES[id].n;
  const RI = (id) => ROLES[id].i;
  const RL = (id) => `${RI(id)} ${RN(id)}`;

  /* ==================== STORAN ==================== */
  let savedGroups = [];
  const GROUP_KEY = 'ww_my_saved_groups_v2', PREF_KEY = 'jadian_prefs_v4';
  function loadStorage() {
    try { const raw = localStorage.getItem(GROUP_KEY); savedGroups = raw ? JSON.parse(raw) : []; } catch (e) { savedGroups = []; }
    if (!Array.isArray(savedGroups)) savedGroups = [];
    try {
      const p = JSON.parse(localStorage.getItem(PREF_KEY) || 'null');
      if (p) {
        Object.assign(setup.rules, p.rules || {});
        ['mode', 'preset', 'disc', 'vote', 'hold', 'voteMode'].forEach((k) => { if (p[k]) setup[k] = p[k]; });
        if (typeof p.sound === 'boolean') soundOn = p.sound;
      }
    } catch (e) {}
    if (!['santai', 'kecoh', 'ganas'].includes(setup.preset)) setup.preset = 'santai';
    if (!['mod_digital', 'pass_play', 'mod_fizikal'].includes(setup.mode)) setup.mode = 'mod_digital';
  }
  function saveGroups() { try { localStorage.setItem(GROUP_KEY, JSON.stringify(savedGroups)); } catch (e) {} }
  function savePrefs() {
    try { localStorage.setItem(PREF_KEY, JSON.stringify({ rules: setup.rules, mode: setup.mode, preset: setup.preset, disc: setup.disc, vote: setup.vote, hold: setup.hold, voteMode: setup.voteMode, sound: soundOn })); } catch (e) {}
  }

  /* ==================== BUNYI, TOAST, MODAL, SHEET ==================== */
  // Semua bunyi lalu js/audio.js (pengurus bunyi hibrid). beep() kekal sebagai nama pendek untuk bunyi sintesis UI.
  const SND = window.JadianAudio || { unlock() {}, setEnabled() {}, sfx() {}, ambience() {}, night() {}, morning() {}, win() {} };
  function beep(t) { if (soundOn) SND.sfx(t || 'click'); }
  // Peralihan fasa: scene siang/malam 4–5 saat + bunyi suasana (Kategori A). Dipanggil setiap kali pentas dilukis,
  // tapi hanya bertindak bila fasa betul-betul bertukar. Pentas baharu dilukis di belakang scene, jadi aliran game tak berubah.
  function phaseFx() {
    const P = game ? game.phase : null;
    const key = game ? `${P}:${game.night}` : null, quiet = audioQuiet;
    audioQuiet = false;
    if (key === audioKey) return;
    audioKey = key;
    SND.ambience(!!game && (P === 'night' || (P === 'hunter' && game.hunterNext === 'morning')));
    if (!game) { endScene(true); return; }
    if (quiet) return; // Undo: kemas kini gelung sahaja, jangan ulang scene atau bunyi peralihan.
    if (P === 'night') { playScene('malam', game.night); if (soundOn) SND.night(); }
    else if (P === 'morning') {
      const danger = !!(game.summary && game.summary.dead.length);
      playScene(danger ? 'bahaya' : 'pagi', game.night); if (soundOn) SND.morning(danger);
    } else if (P === 'over' && soundOn) SND.win(game.winner && game.winner.f);
  }
  const SCENES = {
    malam: (n) => ({ cls: 'malam', ms: 4600, e: `Malam ${n}`, t: n > 1 ? 'Malam menjelma lagi…' : 'Malam pun tiba…', s: 'Semua orang kampung, tutup mata.' }),
    pagi: (n) => ({ cls: 'pagi', ms: 4000, e: `Pagi Hari ${n}`, t: 'Kukuruyuk!', s: 'Semua orang kampung, buka mata.' }),
    bahaya: (n) => ({ cls: 'pagi bahaya', ms: 4200, e: `Pagi Hari ${n}`, t: 'Kentung dipalu!', s: 'Ada sesuatu berlaku malam tadi…' })
  };
  let sceneT = null, sceneAt = 0;
  function playScene(k, n) {
    const c = SCENES[k](n), el = $('scene');
    clearTimeout(sceneT);
    $('scEyebrow').textContent = c.e; $('scTitle').textContent = c.t; $('scSub').textContent = c.s;
    // Buang .go dan paksa reflow supaya animasi bermula semula walaupun scene yang sama dimain berturut-turut.
    el.className = 'scene ' + c.cls; el.hidden = false; void el.offsetWidth; el.classList.add('go');
    sceneAt = Date.now();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sceneT = setTimeout(endScene, reduce ? 1800 : c.ms);
  }
  function endScene(now) {
    clearTimeout(sceneT);
    const el = $('scene'); if (el.hidden) return;
    if (now === true) { el.hidden = true; return; }
    el.classList.add('out'); sceneT = setTimeout(() => { el.hidden = true; }, 300);
  }
  // Ketikan yang mencetuskan peralihan tak boleh terus melangkau scene.
  window.skipScene = function () { if (Date.now() - sceneAt > 600) endScene(); };
  function toast(msg) {
    const t = $('toast'); t.textContent = msg; t.hidden = false;
    t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2800);
  }
  function ask(o) {
    $('mTitle').textContent = o.title; $('mBody').textContent = o.body;
    const ok = $('mOk'); ok.textContent = o.ok || 'Ya'; ok.className = 'btn ' + (o.danger ? 'btn-merah' : 'btn-emas');
    modalOk = o.onOk; $('modal').hidden = false; ok.focus();
  }
  window.modalClose = function (yes) { $('modal').hidden = true; const f = modalOk; modalOk = null; if (yes && f) f(); };
  function openSheet(html) { $('sheetContent').innerHTML = html; $('sheet').hidden = false; }
  window.closeSheet = function () { $('sheet').hidden = true; };
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!$('scene').hidden) window.skipScene(); else if (!$('modal').hidden) window.modalClose(false); else if (!$('sheet').hidden) window.closeSheet();
  });

  const SPEAKER_ON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
  const SPEAKER_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>';
  window.toggleSound = function () { soundOn = !soundOn; SND.setEnabled(soundOn, true); savePrefs(); renderSoundUI(); beep('click'); };
  function renderSoundUI() {
    ['soundTop', 'soundGame'].forEach((id) => { $(id).innerHTML = soundOn ? SPEAKER_ON : SPEAKER_OFF; $(id).setAttribute('aria-label', soundOn ? 'Matikan bunyi' : 'Hidupkan bunyi'); });
    $('rSound').checked = soundOn;
  }

  window.openRole = function (id) {
    const r = ROLES[id];
    openSheet(`<div class="kad" style="--c:${FC[r.f]}"><div class="songket"></div><div class="kad-body">
        <span class="eyebrow">${FNAME[r.f]}</span><span class="big">${r.i}</span><span class="rn">${esc(RN(id))}</span><p>${r.d}</p></div></div>
      <div class="facts">
        <div class="fact"><small>Bangun malam</small><b>${r.wake ? (r.n1 ? 'Malam 1 sahaja' : r.pack ? 'Ya, bersama kawanan' : 'Ya') : 'Tidak'}</b></div>
        <div class="fact"><small>Tok Nujum nampak</small><b style="color:${r.seer === 'bad' ? '#ff9b93' : 'var(--pandan)'}">${r.seer === 'bad' ? 'BAHAYA' : 'BAIK'}</b></div>
        <div class="fact"><small>Menang bersama</small><b>${r.f === 'good' ? 'Kampung' : r.f === 'wolf' ? 'Pihak Harimau' : 'Sendiri'}</b></div>
        <div class="fact"><small>Bilangan kad</small><b>${r.multi ? 'Boleh lebih 1' : '1 sahaja'}</b></div>
      </div>
      <button class="btn btn-ghost btn-block" onclick="window.closeSheet()">Tutup</button>`);
  };
  window.openHowTo = function () {
    openSheet(`<div class="pagehead"><span class="eyebrow emas">Cara main</span><h1>Jadian dalam 1 minit</h1></div>
      <ol class="howto">
        <li><b>Agih watak.</b> Setiap orang dapat kad rahsia: Pasukan Kampung, Pihak Harimau, atau Solo.</li>
        <li><b>Malam.</b> Semua tutup mata. Harimau Jadian bangun dan pilih mangsa. Watak berkuasa lain bangun ikut giliran.</li>
        <li><b>Pagi.</b> App umum siapa terkorban dan peristiwa kampung hari itu.</li>
        <li><b>Mahkamah Kampung.</b> Bermesyuarat, tuduh, beri peluang bela diri, kemudian undi siapa dihalau.</li>
        <li><b>Menang.</b> Kampung menang bila semua Harimau, Musuh Dalam Selimut dan Pontianak tumpas. Pihak Harimau menang bila bilangan mereka menyamai yang lain. Watak solo dan pasangan bercinta ada syarat sendiri.</li>
      </ol>
      <div class="sub-h">Peraturan penting</div>
      <ol class="howto">
        <li><b>Turutan perlindungan malam:</b> Air Penawar → Mak Bidan → Peronda RT → kebal Pontianak → Abang Sado → gigitan Harimau Tua atau Kena Gigit → mati.</li>
        <li><b>Toyol bertindak dulu.</b> Kuasa yang dicuri batal malam itu, tapi tuannya tetap dikira "keluar" oleh Mak Cik Bawang.</li>
        <li><b>Mati merana.</b> Kalau seorang pasangan Mak Andam mati, pasangannya terus mati juga.</li>
        <li><b>Seri dalam undian</b> bermaksud tiada siapa dihalau.</li>
        <li><b>Watak bertukar</b> (Hantu Raya, Kena Gigit, Musuh Dalam Selimut, gigitan Harimau Tua) dimaklumkan secara rahsia pada malam berikutnya.</li>
      </ol>
      <button class="btn btn-emas btn-block" onclick="window.closeSheet()">Faham</button>`);
  };

  /* ==================== NAVIGASI ==================== */
  window.go = function (pg) {
    if (game) return;
    if (curPg && pg !== curPg) beep('tab');
    curPg = pg;
    ['home', 'players', 'roles', 'settings', 'game'].forEach((k) => { const el = $('pg_' + k); el.hidden = k !== pg; el.classList.toggle('enter', k === pg); });
    document.querySelectorAll('.tab').forEach((t) => { if (t.dataset.pg === pg) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current'); });
    $('tabbar').hidden = false; $('topbar').hidden = false;
    $('topbar').classList.toggle('on-home', pg === 'home');
    window.scrollTo(0, 0); renderSetup();
  };
  function showGameScreen() {
    ['home', 'players', 'roles', 'settings'].forEach((k) => { $('pg_' + k).hidden = true; });
    $('pg_game').hidden = false; $('tabbar').hidden = true; $('topbar').hidden = true; $('notesCard').hidden = true;
    window.scrollTo(0, 0);
  }
  window.selectGameMode = function (m) { beep('click'); setup.mode = m; savePrefs(); if (setup.balMode === 'auto') autoBal(); renderSetup(); };

  /* ==================== PEMAIN & SENARAI SIMPANAN ==================== */
  function nextAva() { const used = new Set(setup.players.map((p) => p.ava)); return AVA.find((a) => !used.has(a)) || AVA[setup.players.length % AVA.length]; }
  function rebalance() { setup.balMode === 'auto' ? autoBal() : syncKampung(); }
  window.addPlayer = function () {
    const inp = $('newPlayerInput'), name = inp.value.trim().replace(/\s+/g, ' ');
    if (!name) { inp.focus(); return; }
    if (setup.players.length >= 20) { toast('Maksimum 20 pemain.'); return; }
    if (setup.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) { toast(`Nama "${name}" dah ada dalam senarai.`); inp.select(); return; }
    setup.players.push({ id: Date.now() + Math.floor(Math.random() * 1000), name, ava: nextAva() });
    inp.value = ''; inp.focus(); beep('click'); rebalance(); renderSetup();
  };
  window.removePlayer = function (id) { setup.players = setup.players.filter((p) => p.id !== id); beep('click'); rebalance(); renderSetup(); };
  window.clearAllPlayers = function () {
    if (!setup.players.length) return;
    ask({ title: 'Kosongkan senarai?', body: `Semua ${setup.players.length} nama dalam senarai semasa akan dibuang. Senarai tersimpan tak terjejas.`, ok: 'Kosongkan', danger: true,
      onOk: () => { setup.players = []; rebalance(); renderSetup(); } });
  };
  window.toggleSaveForm = function () {
    if (!setup.players.length) { toast('Tambah pemain dulu sebelum simpan.'); return; }
    const box = $('saveFormBox'); box.hidden = !box.hidden; if (!box.hidden) $('saveGroupNameInput').focus();
  };
  window.saveCurrentToNewGroup = function () {
    if (!setup.players.length) return;
    const inp = $('saveGroupNameInput'), title = inp.value.trim() || ('Kumpulan ' + (savedGroups.length + 1));
    savedGroups.unshift({ id: Date.now(), title, players: JSON.parse(JSON.stringify(setup.players)) });
    saveGroups(); inp.value = ''; $('saveFormBox').hidden = true; beep('success'); toast(`Disimpan sebagai "${title}".`); renderSetup();
  };
  window.loadGroupById = function (gid) {
    const grp = savedGroups.find((g) => g.id === gid); if (!grp) return;
    beep('success'); setup.players = JSON.parse(JSON.stringify(grp.players)).slice(0, 20);
    rebalance(); renderSetup(); toast(`"${grp.title}" dimuatkan: ${setup.players.length} pemain.`);
  };
  window.startRenameGroup = function (gid) { editingGroupId = gid; renderGroups(); const i = $('renameInp_' + gid); if (i) { i.focus(); i.select(); } };
  window.confirmRenameGroup = function (gid) {
    const inp = $('renameInp_' + gid), grp = savedGroups.find((g) => g.id === gid);
    if (grp && inp && inp.value.trim()) { grp.title = inp.value.trim(); saveGroups(); }
    editingGroupId = null; renderGroups();
  };
  window.overwriteGroupPlayers = function (gid) {
    const grp = savedGroups.find((g) => g.id === gid); if (!grp || !setup.players.length) return;
    ask({ title: `Kemaskini "${grp.title}"?`, body: `Ahli lama (${grp.players.length}) akan diganti dengan ${setup.players.length} pemain dalam senarai semasa.`, ok: 'Kemaskini',
      onOk: () => { grp.players = JSON.parse(JSON.stringify(setup.players)); saveGroups(); renderGroups(); toast('Ahli dikemaskini.'); } });
  };
  window.deleteGroupById = function (gid) {
    const grp = savedGroups.find((g) => g.id === gid); if (!grp) return;
    ask({ title: `Padam "${grp.title}"?`, body: 'Senarai tersimpan ini akan dibuang dari peranti ini.', ok: 'Padam', danger: true,
      onOk: () => { savedGroups = savedGroups.filter((g) => g.id !== gid); saveGroups(); renderSetup(); } });
  };
  function renderGroups() {
    $('gCount').textContent = savedGroups.length;
    const c = $('savedGroupsList');
    if (!savedGroups.length) { c.innerHTML = `<div class="empty"><b>Belum ada senarai tersimpan</b>Tambah nama pemain, kemudian tekan "Simpan senarai ini".</div>`; return; }
    c.innerHTML = savedGroups.map((g) => {
      const editing = editingGroupId === g.id;
      return `<div class="group">
        ${editing ? `<form class="addrow" onsubmit="event.preventDefault(); window.confirmRenameGroup(${g.id});"><input id="renameInp_${g.id}" class="input" value="${esc(g.title)}" maxlength="30" /><button class="btn btn-pandan btn-sm" type="submit">Simpan</button></form>`
          : `<div class="group-top"><span class="group-title">${esc(g.title)}</span><span class="tag">${g.players.length} pemain</span></div>`}
        <div class="group-members">${g.players.map((p) => `${p.ava} ${esc(p.name)}`).join(' · ') || 'Tiada ahli'}</div>
        <div class="btn-row">
          <button class="btn btn-emas btn-sm" onclick="window.loadGroupById(${g.id})">Guna senarai</button>
          ${editing ? '' : `<button class="btn btn-ghost btn-sm" onclick="window.startRenameGroup(${g.id})">Tukar nama</button>`}
          ${setup.players.length ? `<button class="btn btn-ghost btn-sm" onclick="window.overwriteGroupPlayers(${g.id})">Kemaskini ahli</button>` : ''}
          <button class="btn btn-ghost btn-sm" style="flex:0 0 auto;color:#ff9b93;" onclick="window.deleteGroupById(${g.id})" aria-label="Padam ${esc(g.title)}">Padam</button>
        </div></div>`;
    }).join('');
  }

  /* ==================== AUTO-BALANCE & MANUAL ==================== */
  const specCount = (rc) => IDS.reduce((a, k) => (k === 'orang_kampung' ? a : a + (rc[k] || 0)), 0);
  const scoreOf = (rc) => IDS.reduce((a, k) => a + (rc[k] || 0) * ROLES[k].w, 0);
  // Setiap Orang Kampung tambah +1, jadi julat "seimbang" membesar sedikit ikut saiz kumpulan.
  const balanceRange = (n) => ({ lo: -2, hi: 5 + Math.floor(n / 6) });
  const PRESETS = {
    santai: (n, rc) => { if (n >= 7) rc.cikgu = 1; if (n >= 9) rc.pemburu = 1; if (n >= 11) rc.peronda = 1; if (n >= 13) rc.anak_datuk = 1; if (n >= 15) rc.ketua = 1; },
    kecoh: (n, rc) => { if (n >= 5) rc.si_luncai = 1; if (n >= 7) rc.mak_dukun = 1; if (n >= 8) rc.hantu_raya = 1; if (n >= 9) rc.pak_pandir = 1; if (n >= 10) rc.musuh = 1; if (n >= 11) rc.pendendam = 1; if (n >= 12) rc.mak_andam = 1; if (n >= 13) rc.mak_cik_bawang = 1; if (n >= 14) rc.pak_belalang = 1; if (n >= 16) rc.ketua = 1; },
    ganas: (n, rc) => { if (n >= 5) rc.mak_dukun = 1; if (n >= 6) rc.pemburu = 1; if (n >= 8) rc.pontianak = 1; if (n >= 9) rc.anak_harimau = 1; if (n >= 10) rc.abang_sado = 1; if (n >= 12) rc.toyol = 1; if (n >= 13) rc.kena_gigit = 1; if (n >= 15) rc.harimau_tua = 1; if (n >= 16) rc.pelesit = 1; if (n >= 17) rc.peronda = 1; }
  };
  window.setBalanceMode = function (m) { beep('click'); setup.balMode = m; if (m === 'auto') autoBal(); renderSetup(); };
  window.setAutoPreset = function (p) { beep('click'); setup.preset = p; savePrefs(); autoBal(); renderSetup(); };
  function autoBal() {
    const n = setup.players.length, rc = emptyRc();
    if (n === 0) { setup.rc = rc; return; }
    if (n < 4) { rc.harimau = 1; rc.orang_kampung = Math.max(0, n - 1); setup.rc = rc; return; }
    rc.tok_nujum = 1; rc.mak_bidan = 1;
    PRESETS[setup.preset](n, rc);
    // Had kawanan kira-kira 1 untuk setiap 4 pemain, ikut panduan Ultimate Werewolf.
    const pack = () => rc.harimau + rc.anak_harimau + rc.harimau_tua;
    const maxPack = Math.max(1, Math.round(n / 4)), hi = balanceRange(n).hi;
    // Minimum kawanan ~1 setiap 5 pemain, supaya kumpulan besar tak cuma ada seekor Harimau.
    rc.harimau = Math.max(0, Math.max(1, Math.floor(n / 5)) - rc.anak_harimau - rc.harimau_tua);
    if (pack() === 0) rc.harimau = 1;
    rc.orang_kampung = n - specCount(rc);
    while (scoreOf(rc) > hi && rc.orang_kampung > 0 && pack() < maxPack) { rc.harimau++; rc.orang_kampung = n - specCount(rc); }
    // Kalau terlalu berat ke pihak Harimau, kurangkan Harimau biasa (kekalkan sekurang-kurangnya 1 ahli kawanan).
    while (scoreOf(rc) < balanceRange(n).lo && rc.harimau > 0 && pack() > 1) { rc.harimau--; rc.orang_kampung = n - specCount(rc); }
    rc.orang_kampung = Math.max(0, rc.orang_kampung);
    setup.rc = rc;
  }
  function syncKampung() { const n = setup.players.length, spec = specCount(setup.rc); if (spec <= n) setup.rc.orang_kampung = n - spec; }
  window.adjustRoleCount = function (rId, d) {
    if (setup.balMode !== 'manual') return;
    const next = (setup.rc[rId] || 0) + d; if (next < 0) return;
    // Watak unik cuma 1 kad: dua Tok Nujum atau dua Mak Bidan akan bangun serentak dan kenal sesama sendiri.
    if (d > 0 && next > 1 && !ROLES[rId].multi) { toast(`${RN(rId)} cuma boleh ada 1 dalam dek.`); return; }
    beep('click'); setup.rc[rId] = next; if (rId !== 'orang_kampung') syncKampung(); renderSetup();
  };
  window.toggleRule = function (k, v) { setup.rules[k] = v; savePrefs(); renderSetup(); };
  window.setPref = function (k, v) { setup[k] = v; savePrefs(); };

  function readiness() {
    const n = setup.players.length, rc = setup.rc;
    const tot = IDS.reduce((a, k) => a + rc[k], 0);
    const sum = (f) => IDS.filter((k) => ROLES[k].f === f).reduce((a, k) => a + rc[k], 0);
    const killers = rc.harimau + rc.anak_harimau + rc.harimau_tua + rc.pontianak;
    return { n, tot, good: sum('good'), wolf: sum('wolf'), solo: sum('solo'), killers, score: scoreOf(rc), ok: tot === n && killers >= 1 && n >= 4 };
  }
  function verdict(r) {
    if (r.n === 0) return { cls: '', txt: 'Tiada pemain' };
    const b = balanceRange(r.n), s = r.score > 0 ? '+' + r.score : String(r.score);
    if (r.score < b.lo) return { cls: 'wolf', txt: `Berat Harimau (${s})` };
    if (r.score > b.hi) return { cls: 'warn', txt: `Berat Kampung (${s})` };
    return { cls: 'good', txt: `Seimbang (${s})` };
  }

  function renderSetup() {
    const r = readiness(), v = verdict(r), rc = setup.rc;
    $('tabCount').hidden = r.n === 0; $('tabCount').textContent = r.n;
    $('tabPlay').disabled = !r.ok;

    // ---- Utama
    const presetName = setup.balMode === 'manual' ? 'Manual Bebas' : { santai: 'Santai', kecoh: 'Kecoh', ganas: 'Ganas' }[setup.preset];
    const row = (ok, ic, label, desc, pg) => `<button class="srow" onclick="window.go('${pg}')"><span class="ic" style="--c:${ok ? 'var(--pandan)' : 'var(--merah)'}">${ic}</span>
      <span><b>${label}</b><small>${desc}</small></span><span class="chev">›</span></button>`;
    const roleOk = r.n >= 4 && r.tot === r.n && r.killers >= 1;
    $('setupRows').innerHTML =
      row(r.n >= 4, ICONS.ui_players, 'Pemain', r.n >= 4 ? `${r.n} orang sedia main` : r.n ? `${r.n} orang. Perlu sekurang-kurangnya 4.` : 'Belum ada pemain', 'players') +
      row(roleOk, ICONS.ui_roles, 'Watak', r.n < 4 ? 'Tambah pemain dulu' : r.tot !== r.n ? `${r.tot} kad untuk ${r.n} pemain. Belum sepadan.` : r.killers < 1 ? 'Belum ada pembunuh' : `${presetName} · ${v.txt}`, 'roles') +
      row(true, ICONS.ui_settings, 'Tetapan', `${setup.voteMode === 'mahkamah' ? 'Mahkamah Kampung' : 'Undian Pantas'} · mesyuarat ${setup.disc === 'auto' ? 'auto' : Math.round(setup.disc / 60) + ' minit'}`, 'settings');
    const mode = MODES.find((m) => m.id === setup.mode);
    $('modeTag').textContent = mode.name;
    $('modeList').innerHTML = MODES.map((m) => `<button class="mode" aria-pressed="${m.id === setup.mode}" onclick="window.selectGameMode('${m.id}')"><span class="ic">${m.ic}</span><b>${m.name}</b></button>`).join('');
    $('modeDesc').textContent = mode.d;
    const deck = IDS.filter((k) => rc[k] > 0);
    $('homeDeck').innerHTML = deck.length
      ? deck.map((k) => `<span class="tag ${ROLES[k].f === 'good' ? 'good' : ROLES[k].f === 'wolf' ? 'wolf' : 'solo'}">${RL(k)} × ${rc[k]}</span>`).join('')
      : `<span class="muted small">Dek kosong. Tambah pemain dulu.</span>`;
    $('homeStart').disabled = !r.ok;
    $('homeStart').textContent = r.ok ? `Mula Malam Pertama · ${r.n} pemain` : 'Lengkapkan persediaan dulu';

    // ---- Pemain
    $('pCount').textContent = r.n + ' pemain';
    $('pCount').className = 'tag ' + (r.n >= 4 ? 'good' : r.n > 0 ? 'warn' : '');
    $('playerList').innerHTML = r.n === 0
      ? `<div class="empty"><b>Kampung masih sunyi</b>Taip nama di atas, atau guna senarai tersimpan di bawah.</div>`
      : `<div class="plist">${setup.players.map((p, i) => `<div class="prow"><span class="ava">${p.ava}</span><span class="num">${i + 1}</span><span class="nm">${esc(p.name)}</span>
          <button class="x" onclick="window.removePlayer(${p.id})" aria-label="Buang ${esc(p.name)}">✕</button></div>`).join('')}</div>`;
    $('playerTools').hidden = r.n === 0; if (r.n === 0) $('saveFormBox').hidden = true;
    renderGroups();

    // ---- Watak
    const isMan = setup.balMode === 'manual';
    $('tabAuto').setAttribute('aria-pressed', !isMan); $('tabManual').setAttribute('aria-pressed', isMan);
    $('presetBar').hidden = isMan;
    ['santai', 'kecoh', 'ganas'].forEach((k) => $('pb_' + k).setAttribute('aria-pressed', k === setup.preset));
    $('totLbl').textContent = `${r.tot} / ${r.n} kad`; $('totLbl').style.color = r.tot === r.n ? '' : '#ff9b93';
    $('scoreLbl').className = 'tag ' + v.cls; $('scoreLbl').textContent = v.txt;
    const den = Math.max(1, r.tot);
    $('mGood').style.width = (r.good / den * 100) + '%'; $('mSolo').style.width = (r.solo / den * 100) + '%'; $('mBad').style.width = (r.wolf / den * 100) + '%';
    $('goodLbl').textContent = `Kampung ${r.good}`; $('badLbl').textContent = `Harimau ${r.wolf}`; $('soloLbl').textContent = `Solo ${r.solo}`;
    $('roleList').innerHTML = FACTIONS.map((fa) => `<div class="rgroup" style="--c:${fa.c}"><div class="rgroup-h">${fa.name}</div>
      ${IDS.filter((k) => ROLES[k].f === fa.f).map((k) => {
        const c = rc[k] || 0, ro = ROLES[k];
        return `<div class="role ${c > 0 ? 'on' : ''}">
          <button class="role-info" onclick="window.openRole('${k}')"><span class="ic">${ro.i}</span><span class="txt"><b>${esc(RN(k))}</b><small>${ro.s}</small></span></button>
          <span class="stepper">
            <button ${!isMan || c <= 0 ? 'disabled' : ''} onclick="window.adjustRoleCount('${k}',-1)" aria-label="Kurang ${esc(RN(k))}">−</button>
            <span>${c}</span>
            <button ${!isMan || (c >= 1 && !ro.multi) ? 'disabled' : ''} onclick="window.adjustRoleCount('${k}',1)" aria-label="Tambah ${esc(RN(k))}">+</button>
          </span></div>`;
      }).join('')}</div>`).join('') + (isMan ? '' : `<p class="muted small" style="margin:0">Butang + dan − dikunci dalam Auto-Balance. Tukar ke Manual Bebas untuk susun sendiri.</p>`);
    const diags = [];
    if (r.n < 4) diags.push(['warn', 'Tambah sekurang-kurangnya 4 pemain untuk mula.']);
    else {
      if (r.tot !== r.n) diags.push(['bad', `Jumlah kad (${r.tot}) tak sama dengan jumlah pemain (${r.n}).`]);
      if (r.killers === 0) diags.push(['bad', 'Pilih sekurang-kurangnya 1 pembunuh: Harimau Jadian, Anak Harimau, Harimau Tua atau Pontianak.']);
      if (rc.musuh > 0 && rc.harimau + rc.anak_harimau + rc.harimau_tua === 0) diags.push(['warn', 'Musuh Dalam Selimut tanpa Harimau akan terus jadi Harimau pada malam pertama.']);
      if (rc.mak_bidan === 0 && rc.mak_dukun === 0 && rc.peronda === 0) diags.push(['warn', 'Tiada pelindung malam (Mak Bidan, Mak Dukun atau Peronda RT).']);
      if ((rc.mak_dukun || rc.mak_cik_bawang || rc.toyol) && setup.mode === 'pass_play') diags.push(['warn', 'Pass & Play akan tambah Pusingan Subuh selepas setiap malam, untuk Mak Dukun, Mak Cik Bawang atau Toyol.']);
      if (!diags.length) diags.push(['good', 'Susunan watak lengkap dan sedia dimainkan.']);
    }
    $('diagBox').innerHTML = diags.map(([t, m]) => `<div class="note ${t}">${m}</div>`).join('');

    // ---- Tetapan
    const sw = (x) => `<div class="set-row"><div><b>${x.name}</b><small>${x.d}</small></div>
      <label class="switch"><input type="checkbox" ${setup.rules[x.k] ? 'checked' : ''} onchange="window.toggleRule('${x.k}', this.checked)" aria-label="${x.name}" /><span class="track"></span></label></div>`;
    $('featuresBox').innerHTML = FEATURES.map(sw).join('');
    $('rulesBox').innerHTML = RULES.map(sw).join('');
    $('selDiscuss').value = setup.disc; $('selVote').value = setup.vote; $('selHold').value = setup.hold; $('selVoteMode').value = setup.voteMode;
    renderSoundUI();
  }

  /* ==================== ENJIN PERMAINAN ==================== */
  function resetTemps() { tempTargetId = null; tempTargets = []; tempDukun = { save: null, poison: null }; tempBite = false; tempQR = false; seerDone = false; }
  const gp = (id) => game.players.find((p) => p.id === id);
  const alive = () => game.players.filter((p) => p.alive);
  const has = (r) => game.players.some((p) => p.alive && p.role === r);
  const holder = (r) => alive().find((p) => p.role === r);
  const dispRole = (p) => (p.role === 'pak_belalang' ? 'tok_nujum' : p.role);
  const deckHas = (r) => (game.rc[r] || 0) > 0;
  const nightEv = () => game.nightEvent;

  function setRole(p, id) {
    p.role = id;
    if (id === 'mak_dukun' && !p.potions) p.potions = { penawar: true, racun: true };
  }
  function addNotice(p, n) { p.notices = p.notices || []; p.notices.push(n); }
  function assignTargets() { game.players.filter((p) => p.alive && p.role === 'pendendam' && !p.target).forEach(pickTarget); }
  function pickTarget(p) {
    let pool = game.players.filter((x) => x.alive && x.id !== p.id && x.role && ROLES[x.role].f === 'good');
    if (!pool.length) pool = game.players.filter((x) => x.alive && x.id !== p.id);
    p.target = pool.length ? pool[Math.floor(Math.random() * pool.length)].id : null;
  }

  window.startGame = function () {
    const r = readiness();
    if (!r.ok) {
      if (r.n < 4) { toast('Perlu sekurang-kurangnya 4 pemain.'); window.go('players'); }
      else { toast('Susunan kad belum lengkap.'); window.go('roles'); }
      return;
    }
    beep('flip'); audioKey = null;
    const deck = [];
    IDS.forEach((k) => { for (let i = 0; i < setup.rc[k]; i++) deck.push(k); });
    for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
    const rc = { ...setup.rc };
    const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    game = {
      mode: setup.mode, rc, rules: { ...setup.rules }, voteMode: setup.voteMode,
      code: Array.from({ length: 4 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join(''),
      dealt: {}, dealView: null,
      discTime: setup.disc, voteTime: parseInt(setup.vote, 10), holdSec: parseInt(setup.hold, 10) || 0,
      night: 1, phase: setup.mode === 'mod_digital' ? 'deal' : 'night',
      players: setup.players.map((p) => ({ id: p.id, name: p.name, ava: p.ava, role: null, orig: null, alive: true, muted: false, idol: null, notices: [], target: null, sadoUsed: false, datukUsed: false, biteUsed: false, ghostUsed: false, revealed: false })),
      packAtStart: (rc.harimau || 0) + (rc.anak_harimau || 0) + (rc.harimau_tua || 0),
      lastDoc: null, lastMute: null, actions: {}, steps: [], stepIdx: 0, lovers: null,
      pp: { round: 'malam', idx: 0, open: false },
      needSubuh: rc.mak_dukun > 0 || rc.mak_cik_bawang > 0 || rc.toyol > 0, delayInfo: rc.toyol > 0,
      hunters: [], hunterNext: null, logs: [], winner: null, summary: null, verdict: null, cubRevenge: false,
      event: null, nightEvent: null, radar: null, court: null, _dead: []
    };
    if (setup.mode !== 'mod_fizikal') {
      game.players.forEach((p) => { setRole(p, deck.pop()); p.orig = p.role; });
      afterRolesKnown();
    }
    history = []; resetTemps(); showGameScreen();
    if (game.phase === 'night') initNight(); else renderStage();
  };
  function afterRolesKnown() { game.packAtStart = game.players.filter(isPack).length; assignTargets(); convertTraitors(); }
  function finalizePhysicalTags() {
    if (game.mode !== 'mod_fizikal') return;
    const specialLeft = IDS.some((k) => k !== 'orang_kampung' && game.players.filter((p) => p.orig === k).length < (game.rc[k] || 0));
    if (!specialLeft && game.players.some((p) => !p.role)) {
      game.players.forEach((p) => { if (!p.role) { setRole(p, 'orang_kampung'); p.orig = 'orang_kampung'; } });
      afterRolesKnown();
    }
  }

  function snap() { history.push(JSON.stringify(game)); if (history.length > 30) history.shift(); }
  const undoAllowed = () => game && history.length > 0 && !(game.mode === 'pass_play' && game.phase === 'night');
  window.undoLastStep = function () {
    if (!undoAllowed()) return;
    beep('click'); clearInterval(timerInt); audioQuiet = true;
    game = JSON.parse(history.pop()); resetTemps();
    if (game.phase === 'discuss') {
      let s = game.discTime === 'auto' ? alive().length * 30 : parseInt(game.discTime, 10);
      if (game.event && game.event.id === 'pasar') s += 60;
      if (game.event && game.event.id === 'hujan') s = Math.max(30, Math.round(s / 2));
      remSec = timerTotal = s; renderStage(); startTimer(); return;
    }
    if (game.phase === 'vote') { remSec = timerTotal = game.voteTime; renderStage(); startTimer(); return; }
    if (game.phase === 'defense') { remSec = timerTotal = game.voteTime; renderStage(); startTimer(); return; }
    renderStage();
  };
  window.toggleNotes = function () { $('notesCard').hidden = !$('notesCard').hidden; };
  window.exitGame = function () {
    const leave = () => { clearInterval(timerInt); clearInterval(minInt); window.holdEnd(); game = null; history = []; resetTemps(); phaseFx(); document.body.classList.remove('day'); window.go('home'); };
    if (!game || game.phase === 'over') { leave(); return; }
    ask({ title: 'Tamatkan permainan?', body: 'Permainan yang sedang berjalan akan hilang. Senarai pemain dan tetapan kekal.', ok: 'Tamatkan', danger: true, onOk: leave });
  };
  window.playAgain = function () { clearInterval(timerInt); game = null; window.startGame(); };
  window.startNightPhase = function () { snap(); initNight(); };

  function initNight() {
    clearInterval(timerInt);
    game.phase = 'night';
    game.nightEvent = game.event ? game.event.id : null;
    game.actions = { wolf: [], wolfBy: null, convert: false, convertBy: null, doc: null, docBy: null, guard: null, guardBy: null, sk: null, skBy: null,
      mute: null, muteBy: null, save: null, poison: null, dukunBy: null, block: null, info: {}, res: {} };
    game.wolfCount = (game.cubRevenge ? 2 : 1) + (game.nightEvent === 'purnama' ? 1 : 0);
    game.radar = { s: {}, t: {} };
    game.players.forEach((p) => { p.muted = false; });
    resetTemps();
    if (game.mode === 'pass_play') game.pp = { round: 'malam', idx: 0, open: false };
    else { game.steps = buildSteps(); game.stepIdx = 0; }
    renderStage();
  }

  /* ---------- Turutan malam (mod moderator & kad fizikal) ---------- */
  function buildSteps() {
    const s = [], n = game.night, fiz1 = game.mode === 'mod_fizikal' && n === 1;
    const inPlay = (r) => has(r) || (fiz1 && deckHas(r));
    game.players.forEach((p) => { if (p.alive && p.notices && p.notices.length) s.push({ t: 'notice', pId: p.id }); });
    if (n === 1 && inPlay('mak_andam')) { s.push({ t: 'mak_andam' }); s.push({ t: 'lovers' }); }
    if (n === 1 && inPlay('hantu_raya')) s.push({ t: 'hantu_raya' });
    // Watak yang dah mati tetap "dipanggil" (kalau tetapan hidup) supaya bunyi skrip tak dedahkan siapa yang dah tiada.
    const step = (r) => { if (inPlay(r)) s.push({ t: r }); else if (game.rules.callDead && deckHas(r)) s.push({ t: r, dead: true }); };
    ['toyol', 'mak_bidan', 'peronda'].forEach(step);
    if (alive().some(isPack) || (fiz1 && (deckHas('harimau') || deckHas('anak_harimau') || deckHas('harimau_tua')))) s.push({ t: 'harimau' });
    if (fiz1) ['pak_pandir', 'musuh'].forEach((r) => { if (deckHas(r)) s.push({ t: r, tagOnly: true }); });
    ['mak_dukun', 'pontianak', 'pelesit', 'tok_nujum', 'pak_belalang', 'cikgu', 'mak_cik_bawang'].forEach(step);
    if (fiz1) ['pemburu', 'ketua', 'anak_datuk', 'abang_sado', 'kena_gigit', 'si_luncai', 'pendendam'].forEach((r) => { if (deckHas(r)) s.push({ t: r, tagOnly: true }); });
    return s;
  }
  function untaggedRoleForStep(st) {
    if (!st || game.mode !== 'mod_fizikal' || game.night !== 1) return null;
    if (st.t === 'harimau') {
      for (const r of ['harimau', 'anak_harimau', 'harimau_tua']) {
        const need = (game.rc[r] || 0) - game.players.filter((p) => p.orig === r).length;
        if (need > 0) return { r, need };
      }
      return null;
    }
    if (ROLES[st.t]) {
      const need = (game.rc[st.t] || 0) - game.players.filter((p) => p.orig === st.t).length;
      if (need > 0) return { r: st.t, need };
    }
    return null;
  }
  const SAY = {
    mak_andam: 'Mak Andam, buka mata. Tunjuk 2 orang untuk dijodohkan.',
    hantu_raya: 'Hantu Raya, buka mata. Tunjuk seorang tuan. Bila tuan mati, kau ambil alih wataknya.',
    toyol: 'Toyol, buka mata. Kuasa siapa nak dicuri malam ni?',
    mak_bidan: 'Mak Bidan, buka mata. Siapa nak dijaga malam ni?',
    peronda: 'Peronda RT, buka mata. Rumah siapa nak dikawal malam ni?',
    harimau: 'Harimau Jadian, buka mata. Kenal kawan kau. Rumah siapa nak diserbu malam ni?',
    mak_dukun: 'Mak Dukun, buka mata. Ini mangsa malam ni. Nak guna Air Penawar? Ada sesiapa nak diberi Racun?',
    pontianak: 'Pontianak, buka mata. Siapa mangsa kau malam ni?',
    pelesit: 'Pelesit, buka mata. Tunjuk seorang untuk diintai.',
    tok_nujum: 'Tok Nujum, buka mata. Tunjuk seorang untuk ditilik.',
    pak_belalang: 'Tok Nujum, buka mata. Tunjuk seorang untuk ditilik.',
    cikgu: 'Cikgu Disiplin, buka mata. Siapa kena denda diam esok?',
    mak_cik_bawang: 'Mak Cik Bawang, buka mata. Rumah siapa nak diintai malam ni?'
  };
  const TONE = { harimau: 'bad', pontianak: 'bad', toyol: 'bad', mak_bidan: 'good', peronda: 'good', mak_andam: 'good' };

  // Sekatan sasaran dikongsi oleh mod moderator dan Pass & Play. Pulangkan sebab, atau null kalau boleh dipilih.
  function blockReason(kind, p, actor) {
    switch (kind) {
      case 'hantu_raya': case 'peronda': case 'pontianak': case 'tok_nujum': case 'pak_belalang': case 'toyol': case 'pelesit': case 'mak_cik_bawang':
        return (actor ? p.id === actor.id : p.role === kind) ? 'Diri sendiri' : null;
      case 'mak_bidan':
        if (!game.rules.docSelf && (actor ? p.id === actor.id : p.role === 'mak_bidan')) return 'Tak boleh diri sendiri';
        if (game.rules.docNoRep && p.id === game.lastDoc) return 'Dijaga semalam';
        return null;
      case 'harimau': return isPack(p) ? 'Kawan kawanan' : null;
      case 'cikgu': return p.id === game.lastMute ? 'Didenda semalam' : null;
      case 'racun': return (actor ? p.id === actor.id : p.role === 'mak_dukun') ? 'Diri sendiri' : null;
      case 'dummy': return actor && p.id === actor.id ? 'Diri sendiri' : null;
      default: return null;
    }
  }
  function seerCheck(t) {
    if (isPack(t) && game.packAtStart === 1 && game.night === 1 && game.rules.loneWolf) return { ok: true, txt: 'BAIK 👍' };
    const r = t.role || 'orang_kampung';
    return ROLES[r].seer === 'bad' ? { ok: false, txt: 'BAHAYA 👎' } : { ok: true, txt: 'BAIK 👍' };
  }
  // Keputusan kuasa maklumat: Tok Nujum, Pak Belalang, Pelesit, Mak Cik Bawang. Mengambil kira Toyol dan Blackout.
  function infoResult(kind, actorId, targetId) {
    const a = game.actions, t = gp(targetId);
    if (!t) return null;
    if (nightEv() === 'blackout') return { cls: 'warn', txt: '🔌 Blackout. Gelap gelita, tiada apa yang nampak.' };
    if (actorId && a.block === actorId) return { cls: 'warn', txt: '🧌 Kuasa kau dicuri Toyol malam ni. Tiada keputusan.' };
    if (kind === 'tok_nujum') { const r = seerCheck(t); return { cls: r.ok ? 'good' : 'bad', txt: `${esc(t.name)}: ${r.txt}` }; }
    if (kind === 'pak_belalang') {
      a.res[actorId] = a.res[actorId] || (Math.random() < .5 ? 'BAIK 👍' : 'BAHAYA 👎');
      return { cls: a.res[actorId].startsWith('BAIK') ? 'good' : 'bad', txt: `${esc(t.name)}: ${a.res[actorId]}` };
    }
    if (kind === 'pelesit') {
      const txt = t.role === 'tok_nujum' ? `${esc(t.name)} ialah ${RL('tok_nujum')}!` : t.role === 'mak_dukun' ? `${esc(t.name)} ialah ${RL('mak_dukun')}!` : `${esc(t.name)} bukan Tok Nujum atau ${esc(RN('mak_dukun'))}.`;
      return { cls: 'wolf', txt };
    }
    if (kind === 'mak_cik_bawang') {
      return wokeTonight(t) ? { cls: 'bad', txt: `👀 ${esc(t.name)} keluar rumah malam tadi!` } : { cls: 'good', txt: `🏠 ${esc(t.name)} duduk diam di rumah malam tadi.` };
    }
    return null;
  }
  // "Keluar rumah" = watak itu bangun waktu malam ini, tak kira pilihannya atau kuasanya dicuri.
  // Ikut watak, bukan ikut tindakan, supaya keputusan sama dalam mod Moderator dan Pass & Play.
  function wokeTonight(p) {
    const r = p.role, n = game.night;
    if (!r) return false;
    if (ROLES[r].pack) return nightEv() !== 'kenduri';
    if (r === 'mak_andam' || r === 'hantu_raya') return n === 1;
    return ['toyol', 'mak_bidan', 'peronda', 'mak_dukun', 'pontianak', 'pelesit', 'tok_nujum', 'pak_belalang', 'cikgu', 'mak_cik_bawang'].includes(r);
  }
  // Ayat makluman watak bertukar. Dipakai di telefon moderator dan di kad QR (yang tiada akses kepada data permainan).
  function noticeLine(nt, roleId) {
    if (nt.kind === 'hantu') return `👥 Tuan kau (${esc(nt.from)}) dah mati. Kau kini <b>${RL(roleId)}</b> dan main untuk pihak itu.`;
    if (nt.kind === 'musuh') return `🛏️ Semua Harimau dah tumpas. Kau kini <b>${RL('harimau')}</b>! Mulai malam ni kau bangun dan pilih mangsa.`;
    if (nt.kind === 'luncai') return `🎯 Sasaran kau mati bukan kerana undian. Kau kini <b>${RL('si_luncai')}</b>. Menang kalau kau diundi keluar.`;
    if (nt.kind === 'lover') return `💐 Mak Andam jodohkan kau dengan <b>${esc(nt.withName)}</b>. Kalau seorang mati, seorang lagi mati merana.`;
    if (nt.kind === 'gigit') return `🐅 Kau digigit Harimau Tua. Kau kini <b>${RL('harimau')}</b> dan sertai kawanan.`;
    if (nt.kind === 'kenagigit') return `🩹 Kau diserbu Harimau, tapi tak mati. Kau kini <b>${RL('harimau')}</b> dan sertai kawanan.`;
    return '';
  }
  function noticeHTML(p) { return (p.notices || []).map((nt) => noticeLine(nt, dispRole(p))).join('<br>'); }
  function rec(kind, by, t) {
    const a = game.actions;
    if (kind === 'toyol') a.block = t;
    else if (kind === 'mak_bidan') { a.doc = t; a.docBy = by; }
    else if (kind === 'peronda') { a.guard = t; a.guardBy = by; }
    else if (kind === 'pontianak') { a.sk = t; a.skBy = by; }
    else if (kind === 'cikgu') { a.mute = t; a.muteBy = by; }
    else if (INFO.includes(kind)) a.info[by] = { kind, t };
    else if (kind === 'hantu_raya') { const hr = gp(by), tp = gp(t); if (hr && tp) { hr.idol = t; game.logs.push(`Malam 1: ${esc(RN('hantu_raya'))} (${esc(hr.name)}) memilih ${esc(tp.name)} sebagai tuan.`); } }
  }
  function setLovers(ids) {
    if (!ids || ids.length !== 2) return;
    game.lovers = ids.slice();
    const [x, y] = ids.map(gp);
    game.logs.push(`Malam 1: Mak Andam menjodohkan ${esc(x.name)} dengan ${esc(y.name)}.`);
    if (game.mode === 'pass_play') { addNotice(x, { kind: 'lover', withName: y.name }); addNotice(y, { kind: 'lover', withName: x.name }); }
  }

  function setProgress(done, total, label) {
    const el = $('gProgress'); el.hidden = false;
    el.innerHTML = `<div class="steps">${Array.from({ length: total }, (_, i) => `<i class="${i < done ? 'done' : i === done ? 'now' : ''}"></i>`).join('')}</div><small>${label}</small>`;
  }
  function applyTheme() {
    const day = game && (['morning', 'discuss', 'vote', 'accuse', 'defense', 'tally', 'verdict', 'over'].includes(game.phase) || (game.phase === 'hunter' && game.hunterNext === 'vote'));
    document.body.classList.toggle('day', !!day);
  }
  const tcard = (p, o) => `<button class="tcard ${o.sel ? (o.tone === 'bad' ? 'sel-bad' : o.tone === 'good' ? 'sel-good' : 'sel') : ''}" ${o.dis ? 'disabled' : ''} onclick="${o.on}(${p.id})">
      <span class="ava">${p.ava}</span><b>${esc(p.name)}</b>${o.sub ? `<small>${o.sub}</small>` : ''}</button>`;
  // Kad hanya "terbalik" sekali, iaitu sejurus selepas skrin dibuka, bukan setiap kali pemain ketik pilihan.
  function kadHTML(p, extra, roleId) {
    const rid = roleId || p.role || 'orang_kampung', r = ROLES[rid], anim = flipNext; flipNext = false;
    return `<div class="kad ${anim ? 'anim' : ''}" style="--c:${FC[r.f]}"><div class="songket"></div><div class="kad-body">
      <span class="eyebrow">Watak rahsia ${esc(p.name)} · ${FNAME[r.f]}</span><span class="big">${r.i}</span><span class="rn">${esc(RN(rid))}</span><p>${r.d}</p>${extra || ''}</div></div>`;
  }
  const eventHTML = (id) => { const e = EVENTS[id]; return `<div class="event"><span class="ic">${e.i}</span><div><span class="eyebrow emas">Peristiwa kampung</span><b>${e.n}</b><small>${e.d}</small></div></div>`; };

  function renderNotes() {
    const hide = game.mode === 'pass_play' && game.phase !== 'over';
    $('noteList').innerHTML = (hide ? `<div class="note warn">Pass & Play: watak disembunyikan supaya tak bocor. Cuma status hidup atau mati ditunjuk.</div>` : '') +
      game.players.map((p) => {
        const label = p.role ? RL(p.role) : '❓ Belum di-tag';
        const extra = [p.orig && p.orig !== p.role ? `asal ${RN(p.orig)}` : '', p.role === 'pendendam' && p.target ? `sasaran ${esc(gp(p.target).name)}` : '',
          p.potions && p.role === 'mak_dukun' ? `${p.potions.penawar ? '💧' : ''}${p.potions.racun ? '☠️' : ''}` : '', game.lovers && game.lovers.includes(p.id) ? '💞' : '', p.revealed ? 'didedah' : ''].filter(Boolean).join(', ');
        const st = p.alive ? 'Hidup' : 'Mati';
        return `<div class="lrow ${p.alive ? '' : 'dead'}"><span>${p.ava} <b>${esc(p.name)}</b>${p.muted ? ' 📏' : ''}</span><span>${hide ? st : `${label}${extra ? ` <span class="muted">(${extra})</span>` : ''} · ${st}`}</span></div>`;
      }).join('');
  }

  function renderStage() {
    if (!game) return;
    applyTheme(); phaseFx();
    $('undoBtn').disabled = !undoAllowed();
    $('gProgress').hidden = true;
    renderNotes();
    const E = $('gEyebrow'), T = $('gTitle'), box = $('stage');
    const P = game.phase;

    if (P === 'deal') { E.textContent = `Sebelum Malam 1 · Kod ${game.code}`; T.textContent = 'Agih Kad'; renderDeal(box); return; }
    if (P === 'night') {
      E.textContent = `Malam ${game.night}`;
      if (game.mode === 'pass_play') { T.textContent = game.pp.round === 'subuh' ? 'Pusingan Subuh' : 'Giliran Rahsia'; renderPPNight(box); }
      else { T.textContent = game.mode === 'mod_fizikal' && game.night === 1 ? 'Skrip & Tag Kad' : 'Skrip Moderator'; renderModNight(box); }
      return;
    }
    if (P === 'hunter') {
      E.textContent = 'Pemburu'; T.textContent = 'Tembakan Terakhir';
      const h = gp(game.hunters[0]);
      box.innerHTML = `<div class="script"><span class="eyebrow emas">${RI('pemburu')} ${esc(h.name)} terkorban</span><p class="say">Pemburu boleh tembak 1 pemain untuk dibawa mati bersama, atau pilih untuk tak tembak.</p></div>
        <div class="tgrid">${alive().map((p) => tcard(p, { sel: tempTargetId === p.id, tone: 'bad', on: 'window.selectTarget' })).join('')}</div>
        <div class="btn-row"><button class="btn btn-ghost" onclick="window.confirmHunterShot(true)">Tak tembak</button><button class="btn btn-merah" ${!tempTargetId ? 'disabled' : ''} onclick="window.confirmHunterShot(false)">Tembak</button></div>`;
      return;
    }
    if (P === 'morning') {
      E.textContent = `Pagi Hari ${game.night}`; T.textContent = 'Kukuruyuk!';
      const s = game.summary;
      box.innerHTML = `<div class="script"><span class="eyebrow emas">Laporan pagi</span><p class="say">${s.dead.length === 0 ? 'Malam tadi aman. Tiada siapa terkorban.' : `${s.dead.length} orang kampung terkorban malam tadi.`}</p></div>
        ${s.dead.length ? `<div class="list">${s.dead.map((id) => { const p = gp(id); return `<div class="lrow"><span>${p.cause === 'merana' ? '💔' : '🪦'} <b>${esc(p.name)}</b></span><span>${game.rules.reveal ? RL(p.role || 'orang_kampung') : 'Watak dirahsiakan'}</span></div>`; }).join('')}</div>` : ''}
        ${s.muted ? `<div class="note warn center">📏 <b>${esc(gp(s.muted).name)}</b> didenda Cikgu Disiplin: tak boleh bercakap hari ini.</div>` : ''}
        ${game.event ? eventHTML(game.event.id) : ''}
        ${radarHTML()}
        <button class="btn btn-emas btn-block" onclick="window.startDayDiscussion()">Mula mesyuarat di balai raya</button>`;
      return;
    }
    if (P === 'discuss') {
      E.textContent = `Siang ${game.night}`; T.textContent = 'Mesyuarat Kampung';
      const mp = game.players.find((p) => p.alive && p.muted), ev = game.event && game.event.id;
      const nextBtn = ev === 'banjir'
        ? `<button class="btn btn-emas btn-block" onclick="window.skipVoteFlood()">🌊 Banjir Kilat: tiada undian, terus ke malam</button>`
        : `<button class="btn btn-merah btn-block" onclick="window.startDayVoting()">${game.voteMode === 'mahkamah' ? 'Ke Mahkamah Kampung' : 'Terus ke undian'}</button>`;
      box.innerHTML = `${mp ? `<div class="note bad center">📏 Didenda, tak boleh bercakap: <b>${mp.ava} ${esc(mp.name)}</b></div>` : ''}
        ${ev ? `<div class="chips"><span class="tag warn">${EVENTS[ev].i} ${EVENTS[ev].n}</span></div>` : ''}
        ${ringHTML(false)}
        <p class="hint" style="text-align:center;">${alive().length} orang masih hidup. Bincang, tuduh, pertahankan diri.</p>
        <div class="btn-row" style="justify-content:center;">
          <button class="btn btn-ghost btn-sm" style="flex:0 0 auto" onclick="window.adjustTimerSeconds(-30)">−30 saat</button>
          <button class="btn btn-ghost btn-sm" style="flex:0 0 auto" onclick="window.adjustTimerSeconds(60)">+1 minit</button>
          ${ketuaBtn()}
        </div>
        ${nextBtn}`;
      updateTimerUI(); return;
    }
    if (P === 'vote') {
      E.textContent = `Undian ${game.night}`; T.textContent = 'Siapa Nak Dihalau?';
      const k = revealedKetua();
      box.innerHTML = `<div class="script"><p class="say">Pilih pemain yang dapat undian terbanyak.</p><p class="hint">Kalau seri, tekan Seri / Skip.${k ? ` Undi Ketua Kampung (${esc(k.name)}) dikira 2.` : ''}</p></div>
        ${ringHTML(true)}
        <div class="tgrid">${alive().map((p) => tcard(p, { sel: tempTargetId === p.id, tone: 'bad', on: 'window.selectTarget', sub: p.muted ? '📏 Didenda' : (p.revealed ? RL(p.role) : '') })).join('')}</div>
        <div class="btn-row"><button class="btn btn-ghost" onclick="window.executeVote(null)">Seri / Skip</button><button class="btn btn-merah" ${!tempTargetId ? 'disabled' : ''} onclick="window.executeVote(${tempTargetId || 'null'})">Halau</button></div>`;
      updateTimerUI(); return;
    }
    if (P === 'accuse' || P === 'defense' || P === 'tally') { renderCourt(box, E, T); return; }
    if (P === 'verdict') {
      E.textContent = `Siang ${game.night}`; T.textContent = 'Keputusan Undian';
      const v = game.verdict, p = v.pId ? gp(v.pId) : null, pr = p && p.role ? p.role : 'orang_kampung';
      let body = '';
      if (v.kind === 'seri') body = `<div class="script"><p class="say">${v.flood ? '🌊 Banjir Kilat. Tiada undian hari ini.' : 'Undian seri. Tiada siapa dihalau hari ini.'}</p></div>`;
      else if (v.kind === 'datuk') body = `<div class="kad anim" style="--c:var(--pandan)"><div class="songket"></div><div class="kad-body"><span class="eyebrow">Tunggu dulu!</span><span class="big">${RI('anak_datuk')}</span><span class="rn">${esc(p.name)}</span><p>ialah <b>Anak Datuk</b>. Wataknya didedahkan dan dia terselamat kali ini.</p></div></div>`;
      else body = `<div class="kad anim" style="--c:${game.rules.reveal ? FC[ROLES[pr].f] : 'var(--kabur)'}"><div class="songket"></div><div class="kad-body"><span class="eyebrow">Dihalau dari kampung${v.votes ? ` · ${v.votes} undi` : ''}</span><span class="big">${game.rules.reveal ? RI(pr) : '🚪'}</span><span class="rn">${esc(p.name)}</span><p>${game.rules.reveal ? `Wataknya: <b>${esc(RN(pr))}</b>` : 'Wataknya dirahsiakan.'}</p></div></div>`;
      const extra = (v.extra || []).map((id) => `<div class="note solo">💔 <b>${esc(gp(id).name)}</b> mati merana kerana kehilangan pasangan.</div>`).join('');
      box.innerHTML = body + extra + `<button class="btn btn-emas btn-block" onclick="window.continueAfterVerdict()">Teruskan</button>`;
      return;
    }
    if (P === 'over') {
      E.textContent = 'Permainan tamat'; T.textContent = 'Keputusan';
      const w = game.winner;
      box.innerHTML = `<div class="win-banner" style="--c:${FC[w.f]}"><div class="songket"></div><div class="body"><div class="big">${w.icon}</div><h2>${esc(w.title)}</h2><p>${esc(w.sub)}</p></div></div>
        <div class="sub-h">Watak semua pemain</div>
        <div class="list">${game.players.map((p) => `<div class="lrow ${p.alive ? '' : 'dead'}"><span>${p.ava} <b>${esc(p.name)}</b> ${p.alive ? '' : '🪦'}${game.lovers && game.lovers.includes(p.id) ? ' 💞' : ''}</span><span>${RL(p.role || 'orang_kampung')}${p.orig && p.orig !== p.role ? ` <span class="muted">(asal ${esc(RN(p.orig))})</span>` : ''}</span></div>`).join('')}</div>
        <div class="sub-h">Kronologi</div>
        <div class="log">${game.logs.map((l) => `<div>${l}</div>`).join('') || '<div>Tiada catatan.</div>'}</div>
        <div class="btn-row"><button class="btn btn-ghost" onclick="window.exitGame()">Ke menu</button><button class="btn btn-emas" onclick="window.playAgain()">Main lagi</button></div>`;
    }
  }

  function radarHTML() {
    if (game.mode !== 'pass_play' || !game.rules.radar || !game.radar) return '';
    const top = Object.entries(game.radar.s).sort((a, b) => b[1] - a[1]).slice(0, 3);
    if (!top.length) return '';
    const max = top[0][1];
    return `<div class="sub-h">📡 Radar Syak (tanpa nama)</div><div class="radar">${top.map(([id, c]) => { const p = gp(+id); return p ? `<div class="rbar"><i style="width:${c / max * 100}%"></i><span>${p.ava} <b>${esc(p.name)}</b></span><span>${c} syak</span></div>` : ''; }).join('')}</div>
      <p class="hint">Kiraan pilihan Anti-Kantoi malam tadi. Harimau tak menyumbang, jadi kampung yang menyumbang.</p>`;
  }

  /* ==================== KAD QR ====================
     Kad dikodkan terus dalam pautan (#j1...), jadi telefon pemain tak perlu server atau akaun.
     Penyulitan ringan (XOR + base64url) cuma untuk elak watak terbaca dari pautan, bukan keselamatan sebenar. */
  // Di web, QR guna alamat halaman ini sendiri. Dalam APK (Capacitor) alamatnya "localhost" yang tak boleh
  // dibuka dari telefon lain, jadi QR guna alamat rasmi dalam js/config.js.
  const cardBase = () => {
    const cfg = (window.JADIAN_CONFIG && window.JADIAN_CONFIG.publicUrl) || '';
    const isApp = /^(capacitor|ionic|file):$/.test(location.protocol) || (location.hostname === 'localhost' && !location.port);
    return isApp && cfg ? cfg.replace(/#.*$/, '') : location.href.split('#')[0];
  };
  function b64u(bytes) { let s = ''; for (const b of bytes) s += String.fromCharCode(b); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function unb64u(str) { str = str.replace(/-/g, '+').replace(/_/g, '/'); while (str.length % 4) str += '='; const s = atob(str), out = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i); return out; }
  function encodeCard(obj) {
    const data = new TextEncoder().encode(JSON.stringify(obj)), k = 30 + Math.floor(Math.random() * 200), out = new Uint8Array(data.length + 1);
    out[0] = k; for (let i = 0; i < data.length; i++) out[i + 1] = data[i] ^ ((k + i * 7) & 255);
    return 'j1' + b64u(out);
  }
  function decodeCard(tok) {
    try {
      if (!tok || !tok.startsWith('j1')) return null;
      const b = unb64u(tok.slice(2)), k = b[0], d = new Uint8Array(b.length - 1);
      for (let i = 0; i < d.length; i++) d[i] = b[i + 1] ^ ((k + i * 7) & 255);
      const o = JSON.parse(new TextDecoder().decode(d));
      return o && o.v === 1 && ROLES[o.r] ? o : null;
    } catch (e) { return null; }
  }
  // Maklumat tambahan pada kad: sasaran Si Pendendam dan kawan sekawanan Harimau.
  function cardExtras(p) {
    const ex = {};
    if (p.role === 'pendendam' && p.target) ex.t = gp(p.target).name;
    if (isPack(p)) ex.m = alive().filter((x) => isPack(x) && x.id !== p.id).map((x) => x.name);
    return ex;
  }
  function cardURL(p, withNotices) {
    const payload = { v: 1, c: game.code, n: p.name, a: p.ava, r: dispRole(p), ...cardExtras(p) };
    if (withNotices && p.notices && p.notices.length) payload.x = p.notices;
    if (game.rules.neutral) payload.nt = 1;
    return cardBase() + '#' + encodeCard(payload);
  }
  // Pengait ujian: cuma wujud bila app dibuka di localhost semasa pembangunan.
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) window.__jadian = { cardURL: (id) => cardURL(gp(id), true), game: () => game };
  function qrHTML(url, shown) {
    if (typeof window.qrcode !== 'function') return `<div class="note warn">QR tak dapat dijana (tiada internet masa app dibuka). Guna "Lihat di sini".</div>`;
    try {
      const q = window.qrcode(0, 'L'); q.addData(url); q.make();
      return `<div class="qr ${shown ? '' : 'blur'}">${q.createSvgTag({ cellSize: 4, margin: 2, scalable: true })}</div>`;
    } catch (e) { return `<div class="note warn">QR terlalu panjang. Guna "Lihat di sini".</div>`; }
  }
  function extrasHTML(ex) {
    return [ex.t ? `<div class="note solo" style="margin-top:8px">🎯 Sasaran kau: <b>${esc(ex.t)}</b></div>` : '',
      ex.m ? `<div class="note wolf" style="margin-top:8px">🐯 Kawanan: ${ex.m.length ? ex.m.map(esc).join(', ') : 'Tiada. Kau Harimau tunggal.'}</div>` : ''].join('');
  }

  /* ---------- Agih Kad (mod Moderator) ---------- */
  function renderDeal(box) {
    const v = game.dealView, done = game.players.filter((p) => game.dealt[p.id]).length, total = game.players.length;
    setProgress(done, total, `${done} daripada ${total} pemain dah tengok kad`);
    if (v) {
      const p = gp(v.pId);
      if (v.mode === 'qr') {
        box.innerHTML = `<div class="script"><span class="eyebrow emas">Imbas QR · Kod ${game.code}</span><p class="say">${p.ava} ${esc(p.name)}, imbas QR ni guna kamera telefon kau.</p>
            <p class="hint">Pautan akan buka kad kau sahaja. Pastikan orang lain tak imbas sekali.</p></div>
          ${qrHTML(cardURL(p, true), v.shown)}
          ${v.shown ? '' : `<button class="btn btn-ghost btn-block" onclick="window.dealShowQR()">👁️ Tunjuk QR</button>`}
          <div class="btn-row"><button class="btn btn-ghost" onclick="window.dealBack()">Kembali</button><button class="btn btn-pandan" onclick="window.dealDone(${p.id})">Dah imbas ✓</button></div>`;
        return;
      }
      if (v.mode === 'lock') {
        box.innerHTML = `<div class="lock"><span class="ava lg">${p.ava}</span><h3>Serahkan telefon kepada</h3><div class="who">${esc(p.name)}</div>
            <p class="hint">Moderator, pandang ke tempat lain.</p>${holdBtnHTML()}
            <button class="btn btn-ghost btn-sm" onclick="window.dealBack()">Kembali</button></div>`;
        return;
      }
      box.innerHTML = `${kadHTML(p, extrasHTML(cardExtras(p)) + (p.notices && p.notices.length ? `<div class="note solo" style="margin-top:8px">${noticeHTML(p)}</div>` : ''), dispRole(p))}
        <button class="btn btn-emas btn-block" onclick="window.dealDone(${p.id})">Dah tengok, kunci skrin</button>`;
      return;
    }
    box.innerHTML = `<div class="script"><span class="eyebrow emas">Kod permainan ${game.code}</span><p class="say">Setiap pemain pilih cara tengok kad.</p>
        <p class="hint">📷 <b>QR</b>: imbas guna telefon sendiri, dan kad kekal dalam telefon dia. 👁️ <b>Lihat di sini</b>: tengok terus di telefon moderator (tak perlu internet).</p></div>
      <div class="list">${game.players.map((p) => `<div class="trow ${game.dealt[p.id] ? '' : ''}">
          <span class="ava" style="width:36px;height:36px;font-size:18px">${p.ava}</span>
          <span class="nm">${esc(p.name)} ${game.dealt[p.id] ? '<span class="tag good">✓</span>' : ''}</span>
          <span class="btn-row" style="flex-wrap:nowrap"><button class="btn btn-ghost btn-sm" onclick="window.dealOpen(${p.id},'qr')">📷 QR</button><button class="btn btn-ghost btn-sm" onclick="window.dealOpen(${p.id},'lock')">👁️ Lihat</button></span></div>`).join('')}</div>
      <details class="help"><summary>QR tak boleh dibuka di telefon kawan?</summary>
        <p>QR menggunakan alamat halaman semasa (<code>location.href</code>). Pastikan fail ini dibuka melalui pautan web umum (contohnya GitHub Pages / Vercel / pelayan tempatan Wi-Fi) supaya telefon pemain boleh mengaksesnya. Kalau dibuka terus sebagai fail tempatan (<code>file://</code>), guna "Lihat".</p></details>
      <button class="btn btn-emas btn-block" onclick="window.dealFinish()">Mula Malam 1</button>`;
  }
  window.dealOpen = function (id, mode) { beep('click'); game.dealView = { pId: id, mode, shown: false }; renderStage(); };
  window.dealShowQR = function () { beep('click'); game.dealView.shown = true; renderStage(); };
  window.dealBack = function () { window.holdEnd(); game.dealView = null; renderStage(); };
  window.dealDone = function (id) { beep('click'); game.dealt[id] = true; gp(id).notices = []; game.dealView = null; renderStage(); };
  window.dealFinish = function () {
    const left = game.players.filter((p) => !game.dealt[p.id]);
    const go = () => { game.dealView = null; window.startNightPhase(); };
    if (!left.length) { go(); return; }
    ask({ title: 'Ada yang belum tengok kad', body: `${left.map((p) => p.name).join(', ')} belum ditanda. Mula Malam 1 juga?`, ok: 'Mula juga', onOk: go });
  };
  const holdBtnHTML = () => `<button class="btn btn-emas btn-block hold" id="holdBtn" style="--hold-ms:650ms"
      onpointerdown="window.holdStart(event)" onpointerup="window.holdEnd()" onpointercancel="window.holdEnd()"
      onkeydown="if((event.key===' '||event.key==='Enter')&&!event.repeat){event.preventDefault();window.holdStart();}" onkeyup="window.holdEnd()"
      oncontextmenu="return false"><span class="hold-fill"></span><span class="hold-label">🔒 Tekan &amp; tahan untuk buka</span></button>`;

  /* ---------- Halaman kad pemain (dibuka dari QR) ---------- */
  let cardView = null;
  function showCardView(data) {
    cardView = { data, open: false };
    setup.rules.neutral = !!data.nt;
    ['home', 'players', 'roles', 'settings', 'game'].forEach((k) => { $('pg_' + k).hidden = true; });
    $('tabbar').hidden = true; $('topbar').hidden = true; $('pg_card').hidden = false;
    renderCardView();
  }
  function renderCardView() {
    const d = cardView.data, notices = (d.x || []).map((nt) => noticeLine(nt, d.r)).join('<br>');
    const body = cardView.open
      ? `${notices ? `<div class="note solo center reveal-in">${notices}</div>` : ''}
         ${kadHTML({ name: d.n }, extrasHTML(d), d.r)}
         <button class="btn btn-ghost btn-block" onclick="window.cardHide()">🙈 Sembunyi kad</button>`
      : `<div class="kad-back"><div class="songket"></div><div class="kad-back-body"><span class="big">${ICONS.brand}</span><span class="rn">JADIAN</span><span class="muted small">Kad rahsia</span></div><div class="songket"></div></div>
         ${notices ? '<div class="note solo center">🔔 Watak kau dah bertukar. Buka kad untuk tengok.</div>' : ''}
         ${holdBtnHTML()}`;
    $('cardStage').innerHTML = `<div class="cv-head"><span class="ava lg">${d.a || '🙂'}</span><div class="who">${esc(d.n)}</div><span class="tag warn">Kod permainan ${esc(d.c)}</span></div>${body}
      <p class="hint" style="text-align:center">Jangan tunjuk sesiapa. Kau boleh buka semula kad ni bila-bila masa sepanjang permainan.</p>`;
  }
  window.cardHide = function () { cardView.open = false; renderCardView(); };
  window.showNoticeQR = function () { beep('click'); tempQR = true; renderStage(); };

  /* ---------- Malam: mod moderator & kad fizikal ---------- */
  function renderModNight(box) {
    if (game.stepIdx >= game.steps.length) { finalizePhysicalTags(); resolveNight(); return; }
    const st = game.steps[game.stepIdx], a = game.actions;
    if (st.t === 'lovers' && !game.lovers) { game.stepIdx++; renderModNight(box); return; }
    const label = st.t === 'notice' ? 'Bisikan rahsia' : st.t === 'lovers' ? '💞 Pasangan' : st.t === 'pendendam' ? RL('pendendam') : RL(st.t === 'harimau' ? 'harimau' : st.t);
    setProgress(game.stepIdx, game.steps.length, `Langkah ${game.stepIdx + 1} daripada ${game.steps.length} · ${label}`);
    const evChip = nightEv() && ['purnama', 'kenduri', 'blackout'].includes(nightEv()) ? `<div class="chips"><span class="tag warn">${EVENTS[nightEv()].i} ${EVENTS[nightEv()].n} malam ni</span></div>` : '';

    // Mod Kad Fizikal (Malam 1): tag siapa pemegang kad sebelum jalankan tindakan malam watak tersebut.
    const ut = untaggedRoleForStep(st);
    if (ut) {
      const pool = alive().filter((p) => !p.role);
      const sel = (p) => (ut.need > 1 ? tempTargets.includes(p.id) : tempTargetId === p.id);
      const ready = ut.need > 1 ? tempTargets.length === Math.min(ut.need, pool.length) : !!tempTargetId;
      const sayTxt = SAY[ut.r] || `${RN(ut.r)}, buka mata sekejap supaya Moderator dapat tag kad kau.`;
      box.innerHTML = `${evChip}<div class="script"><span class="eyebrow emas">🏷️ Tag Kad Fizikal · ${RL(ut.r)}</span><p class="say">"${sayTxt}"</p>
        <p class="hint">Ketik <b>${ut.need}</b> pemain yang membuka mata sebagai <b>${esc(RN(ut.r))}</b>.</p></div>
        <div class="tgrid">${pool.map((p) => tcard(p, { sel: sel(p), tone: ROLES[ut.r].f === 'wolf' ? 'bad' : 'good', on: ut.need > 1 ? 'window.toggleTagMulti' : 'window.selectTarget' })).join('')}</div>
        <button class="btn btn-pandan btn-block" ${!ready ? 'disabled' : ''} onclick="window.confirmTagStep('${ut.r}', ${ut.need})">Simpan Tag ${esc(RN(ut.r))} ›</button>`;
      return;
    }
    if (st.tagOnly) {
      if (st.t === 'pendendam') {
        const p = holder('pendendam'), t = p && p.target ? gp(p.target) : null;
        if (p && t) {
          box.innerHTML = `<div class="script"><span class="eyebrow emas">${RL('pendendam')}</span><p class="say">Tunjuk sasaran ini secara senyap kepada <b>${esc(p.name)}</b>:</p></div>
            <div class="note solo center big">🎯 Sasaran dendam: <b>${t.ava} ${esc(t.name)}</b></div>
            <button class="btn btn-emas btn-block" onclick="window.nextStep()">Seterusnya ›</button>`;
          return;
        }
      }
      game.stepIdx++; renderModNight(box); return;
    }

    if (st.t === 'notice') {
      const p = gp(st.pId);
      box.innerHTML = `<div class="script"><span class="eyebrow emas">Bisikan rahsia</span><p class="say">Kejutkan <b>${esc(p.name)}</b> secara senyap. Tunjuk skrin ni, atau biar dia imbas QR kad baharunya.</p></div>
        ${kadHTML(p, extrasHTML(cardExtras(p)) + `<div class="note solo" style="margin-top:8px">${noticeHTML(p)}</div>`, dispRole(p))}
        ${tempQR ? qrHTML(cardURL(p, true), true) : `<button class="btn btn-ghost btn-block" onclick="window.showNoticeQR()">📷 Tunjuk QR kad baharu</button>`}
        <button class="btn btn-pandan btn-block" onclick="window.confirmNotice(${p.id})">Dah nampak, tutup mata</button>`;
      return;
    }
    if (st.t === 'lovers') {
      const [x, y] = game.lovers.map(gp);
      box.innerHTML = `<div class="script"><span class="eyebrow emas">💞 Pasangan bercinta</span><p class="say">"Moderator akan sentuh bahu 2 orang. Buka mata, kenal pasangan kau, kemudian tutup mata."</p></div>
        <div class="kad" style="--c:${FC.love}"><div class="songket"></div><div class="kad-body"><span class="big">💞</span><span class="rn">${esc(x.name)} &amp; ${esc(y.name)}</span><p>Kalau seorang mati, seorang lagi mati merana.</p></div></div>
        <button class="btn btn-emas btn-block" onclick="window.nextStep()">Seterusnya ›</button>`;
      return;
    }
    if (st.dead) {
      box.innerHTML = `<div class="script"><span class="eyebrow emas">${RL(st.t)} · dah tiada</span><p class="say">"${SAY[st.t]}"</p></div>
        <div class="note warn big">🎭 Watak ni dah mati. Baca skrip seperti biasa dan tunggu beberapa saat, supaya pemain tak dapat teka siapa yang dah tiada.</div>
        <button class="btn btn-emas btn-block" onclick="window.nextStep()">Seterusnya ›</button>`;
      return;
    }
    if (st.t === 'mak_dukun') { renderDukunMod(box, evChip); return; }

    const role = st.t, multi = role === 'harimau' ? game.wolfCount : role === 'mak_andam' ? 2 : 1;
    const holders = alive().filter((p) => (role === 'harimau' ? isPack(p) : p.role === role));
    const holderTxt = holders.map((p) => esc(p.name) + (p.orig !== p.role ? ' [bertukar]' : '')).join(', ') || '-';
    const tapNote = (role === 'tok_nujum' || role === 'pak_belalang') && deckHas('pak_belalang')
      ? `<p class="hint">Ada Pak Belalang dalam permainan: kejutkan <b>${holderTxt}</b> dengan sentuh bahu, jangan panggil kuat-kuat.</p>` : '';
    // Toyol bertindak awal, jadi moderator tahu siapa kuasanya dicuri sebelum giliran watak itu.
    const blocked = a.block && (role === 'harimau' ? (holders.length === 1 && holders[0].id === a.block) : holders.some((p) => p.id === a.block)) && !['toyol', 'mak_andam', 'hantu_raya'].includes(role);
    const kenduri = role === 'harimau' && nightEv() === 'kenduri';
    if (blocked || kenduri) {
      box.innerHTML = `${evChip}<div class="script"><span class="eyebrow emas">${RL(role)}</span><p class="say">"${SAY[role]}"</p><p class="hint">Pemegang: ${holderTxt}</p></div>
        <div class="note ${kenduri ? 'warn' : 'wolf'} big">${kenduri ? '💒 Kenduri Kahwin: kawanan kekenyangan. Bangunkan mereka seperti biasa, tapi tiada serbuan malam ni.' : '🧌 Kuasa ini dicuri Toyol malam ni. Bangunkan seperti biasa dan biar mereka pilih, tapi geleng kepala: kuasa tak berfungsi.'}</div>
        <button class="btn btn-emas btn-block" onclick="window.skipBlockedStep()">Seterusnya ›</button>`;
      return;
    }
    const sel = (p) => (multi > 1 ? tempTargets.includes(p.id) : tempTargetId === p.id);
    const avail = alive().filter((p) => !blockReason(role, p)).length;
    const ready = multi > 1 ? tempTargets.length === Math.min(multi, avail) : !!tempTargetId;
    const htAll = role === 'harimau' ? holders.find((p) => p.role === 'harimau_tua' && !p.biteUsed) : null;
    const htBlocked = !!(htAll && a.block === htAll.id);
    const ht = htBlocked ? null : htAll;
    const res = INFO.includes(role) && tempTargetId ? infoResult(role, holders[0] && holders[0].id, tempTargetId) : null;
    const say = role === 'harimau' && multi > 1 ? `Harimau Jadian, buka mata. ${game.cubRevenge ? 'Anak kau dah mati! ' : ''}${nightEv() === 'purnama' ? 'Bulan purnama! ' : ''}Malam ni kau serbu ${multi} rumah!` : SAY[role];
    box.innerHTML = `${evChip}<div class="script"><span class="eyebrow emas">${role === 'pak_belalang' ? `${RL('pak_belalang')} (dia sangka Tok Nujum)` : RL(role)}</span><p class="say">"${say}"</p><p class="hint">Pemegang: ${holderTxt}</p>${tapNote}</div>
      <div class="tgrid">${alive().map((p) => {
        const why = blockReason(role, p);
        return tcard(p, { sel: sel(p), tone: TONE[role] || '', dis: !!why, sub: why || (p.role ? RN(p.role) : 'Belum di-tag'), on: multi > 1 ? 'window.toggleMulti' : 'window.selectTarget' });
      }).join('')}</div>
      ${htBlocked ? `<div class="note wolf">🧌 Kuasa <b>Harimau Tua (${esc(htAll.name)})</b> dicuri Toyol malam ni: kawanan masih boleh menyerbu, tapi kuasa gigitan Harimau Tua terbatal malam ni.</div>` : ''}
      ${ht ? `<button class="chip-btn" aria-pressed="${tempBite}" onclick="window.toggleBite()">🐅 Harimau Tua guna gigitan (sekali sahaja): mangsa jadi Harimau</button>` : ''}
      ${res ? `<div class="note ${res.cls} center big">${res.txt}${role === 'mak_cik_bawang' ? '' : '<br><span class="small">Beri isyarat ibu jari.</span>'}</div>` : ''}
      <button class="btn btn-emas btn-block" ${!ready ? 'disabled' : ''} onclick="window.confirmModStep()">Sahkan ›</button>`;
  }
  window.toggleTagMulti = function (id) {
    beep('click');
    const ut = untaggedRoleForStep(game.steps[game.stepIdx]);
    const limit = ut ? ut.need : 1;
    const i = tempTargets.indexOf(id);
    if (i >= 0) tempTargets.splice(i, 1); else if (tempTargets.length < limit) tempTargets.push(id);
    renderStage();
  };
  window.confirmTagStep = function (r, need) {
    snap(); beep('click');
    const ids = need > 1 ? tempTargets.slice() : [tempTargetId];
    ids.forEach((id) => { const p = gp(id); if (p) { setRole(p, r); p.orig = r; } });
    finalizePhysicalTags();
    if (r === 'pendendam') assignTargets();
    resetTemps();
    renderStage();
  };
  function dukunVictims() { return (game.actions.wolf || []).map(gp).filter((p) => p && p.alive); }
  function dukunPanel(dukun) {
    const victims = nightEv() === 'kenduri' ? [] : dukunVictims(), pot = dukun.potions || { penawar: false, racun: false };
    const saveBtns = victims.map((v) => {
      const bl = v.id === dukun.id && !game.rules.dukunSelf;
      return tcard(v, { sel: tempDukun.save === v.id, tone: 'good', dis: !pot.penawar || bl, sub: bl ? 'Tak boleh diri sendiri' : 'Mangsa Harimau', on: 'window.dukunSave' });
    }).join('');
    return `<div class="potion"><span class="ic">💧</span><div><b>Air Penawar ${pot.penawar ? '' : '· dah habis'}</b><small>${victims.length ? 'Ketik mangsa untuk diselamatkan. Ketik lagi untuk batal.' : 'Tiada mangsa Harimau malam ni.'}</small></div></div>
      ${victims.length ? `<div class="tgrid">${saveBtns}</div>` : ''}
      <div class="potion"><span class="ic">☠️</span><div><b>Racun ${pot.racun ? '' : '· dah habis'}</b><small>${pot.racun ? 'Pilihan. Ketik seorang untuk diracun, ketik lagi untuk batal.' : 'Botol racun dah digunakan.'}</small></div></div>
      ${pot.racun ? `<div class="tgrid">${alive().map((p) => { const why = blockReason('racun', p, dukun); return tcard(p, { sel: tempDukun.poison === p.id, tone: 'bad', dis: !!why, sub: why || '', on: 'window.dukunPoison' }); }).join('')}</div>` : ''}`;
  }
  function renderDukunMod(box, evChip) {
    const d = holder('mak_dukun'), blocked = game.actions.block === d.id;
    box.innerHTML = `${evChip}<div class="script"><span class="eyebrow emas">${RL('mak_dukun')}</span><p class="say">"${SAY.mak_dukun.replace('Mak Dukun', esc(RN('mak_dukun')))}"</p><p class="hint">Pemegang: ${esc(d.name)}</p></div>
      ${blocked ? `<div class="note wolf big">🧌 Kuasa ${esc(RN('mak_dukun'))} dicuri Toyol malam ni. Botol tak boleh digunakan.</div><button class="btn btn-emas btn-block" onclick="window.skipBlockedStep()">Seterusnya ›</button>`
        : `${dukunPanel(d)}<button class="btn btn-emas btn-block" onclick="window.confirmModStep()">Sahkan ›</button>`}`;
  }
  window.dukunSave = function (id) { beep('click'); tempDukun.save = tempDukun.save === id ? null : id; renderStage(); };
  window.dukunPoison = function (id) { beep('click'); tempDukun.poison = tempDukun.poison === id ? null : id; renderStage(); };
  window.selectTarget = function (id) { beep(game.phase === 'vote' ? 'vote' : 'click'); tempTargetId = id; renderStage(); };
  window.toggleBite = function () { beep('click'); tempBite = !tempBite; renderStage(); };
  window.toggleMulti = function (id) {
    beep('click');
    const limit = game.phase === 'night' && (game.mode === 'pass_play' ? ppKind(alive()[game.pp.idx]) : { multi: game.steps[game.stepIdx].t === 'mak_andam' ? 2 : game.wolfCount }).multi;
    const i = tempTargets.indexOf(id);
    if (i >= 0) tempTargets.splice(i, 1); else if (tempTargets.length < limit) tempTargets.push(id);
    renderStage();
  };
  window.confirmNotice = function (id) { snap(); beep('click'); gp(id).notices = []; game.stepIdx++; renderStage(); };
  window.nextStep = function () { snap(); beep('click'); game.stepIdx++; renderStage(); };
  window.skipBlockedStep = function () {
    snap(); beep('click');
    resetTemps(); game.stepIdx++; renderStage();
  };
  function applyDukun(d) {
    if (!d || !d.potions) return;
    const a = game.actions;
    a.save = tempDukun.save && d.potions.penawar ? tempDukun.save : null;
    a.poison = tempDukun.poison && d.potions.racun ? tempDukun.poison : null;
    a.dukunBy = a.save || a.poison ? d.id : null;
  }
  window.confirmModStep = function () {
    snap(); beep('click');
    const st = game.steps[game.stepIdx], a = game.actions, role = st.t;
    const holders = alive().filter((p) => (role === 'harimau' ? isPack(p) : p.role === role));
    if (role === 'harimau') {
      a.wolf = game.wolfCount > 1 ? tempTargets.slice() : [tempTargetId];
      a.wolfBy = holders[0] && holders[0].id;
      const ht = holders.find((p) => p.role === 'harimau_tua' && !p.biteUsed && a.block !== p.id);
      if (ht && tempBite) { a.convert = true; a.convertBy = ht.id; }
    }
    else if (role === 'mak_andam') setLovers(tempTargets);
    else if (role === 'mak_dukun') applyDukun(holders[0]);
    else rec(role, holders[0] && holders[0].id, tempTargetId);
    resetTemps(); game.stepIdx++; renderStage();
  };

  /* ---------- Malam: Pass & Play (Pusingan Malam + Pusingan Subuh) ---------- */
  function ppKind(cur) {
    const r = cur.role, n = game.night;
    if (isPack(cur)) return nightEv() === 'kenduri' ? { kind: 'dummy', kenduri: true } : { kind: 'harimau', multi: game.wolfCount };
    if (r === 'mak_andam' && n === 1) return { kind: 'mak_andam', multi: 2 };
    if (r === 'hantu_raya' && n === 1) return { kind: 'hantu_raya', multi: 1 };
    if (['toyol', 'mak_bidan', 'peronda', 'pontianak', 'pelesit', 'tok_nujum', 'pak_belalang', 'cikgu', 'mak_cik_bawang'].includes(r)) return { kind: r, multi: 1 };
    return { kind: 'dummy', multi: 1 };
  }
  const INSTR = {
    mak_andam: '💐 Pilih <b>2</b> pemain untuk dijodohkan. Boleh termasuk diri sendiri.',
    hantu_raya: '👥 Pilih seorang tuan. Bila dia mati, kau warisi wataknya.',
    toyol: '🧌 Pilih seorang. Kuasanya dicuri malam ni.',
    mak_bidan: '🌿 Pilih 1 pemain untuk dijaga malam ni.',
    peronda: '🔦 Pilih rumah yang nak dikawal. Kalau diserang, kau yang mati.',
    pontianak: '👻 Pilih mangsa kau malam ni.',
    pelesit: '🦟 Pilih seorang untuk diintai: Tok Nujum atau Mak Dukun?',
    tok_nujum: '🔮 Pilih 1 pemain untuk ditilik.',
    pak_belalang: '🔮 Pilih 1 pemain untuk ditilik.',
    cikgu: '📏 Pilih 1 pemain untuk didenda diam esok.',
    mak_cik_bawang: '🧅 Pilih rumah yang nak diintai. Keputusan keluar masa Pusingan Subuh.'
  };
  function renderPPNight(box) {
    const al = alive(), pp = game.pp;
    if (pp.idx >= al.length) {
      if (pp.round === 'malam' && game.needSubuh) { game.pp = { round: 'subuh', idx: 0, open: false }; renderStage(); return; }
      resolveNight(); return;
    }
    const cur = al[pp.idx], subuh = pp.round === 'subuh', a = game.actions;
    setProgress(pp.idx, al.length, `${subuh ? 'Pusingan Subuh' : 'Pusingan Malam'} · giliran ${pp.idx + 1} daripada ${al.length}`);

    if (!pp.open) {
      box.innerHTML = `<div class="lock"><span class="ava lg">${cur.ava}</span>
          ${subuh ? `<span class="tag warn">🌅 Pusingan Subuh</span>` : ''}
          <h3>Serahkan telefon kepada</h3><div class="who">${esc(cur.name)}</div>
          <p class="hint">Pastikan orang lain tak nampak skrin.</p>
          ${holdBtnHTML()}
        </div>`;
      return;
    }
    const noticeBox = cur.notices && cur.notices.length ? `<div class="note solo center reveal-in">${noticeHTML(cur)}</div>` : '';
    const extra = cur.role === 'pendendam' && cur.target ? `<div class="note solo" style="margin-top:8px">🎯 Sasaran kau: <b>${esc(gp(cur.target).name)}</b></div>` : '';

    if (subuh) {
      let inner, ok = true;
      const info = a.info[cur.id];
      if (cur.role === 'mak_dukun') inner = `<div class="note warn">🌅 Mangsa Harimau malam ni dah diketahui. Guna botol kalau mahu.</div>${dukunPanel(cur)}`;
      else if (info && (info.kind === 'mak_cik_bawang' || game.delayInfo)) {
        const res = infoResult(info.kind, cur.id, info.t);
        inner = `<div class="note warn">🌅 Keputusan malam tadi:</div><div class="note ${res.cls} center big">${res.txt}</div>`;
      } else {
        ok = !!tempTargetId;
        inner = `<div class="note warn">🌅 Tiada berita untuk anda. Supaya masa pegang telefon sama, jawab soalan ni: <b>siapa yang paling kau percaya?</b></div>
          <div class="tgrid">${al.map((p) => { const why = blockReason('dummy', p, cur); return tcard(p, { sel: tempTargetId === p.id, tone: 'good', dis: !!why, on: 'window.selectTarget' }); }).join('')}</div>`;
      }
      box.innerHTML = `${noticeBox}${kadHTML(cur, extra, dispRole(cur))}<div class="reveal-in" style="display:flex;flex-direction:column;gap:12px">${inner}</div>
        <button class="btn btn-emas btn-block" id="ppConfirm" data-ok="${ok ? 1 : 0}" data-label="Sahkan &amp; kunci skrin" onclick="window.completePPTurn()">Sahkan &amp; kunci skrin</button>`;
      updMin(); return;
    }

    const K = ppKind(cur), kind = K.kind, multi = K.multi || 1;
    let instr = '🕵️ <b>Misi Anti-Kantoi:</b> pilih 1 pemain yang kau syak, supaya masa pegang telefon nampak sama dengan orang lain.';
    let pack = '';
    if (isPack(cur)) {
      const mates = al.filter((p) => isPack(p) && p.id !== cur.id), sug = (a.wolf || []).map(gp).filter(Boolean);
      pack = `<div class="note wolf">🐯 <b>Kawanan:</b> ${mates.length ? mates.map((t) => `${t.ava} ${esc(t.name)}${t.role !== 'harimau' ? ` (${esc(RN(t.role))})` : ''}`).join(', ') : 'Tiada. Kau Harimau tunggal.'}
        ${sug.length && !K.kenduri ? `<br>🎯 <b>Cadangan kawan:</b> ${sug.map((s) => esc(s.name)).join(', ')}. Ketik kad lain kalau nak tukar.` : ''}
        ${mates.length && !K.kenduri ? `<br><span class="small">Pilihan Harimau terakhir yang pegang telefon jadi sasaran muktamad.</span>` : ''}</div>`;
      instr = K.kenduri ? '💒 <b>Kenduri Kahwin:</b> kawanan kenyang, tiada serbuan malam ni. Buat Misi Anti-Kantoi: pilih 1 pemain yang kau syak.'
        : multi > 1 ? `🐯 <b>Malam ni kau serbu ${multi} rumah!</b> Pilih ${multi} mangsa.` : '🐯 <b>Serbuan malam:</b> pilih 1 mangsa. Kawan kawanan dikunci.';
    } else if (kind !== 'dummy') instr = INSTR[kind];
    else if (cur.role === 'mak_dukun') instr = '⚗️ Botol digunakan masa <b>Pusingan Subuh</b>, selepas mangsa diketahui. Sekarang buat Misi Anti-Kantoi: pilih 1 pemain yang kau syak.';
    if (['tok_nujum', 'pak_belalang', 'pelesit'].includes(kind)) instr += game.delayInfo ? ' Keputusan keluar masa Pusingan Subuh.' : ' Keputusan keluar serta-merta dan pilihan dikunci.';
    const instant = ['tok_nujum', 'pak_belalang', 'pelesit'].includes(kind) && !game.delayInfo;
    const res = instant && tempTargetId ? infoResult(kind, cur.id, tempTargetId) : null;
    const sel = (p) => (multi > 1 ? tempTargets.includes(p.id) : tempTargetId === p.id);
    const avail = al.filter((p) => !blockReason(kind, p, cur)).length;
    const ok = multi > 1 ? tempTargets.length === Math.min(multi, avail) : !!tempTargetId;
    const htToggle = kind === 'harimau' && cur.role === 'harimau_tua' && !cur.biteUsed
      ? `<button class="chip-btn" aria-pressed="${tempBite}" onclick="window.toggleBite()">🐅 Guna gigitan (sekali sahaja): mangsa jadi Harimau, bukan mati</button>` : '';
    box.innerHTML = `${noticeBox}${kadHTML(cur, extra, dispRole(cur))}
      <div class="reveal-in" style="display:flex;flex-direction:column;gap:12px">
      ${pack}<div class="note warn">${instr}</div>
      <div class="tgrid">${al.map((p) => {
        let why = blockReason(kind, p, cur);
        if (instant && seerDone && p.id !== tempTargetId) why = why || ' ';
        return tcard(p, { sel: sel(p), tone: TONE[kind] || '', dis: !!why, sub: (why || '').trim(), on: multi > 1 ? 'window.toggleMulti' : 'window.selectPPTarget' });
      }).join('')}</div>
      ${htToggle}
      ${res ? `<div class="note ${res.cls} center big">${res.txt}</div>` : ''}
      </div>
      <button class="btn btn-emas btn-block" id="ppConfirm" data-ok="${ok ? 1 : 0}" data-label="Sahkan &amp; kunci skrin" onclick="window.completePPTurn()">Sahkan &amp; kunci skrin</button>`;
    updMin();
  }
  // Butang Sahkan dikunci sehingga masa minimum tamat, supaya tempoh pegang telefon tak dedahkan siapa ada kuasa.
  function updMin() {
    const b = $('ppConfirm'); if (!b) { clearInterval(minInt); return; }
    const left = Math.ceil((minUntil - Date.now()) / 1000), okSel = b.dataset.ok === '1';
    b.disabled = left > 0 || !okSel;
    b.innerHTML = left > 0 ? `Tunggu ${left} saat…` : b.dataset.label;
    if (left <= 0) clearInterval(minInt);
  }
  function armMin(sec) { minUntil = Date.now() + sec * 1000; clearInterval(minInt); if (sec > 0) minInt = setInterval(updMin, 250); }
  window.selectPPTarget = function (id) {
    const cur = alive()[game.pp.idx], k = ppKind(cur).kind;
    const instant = ['tok_nujum', 'pak_belalang', 'pelesit'].includes(k) && !game.delayInfo;
    if (instant && seerDone) return;
    beep('click'); tempTargetId = id; if (instant) seerDone = true;
    renderStage();
  };
  // Tekan & tahan: isian bergerak guna peralihan CSS (transform), dan pemasa tunggal membuka kunci. Tiada kerja setiap bingkai.
  window.holdStart = function (e) {
    if (e) e.preventDefault();
    const b = $('holdBtn'); if (!b) return;
    try { if (e && e.pointerId != null) b.setPointerCapture(e.pointerId); } catch (_) {}
    if (soundOn) SND.unlock();
    b.classList.add('holding');
    clearTimeout(holdT); holdT = setTimeout(unlockTurn, 650);
  };
  window.holdEnd = function () { clearTimeout(holdT); holdT = null; const b = $('holdBtn'); if (b) b.classList.remove('holding'); };
  window.startHoldUnlock = window.holdStart;
  function unlockTurn() {
    holdT = null;
    const buzz = () => { try { if (navigator.vibrate) navigator.vibrate(18); } catch (_) {} };
    // Kad pemain yang dibuka dari QR.
    if (cardView && !cardView.open) { buzz(); cardView.open = true; flipNext = true; renderCardView(); beep('flip'); return; }
    // "Lihat di sini" masa Agih Kad dalam mod Moderator.
    if (game && game.phase === 'deal' && game.dealView && game.dealView.mode === 'lock') { buzz(); game.dealView.mode = 'open'; flipNext = true; renderStage(); beep('flip'); return; }
    if (!game || game.phase !== 'night' || game.mode !== 'pass_play' || game.pp.open) return;
    buzz();
    const cur = alive()[game.pp.idx];
    game.pp.open = true; resetTemps();
    if (game.pp.round === 'malam' && isPack(cur) && nightEv() !== 'kenduri') {
      const w = (game.actions.wolf || []).filter((id) => gp(id) && gp(id).alive);
      if (game.wolfCount > 1) tempTargets = w.slice(0, game.wolfCount); else tempTargetId = w[0] || null;
    }
    armMin(game.pp.round === 'subuh' ? Math.min(4, game.holdSec) : game.holdSec);
    flipNext = true;
    renderStage(); beep('flip');
  }
  // Tiada snap() dalam Pass & Play waktu malam: Undo dikunci supaya skrin pemain lain tak boleh dibuka semula.
  window.completePPTurn = function () {
    beep('click');
    const cur = alive()[game.pp.idx], a = game.actions;
    cur.notices = [];
    if (game.pp.round === 'subuh') {
      if (cur.role === 'mak_dukun') applyDukun(cur);
      else if (tempTargetId && game.rules.radar) game.radar.t[tempTargetId] = (game.radar.t[tempTargetId] || 0) + 1;
    } else {
      const K = ppKind(cur);
      if (K.kind === 'harimau') {
        a.wolf = K.multi > 1 ? tempTargets.slice() : [tempTargetId]; a.wolfBy = cur.id;
        if (cur.role === 'harimau_tua') { if (tempBite) { a.convert = true; a.convertBy = cur.id; } else if (a.convertBy === cur.id) { a.convert = false; a.convertBy = null; } }
      } else if (K.kind === 'mak_andam') setLovers(tempTargets);
      else if (K.kind === 'dummy') { if (tempTargetId && game.rules.radar && !isPack(cur)) game.radar.s[tempTargetId] = (game.radar.s[tempTargetId] || 0) + 1; }
      else rec(K.kind, cur.id, tempTargetId);
    }
    resetTemps(); clearInterval(minInt); game.pp.open = false; game.pp.idx++;
    renderStage();
  };

  /* ==================== SELESAIKAN MALAM ==================== */
  function kill(p, cause) {
    if (!p || !p.alive) return false;
    p.alive = false; p.cause = cause; game._dead.push(p.id);
    if (p.role === 'pemburu') game.hunters.push(p.id);
    if (p.role === 'anak_harimau') { game.cubRevenge = true; game.logs.push(`🐾 Anak Harimau (${esc(p.name)}) mati. Kawanan akan serbu 2 rumah malam berikutnya.`); }
    inheritHantuRaya(p);
    game.players.forEach((x) => {
      if (x.alive && x.role === 'pendendam' && x.target === p.id && cause !== 'vote') {
        setRole(x, 'si_luncai'); addNotice(x, { kind: 'luncai' });
        game.logs.push(`🎯 ${esc(p.name)}, sasaran Si Pendendam (${esc(x.name)}), mati bukan kerana undian. ${esc(x.name)} kini Si Luncai.`);
      }
    });
    if (game.lovers && game.lovers.includes(p.id)) {
      const o = gp(game.lovers.find((id) => id !== p.id));
      if (o && o.alive) { game.logs.push(`💔 ${esc(o.name)} mati merana kerana kehilangan pasangannya, ${esc(p.name)}.`); kill(o, 'merana'); }
    }
    return true;
  }
  function inheritHantuRaya(dead) {
    game.players.forEach((p) => {
      if (p.alive && p.role === 'hantu_raya' && p.idol === dead.id) {
        setRole(p, dead.role);
        if (dead.potions) p.potions = { ...dead.potions };
        p.biteUsed = !!dead.biteUsed;
        if (dead.role === 'pendendam') { p.target = dead.target; if (!p.target || p.target === p.id || !gp(p.target).alive) pickTarget(p); }
        addNotice(p, { kind: 'hantu', from: dead.name });
        game.logs.push(`👥 ${esc(dead.name)} mati, jadi Hantu Raya (${esc(p.name)}) mewarisi watak ${esc(RN(dead.role))}.`);
      }
    });
  }
  function convertTraitors() {
    if (game.players.some((p) => p.alive && isPack(p))) return;
    game.players.forEach((p) => {
      if (p.alive && p.role === 'musuh') {
        setRole(p, 'harimau'); addNotice(p, { kind: 'musuh' });
        game.logs.push(`🛏️ Harimau terakhir tumpas. Musuh Dalam Selimut (${esc(p.name)}) kini Harimau Jadian.`);
      }
    });
  }
  function turnTiger(t, kind, n) {
    setRole(t, 'harimau'); addNotice(t, { kind });
    game.logs.push(kind === 'gigit' ? `Malam ${n}: ${esc(t.name)} digigit Harimau Tua dan bertukar jadi Harimau Jadian.` : `Malam ${n}: ${esc(t.name)} (Kena Gigit) diserbu dan bertukar jadi Harimau Jadian.`);
  }

  function resolveNight() {
    if (game.mode === 'pass_play') history = [];
    const a = game.actions, n = game.night, bl = a.block;
    game._dead = [];
    const packAlive = alive().filter(isPack);
    const wolfBlocked = bl && packAlive.length === 1 && packAlive[0].id === bl;
    const docOn = a.doc && a.docBy !== bl, guardOn = a.guard && a.guardBy !== bl;
    const dukunOn = a.dukunBy && a.dukunBy !== bl;
    // "Semalam" dikira hanya bila kuasa betul-betul berjalan (tak dicuri Toyol), sama dalam kedua-dua mod.
    game.lastDoc = docOn ? a.doc : null;
    game.lastMute = a.mute && a.muteBy !== bl ? a.mute : null;
    if (bl) game.logs.push(`Malam ${n}: Toyol mencuri kuasa ${esc(gp(bl).name)}.`);

    const attacks = [];
    if (nightEv() === 'kenduri') game.logs.push(`Malam ${n}: Kenduri Kahwin. Harimau kekenyangan dan tak menyerbu.`);
    else if (!wolfBlocked) (a.wolf || []).forEach((id) => attacks.push({ id, by: 'harimau' }));
    if (a.sk && a.skBy !== bl) attacks.push({ id: a.sk, by: 'pontianak' });
    if (dukunOn) {
      const d = gp(a.dukunBy);
      if (a.save) { d.potions.penawar = false; game.logs.push(`Malam ${n}: ${esc(RN('mak_dukun'))} menuang Air Penawar untuk ${esc(gp(a.save).name)}.`); }
      if (a.poison) { d.potions.racun = false; attacks.push({ id: a.poison, by: 'racun' }); }
    }
    const save = dukunOn ? a.save : null;
    const convertOn = a.convert && a.convertBy !== bl;
    game.cubRevenge = false;
    let guard = guardOn ? a.guard : null;
    const peronda = a.guardBy ? gp(a.guardBy) : alive().find((p) => p.role === 'peronda');
    const who = { harimau: 'Harimau Jadian', pontianak: 'Pontianak', racun: RN('mak_dukun') };
    let biteDone = false;

    attacks.forEach((at) => {
      const t = gp(at.id); if (!t || !t.alive) return;
      if (at.by === 'harimau' && save === t.id) { game.logs.push(`Malam ${n}: ${esc(t.name)} diserbu Harimau, tapi Air Penawar menyelamatkannya.`); return; }
      if (docOn && a.doc === t.id) { game.logs.push(`Malam ${n}: ${esc(who[at.by])} menyerang ${esc(t.name)}, tapi Mak Bidan menjaganya.`); return; }
      if (guard === t.id && peronda && peronda.alive && peronda.id !== t.id) {
        guard = null;
        if (docOn && a.doc === peronda.id) { game.logs.push(`Malam ${n}: Peronda RT (${esc(peronda.name)}) menghalang ${esc(who[at.by])} di rumah ${esc(t.name)}, dan Mak Bidan menjaga Peronda.`); return; }
        game.logs.push(`Malam ${n}: Peronda RT (${esc(peronda.name)}) mati mempertahankan rumah ${esc(t.name)} daripada ${esc(who[at.by])}.`);
        kill(peronda, at.by); return;
      }
      if (at.by === 'harimau' && t.role === 'pontianak' && game.rules.skImmune) { game.logs.push(`Malam ${n}: Harimau menyerbu ${esc(t.name)} (Pontianak), tapi dia kebal.`); return; }
      if (t.role === 'abang_sado' && !t.sadoUsed) { t.sadoUsed = true; game.logs.push(`Malam ${n}: ${esc(who[at.by])} menyerang ${esc(t.name)}, tapi Abang Sado tahan serangan pertama.`); return; }
      if (at.by === 'harimau' && convertOn && !biteDone && t.role !== 'pontianak') { biteDone = true; gp(a.convertBy).biteUsed = true; turnTiger(t, 'gigit', n); return; }
      if (at.by === 'harimau' && t.role === 'kena_gigit') { turnTiger(t, 'kenagigit', n); return; }
      game.logs.push(`Malam ${n}: ${esc(t.name)} ${at.by === 'harimau' ? 'diserbu Harimau Jadian' : at.by === 'pontianak' ? 'dibunuh Pontianak' : `diracun ${esc(RN('mak_dukun'))}`}.`);
      kill(t, at.by);
    });
    const mt = a.mute && a.muteBy !== bl ? gp(a.mute) : null;
    if (mt && mt.alive) { mt.muted = true; game.logs.push(`Malam ${n}: ${esc(mt.name)} didenda Cikgu Disiplin.`); }
    convertTraitors();
    game.summary = { dead: game._dead.slice(), muted: mt && mt.alive ? mt.id : null };
    if (game.hunters.length) { game.hunterNext = 'morning'; game.phase = 'hunter'; renderStage(); }
    else goMorning();
  }

  window.confirmHunterShot = function (skip) {
    snap(); beep(skip ? 'click' : 'accuse');
    const h = gp(game.hunters.shift()), v = skip ? null : gp(tempTargetId);
    tempTargetId = null;
    if (v && v.alive) { game.logs.push(`🏹 Pemburu (${esc(h.name)}) menembak mati ${esc(v.name)}.`); kill(v, 'pemburu'); }
    else game.logs.push(`🏹 Pemburu (${esc(h.name)}) memilih untuk tak menembak.`);
    if (game.hunterNext === 'morning' && game.summary) game.summary.dead = game._dead.slice();
    if (game.hunterNext === 'vote' && game.verdict) game.verdict.extra = game._dead.filter((id) => id !== game.verdict.pId);
    convertTraitors();
    if (game.hunters.length) renderStage();
    else if (game.hunterNext === 'morning') goMorning();
    else afterVoteCheck();
  };
  function goMorning() {
    const w = checkWin(); if (w) { endWith(w); return; }
    game.event = null;
    if (game.rules.events && Math.random() < .4) { const ks = Object.keys(EVENTS); game.event = { id: ks[Math.floor(Math.random() * ks.length)] }; game.logs.push(`Pagi ${game.night}: Peristiwa kampung, ${EVENTS[game.event.id].n}.`); }
    game.phase = 'morning'; renderStage();
  }
  function endWith(w) { clearInterval(timerInt); game.winner = w; game.phase = 'over'; renderStage(); }

  /* ==================== MASA ==================== */
  const fmt = (s) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  function ringHTML(small) {
    return `<div class="ring ${small ? 'sm' : ''}" id="ring"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="52"/><circle class="fg" id="ringFg" cx="60" cy="60" r="52" pathLength="100" stroke-dasharray="100" stroke-dashoffset="0"/></svg><div class="ring-txt" id="timerTxt">${fmt(remSec)}</div></div>`;
  }
  function updateTimerUI() {
    const t = $('timerTxt'), fg = $('ringFg'), ring = $('ring');
    if (t) t.textContent = fmt(remSec);
    if (fg) fg.setAttribute('stroke-dashoffset', String(100 - (timerTotal ? remSec / timerTotal * 100 : 0)));
    if (ring) ring.classList.toggle('done', remSec === 0);
  }
  function startTimer() {
    clearInterval(timerInt);
    timerInt = setInterval(() => {
      if (remSec <= 0) { clearInterval(timerInt); return; }
      remSec--; updateTimerUI();
      // 10 saat terakhir: detik kayu perlahan, 5 saat terakhir: kentung mendesak, 0: kentung bertalu + gong.
      if (remSec === 0) { beep('alarm'); clearInterval(timerInt); } else if (remSec <= 5) beep('tickUrgent'); else if (remSec <= 10) beep('tick');
    }, 1000);
  }
  window.startDayDiscussion = function () {
    snap(); beep('click'); game.phase = 'discuss';
    let s = game.discTime === 'auto' ? alive().length * 30 : parseInt(game.discTime, 10);
    if (game.event && game.event.id === 'pasar') s += 60;
    if (game.event && game.event.id === 'hujan') s = Math.max(30, Math.round(s / 2));
    remSec = timerTotal = s;
    renderStage(); startTimer();
  };
  window.adjustTimerSeconds = function (d) { remSec = Math.max(0, remSec + d); if (remSec > timerTotal) timerTotal = remSec; updateTimerUI(); if (remSec > 0 && d > 0) startTimer(); };
  window.startDayVoting = function () {
    snap(); beep(game.voteMode === 'mahkamah' ? 'court' : 'vote'); clearInterval(timerInt); tempTargetId = null;
    if (game.voteMode === 'mahkamah') { game.court = { accused: [], idx: 0, counts: {}, ketuaVote: null, ghosts: {} }; game.phase = 'accuse'; renderStage(); return; }
    game.phase = 'vote'; remSec = timerTotal = game.voteTime; renderStage(); startTimer();
  };
  window.skipVoteFlood = function () {
    snap(); beep('click'); clearInterval(timerInt);
    game.logs.push(`Siang ${game.night}: Banjir Kilat, tiada undian.`);
    game.verdict = { kind: 'seri', flood: true }; game.phase = 'verdict'; renderStage();
  };

  /* ==================== KETUA KAMPUNG ==================== */
  const revealedKetua = () => alive().find((p) => p.role === 'ketua' && p.revealed);
  function ketuaBtn() {
    if (!deckHas('ketua') || revealedKetua() || !game.players.some((p) => p.role === 'ketua' && p.alive)) return '';
    return `<button class="btn btn-ghost btn-sm" style="flex:0 0 auto" onclick="window.openKetua()">🏛️ Ketua Kampung dedah diri</button>`;
  }
  window.openKetua = function () {
    openSheet(`<div class="pagehead"><span class="eyebrow emas">Pengesahan app</span><h1>Siapa mengaku Ketua Kampung?</h1><p>Ketik pemain yang mengaku. App akan sahkan sama ada dia betul-betul Ketua Kampung.</p></div>
      <div class="tgrid">${alive().map((p) => tcard(p, { on: 'window.claimKetua' })).join('')}</div>
      <button class="btn btn-ghost btn-block" onclick="window.closeSheet()">Batal</button>`);
  };
  window.claimKetua = function (id) {
    const p = gp(id); window.closeSheet();
    if (p.role === 'ketua') { snap(); p.revealed = true; game.logs.push(`Siang ${game.night}: ${esc(p.name)} disahkan sebagai Ketua Kampung. Undinya dikira 2.`); beep('success'); toast(`Sah! ${p.name} ialah Ketua Kampung. Undinya dikira 2.`); }
    else { beep('error'); toast(`${p.name} BUKAN Ketua Kampung!`); }
    renderStage();
  };

  /* ==================== MAHKAMAH KAMPUNG ==================== */
  function renderCourt(box, E, T) {
    const c = game.court, P = game.phase, k = revealedKetua();
    E.textContent = `Mahkamah · Siang ${game.night}`;
    if (P === 'accuse') {
      T.textContent = 'Tuduhan';
      box.innerHTML = `<div class="script"><span class="eyebrow emas">Langkah 1 · Tuduhan</span><p class="say">Siapa yang dituduh hari ini? Pilih sehingga 3 orang.</p><p class="hint">Seorang tuduh, seorang lagi sokong, baru masuk senarai.</p></div>
        <div class="tgrid">${alive().map((p) => tcard(p, { sel: c.accused.includes(p.id), tone: 'bad', on: 'window.toggleAccuse', sub: p.muted ? '📏 Didenda' : p.revealed ? RL(p.role) : '' })).join('')}</div>
        <div class="btn-row" style="justify-content:center;">${ketuaBtn()}</div>
        <div class="btn-row"><button class="btn btn-ghost" onclick="window.executeVote(null)">Tiada tuduhan</button><button class="btn btn-merah" ${!c.accused.length ? 'disabled' : ''} onclick="window.startDefense()">Mula bela diri (${c.accused.length})</button></div>`;
      return;
    }
    if (P === 'defense') {
      T.textContent = 'Bela Diri';
      const p = gp(c.accused[c.idx]);
      box.innerHTML = `<div class="script"><span class="eyebrow emas">Langkah 2 · Bela diri ${c.idx + 1}/${c.accused.length}</span><p class="say">${esc(p.name)}, kau ada masa untuk pertahankan diri.</p>${p.muted ? '<p class="hint">📏 Dia didenda Cikgu Disiplin, jadi dia cuma boleh guna isyarat.</p>' : ''}</div>
        <div style="display:flex;justify-content:center"><span class="ava lg">${p.ava}</span></div>
        ${ringHTML(true)}
        <div class="btn-row"><button class="btn btn-ghost" onclick="window.startTally()">Terus kira undi</button><button class="btn btn-emas" onclick="window.nextDefense()">${c.idx + 1 < c.accused.length ? 'Seterusnya ›' : 'Kira undi ›'}</button></div>`;
      updateTimerUI(); return;
    }
    // tally
    T.textContent = 'Kira Undi';
    const al = alive(), totals = tallyTotals(), used = Object.values(c.counts).reduce((x, y) => x + y, 0);
    const max = Math.max(0, ...c.accused.map((id) => totals[id]));
    const leaders = c.accused.filter((id) => totals[id] === max && max > 0);
    const ghosts = game.rules.ghost ? game.players.filter((p) => !p.alive && !p.ghostUsed) : [];
    box.innerHTML = `<div class="script"><span class="eyebrow emas">Langkah 3 · Undian</span><p class="say">Untuk setiap tertuduh, minta yang setuju angkat tangan. Masukkan bilangan tangan.</p>
        <p class="hint">${al.length} orang hidup boleh mengundi.${k ? ` 🏛️ Undi Ketua Kampung (${esc(k.name)}) dikira 2: kira tangannya macam biasa, kemudian pilih di bawah siapa dia undi.` : ''}</p></div>
      <div class="list">${c.accused.map((id) => { const p = gp(id), n = c.counts[id] || 0; return `<div class="trow ${leaders.length === 1 && leaders[0] === id ? 'lead' : ''}">
        <span class="ava" style="width:36px;height:36px;font-size:18px">${p.ava}</span><span class="nm">${esc(p.name)}</span>
        <span class="stepper"><button onclick="window.tallyAdj(${id},-1)" ${n <= 0 ? 'disabled' : ''} aria-label="Kurang undi ${esc(p.name)}">−</button><span>${n}</span><button onclick="window.tallyAdj(${id},1)" ${used >= al.length ? 'disabled' : ''} aria-label="Tambah undi ${esc(p.name)}">+</button><b class="score">${totals[id]}</b></span></div>`; }).join('')}</div>
      ${k ? `<div class="ghost"><b>🏛️ Ketua Kampung ${esc(k.name)} undi siapa?</b><div class="chips">${c.accused.map((id) => `<button class="chip-btn" aria-pressed="${c.ketuaVote === id}" onclick="window.ketuaVote(${id})">${esc(gp(id).name)}</button>`).join('')}<button class="chip-btn" aria-pressed="${!c.ketuaVote}" onclick="window.ketuaVote(0)">Tak undi</button></div></div>` : ''}
      ${ghosts.length ? `<div class="sub-h">👻 Roh Penasaran (1 undi terakhir)</div>${ghosts.map((g) => `<div class="ghost"><b>${g.ava} ${esc(g.name)}</b><div class="chips">${c.accused.map((id) => `<button class="chip-btn" aria-pressed="${c.ghosts[g.id] === id}" onclick="window.ghostVote(${g.id},${id})">${esc(gp(id).name)}</button>`).join('')}<button class="chip-btn" aria-pressed="${!c.ghosts[g.id]}" onclick="window.ghostVote(${g.id},0)">Simpan undi</button></div></div>`).join('')}` : ''}
      <div class="note ${leaders.length === 1 ? 'bad' : 'warn'} center big">${leaders.length === 1 ? `${esc(gp(leaders[0]).name)} dapat undi terbanyak (${max}).` : leaders.length > 1 ? `Seri ${max} undi. Tiada siapa dihalau.` : 'Belum ada undi.'}</div>
      <button class="btn btn-merah btn-block" onclick="window.finishTally()">Umum keputusan</button>`;
  }
  function tallyTotals() {
    const c = game.court, t = {};
    c.accused.forEach((id) => { t[id] = c.counts[id] || 0; });
    if (c.ketuaVote && t[c.ketuaVote] != null && revealedKetua()) t[c.ketuaVote] += 1;
    Object.values(c.ghosts).forEach((id) => { if (id && t[id] != null) t[id] += 1; });
    return t;
  }
  window.toggleAccuse = function (id) {
    const a = game.court.accused, i = a.indexOf(id);
    if (i >= 0) { a.splice(i, 1); beep('click'); } else if (a.length < 3) { a.push(id); beep('accuse'); } else { beep('error'); toast('Maksimum 3 tertuduh.'); }
    renderStage();
  };
  window.startDefense = function () { snap(); beep('defense'); game.court.idx = 0; game.phase = 'defense'; remSec = timerTotal = game.voteTime; renderStage(); startTimer(); };
  window.nextDefense = function () {
    const c = game.court;
    if (c.idx + 1 < c.accused.length) { beep('defense'); c.idx++; remSec = timerTotal = game.voteTime; renderStage(); startTimer(); }
    else window.startTally();
  };
  window.startTally = function () { snap(); clearInterval(timerInt); beep('click'); game.phase = 'tally'; renderStage(); };
  window.tallyAdj = function (id, d) { beep('tap'); const c = game.court; c.counts[id] = Math.max(0, (c.counts[id] || 0) + d); renderStage(); };
  window.ketuaVote = function (id) { beep('vote'); game.court.ketuaVote = id || null; renderStage(); };
  window.ghostVote = function (gid, id) { beep('vote'); if (id) game.court.ghosts[gid] = id; else delete game.court.ghosts[gid]; renderStage(); };
  window.finishTally = function () {
    const c = game.court, totals = tallyTotals();
    const max = Math.max(0, ...c.accused.map((id) => totals[id]));
    const leaders = c.accused.filter((id) => totals[id] === max && max > 0);
    snap();
    Object.keys(c.ghosts).forEach((gid) => { const g = gp(+gid); if (g) { g.ghostUsed = true; game.logs.push(`Siang ${game.night}: Roh ${esc(g.name)} mengundi ${esc(gp(c.ghosts[gid]).name)}.`); } });
    window.executeVote(leaders.length === 1 ? leaders[0] : null, max, true);
  };

  /* ==================== UNDIAN & MENANG ==================== */
  window.executeVote = function (pid, votes, snapped) {
    if (!snapped) snap();
    clearInterval(timerInt); beep(pid ? 'verdict' : 'click');
    const vp = pid ? gp(pid) : null; tempTargetId = null; game._dead = [];
    if (!vp) { game.logs.push(`Siang ${game.night}: Undian seri, tiada siapa dihalau.`); game.verdict = { kind: 'seri' }; game.phase = 'verdict'; renderStage(); return; }
    const vr = vp.role || 'orang_kampung';
    if (vr === 'anak_datuk' && !vp.datukUsed) {
      vp.datukUsed = true; vp.revealed = true;
      game.logs.push(`Siang ${game.night}: ${esc(vp.name)} diundi keluar, tapi dia Anak Datuk dan terselamat.`);
      game.verdict = { kind: 'datuk', pId: vp.id }; game.phase = 'verdict'; renderStage(); return;
    }
    game.logs.push(`Siang ${game.night}: ${esc(vp.name)} (${esc(RN(vr))}) dihalau dari kampung${votes ? ` dengan ${votes} undi` : ''}.`);
    if (vr === 'si_luncai') { vp.alive = false; endWith({ f: 'solo', icon: RI('si_luncai'), title: 'Si Luncai menang!', sub: `Biarlah, biarlah! ${vp.name} berjaya memperdaya kampung supaya menghalaunya.` }); return; }
    const pend = game.players.find((x) => x.alive && x.role === 'pendendam' && x.target === vp.id);
    kill(vp, 'vote');
    if (pend && pend.alive) { endWith({ f: 'solo', icon: RI('pendendam'), title: 'Si Pendendam menang!', sub: `${pend.name} berjaya buat kampung menghalau ${vp.name}, sasaran dendamnya.` }); return; }
    convertTraitors();
    game.verdict = { kind: 'out', pId: vp.id, votes, extra: game._dead.filter((id) => id !== vp.id) }; game.phase = 'verdict'; renderStage();
  };
  window.continueAfterVerdict = function () {
    beep('click');
    if (game.hunters.length) { game.hunterNext = 'vote'; game.phase = 'hunter'; renderStage(); }
    else afterVoteCheck();
  };
  function afterVoteCheck() { const w = checkWin(); if (w) { endWith(w); return; } game.night++; initNight(); }

  function checkWin() {
    const al = alive();
    const pack = al.filter(isPack).length, mus = al.filter((p) => p.role === 'musuh').length, sk = al.filter((p) => p.role === 'pontianak');
    const wolfSide = al.filter((p) => ROLES[p.role || 'orang_kampung'].f === 'wolf').length, others = al.length - wolfSide;
    if (!al.length) return { f: 'none', icon: '💀', title: 'Kampung kosong', sub: 'Semua pemain telah terkorban. Tiada siapa menang.' };
    if (game.lovers && al.length === 2 && game.lovers.every((id) => gp(id).alive)) {
      const [x, y] = game.lovers.map(gp), side = (p) => (ROLES[p.role || 'orang_kampung'].f === 'solo' ? 'solo' + p.id : ROLES[p.role || 'orang_kampung'].f);
      if (side(x) !== side(y)) return { f: 'love', icon: RI('mak_andam'), title: 'Pasangan Bercinta menang!', sub: `${x.name} dan ${y.name} hidup bahagia berdua, walaupun dari pihak berbeza.` };
    }
    if (pack === 0 && mus === 0 && sk.length === 0) return { f: 'good', icon: RI('orang_kampung'), title: 'Kampung aman semula!', sub: 'Semua Harimau dan pembunuh telah tumpas. Esok boleh kenduri!' };
    if (sk.length && pack === 0 && al.length <= 2) return { f: 'solo', icon: RI('pontianak'), title: 'Pontianak menang!', sub: `${sk[0].name} tinggal hampir seorang diri di kampung yang sunyi.` };
    if (sk.length === 1 && al.length === 2 && game.rules.skImmune) return { f: 'solo', icon: RI('pontianak'), title: 'Pontianak menang!', sub: `${sk[0].name} kebal serbuan Harimau dan tinggal berdua sahaja.` };
    if (sk.length === 0 && pack > 0 && wolfSide >= others) return { f: 'wolf', icon: RI('harimau'), title: 'Harimau Jadian menang!', sub: 'Bilangan pihak Harimau dah menyamai orang kampung. Kampung jatuh ke tangan kawanan.' };
    return null;
  }

  loadStorage();
  SND.setEnabled(soundOn);
  autoBal();
  // Kalau pautan dibuka dari QR (#j1...), tunjuk kad pemain sahaja. Kalau tidak, buka app biasa.
  const boot = () => { const c = decodeCard(location.hash.slice(1)); if (c) showCardView(c); else { cardView = null; $('pg_card').hidden = true; window.go('home'); } };
  window.addEventListener('hashchange', () => { if (!game) boot(); });
  boot();

  // PWA: daftar service worker supaya app boleh dipasang di skrin utama dan jalan tanpa internet.
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }
})();

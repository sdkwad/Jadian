# Jadian — Siapa Harimau Malam Ni?

Permainan deduksi sosial ala kampung (Werewolf versi Malaysia). Dua mod: **Moderator** (agih kad dengan QR atau lihat di telefon moderator) dan **Pass & Play**.

## Struktur folder

```
Jadian/
├── www/                      ← INI app sebenar (yang dihoskan dan dibungkus jadi APK)
│   ├── index.html            struktur skrin
│   ├── css/style.css         gaya reka bentuk
│   ├── css/fonts.css         font tempatan (tak perlu internet)
│   ├── js/app.js             logik permainan & watak
│   ├── js/audio.js           pengurus bunyi hibrid (fail .mp3 + sintesis Web Audio)
│   ├── js/config.js          tetapan: URL rasmi untuk QR
│   ├── vendor/qrcode.min.js  pustaka QR (MIT)
│   ├── fonts/                Lilita One & Plus Jakarta Sans (SIL OFL)
│   ├── assets/icons/         ikon app (192, 512, maskable, apple, svg)
│   ├── assets/audio/         bunyi suasana .mp3 (ElevenLabs), lihat bahagian Bunyi
│   ├── manifest.webmanifest  maklumat PWA (nama, ikon, warna)
│   └── sw.js                 service worker: app jalan tanpa internet
├── resources/                sumber ikon & skrin pembukaan untuk APK
│   └── icon-maker.html       alat jana semula semua ikon
├── tools/serve.ps1           server tempatan untuk uji di komputer
├── capacitor.config.json     tetapan pembungkusan APK
├── package.json              arahan npm untuk Capacitor
├── vercel.json / netlify.toml / .github/workflows/pages.yml   tetapan hosting
└── README.md
```

Senarai pemain, senarai tersimpan dan tetapan disimpan dalam **localStorage** telefon (`ww_my_saved_groups_v2` dan `jadian_prefs_v4`), jadi tak hilang bila app ditutup.

---

## Uji di komputer

Buka PowerShell dalam folder `Jadian`, kemudian:

```bash
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```

Buka `http://localhost:8080/www/` dalam Chrome atau Edge.

> Untuk uji di telefon dalam WiFi yang sama, cara paling mudah ialah terus hoskan (Fasa 2), sebab PWA dan kamera memerlukan HTTPS.

---

## Fasa 2: Letak game di internet (percuma)

Pilih **satu** sahaja.

### Pilihan A: Vercel (paling mudah)
1. Daftar di https://vercel.com (boleh guna akaun GitHub).
2. **Add New → Project**, kemudian sama ada:
   - import repo GitHub kau, atau
   - pasang Vercel CLI dan jalankan `vercel` dalam folder ni.
3. Fail `vercel.json` dah suruh Vercel terbitkan folder `www`. Tiada build command.
4. Kau akan dapat URL seperti `https://jadian.vercel.app/`.

### Pilihan B: Netlify
1. Daftar di https://netlify.com.
2. Cara terpantas: **Add new site → Deploy manually**, kemudian seret folder `www` ke dalam pelayar.
3. Atau sambungkan repo GitHub. Fail `netlify.toml` dah tetapkan folder `www`.

### Pilihan C: GitHub Pages
1. Buat repo baru di GitHub, contohnya `jadian`.
2. Push projek ni (lihat bahagian Git di bawah).
3. Di GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Fail `.github/workflows/pages.yml` akan terbitkan `www/` setiap kali kau push ke `main`.
5. URL: `https://NAMA-AKAUN.github.io/jadian/`.

### Selepas dapat URL (WAJIB)
1. Buka `www/js/config.js` dan tukar `publicUrl` kepada URL kau, contohnya `https://jadian.vercel.app/`.
2. Push atau upload semula.

Ini penting untuk **QR dalam versi APK**. Di web, QR terus guna alamat halaman tu sendiri.

### Pasang sebagai app (PWA)
Buka URL dalam Chrome (Android) → menu ⋮ → **Tambah ke skrin utama** / **Install app**. Di iPhone: Safari → Kongsi → **Add to Home Screen**.

### Kemas kini app
Setiap kali kau ubah fail dalam `www/`, naikkan nombor `VERSION` dalam `www/sw.js` (contoh `jadian-v1.0.1`). Kalau tak, telefon yang dah pasang akan terus guna versi lama dari cache.

---

## Git (simpan sejarah & push ke GitHub)

Git belum dipasang di komputer ni. Pasang dulu dari https://git-scm.com/download/win (tetapan asal), buka semula PowerShell dalam folder `Jadian`, kemudian jalankan satu per satu:

```bash
git init -b main
```

```bash
git add .
```

```bash
git commit -m "Jadian v1.0.0"
```

Buat repo kosong bernama `jadian` di https://github.com/new, kemudian:

```bash
git remote add origin https://github.com/NAMA-AKAUN/jadian.git
```

```bash
git push -u origin main
```

> Tak nak guna Git? Pilihan B (Netlify, seret folder `www`) tak perlukan Git langsung.

---

## Fasa 3: Aset visual

Dah siap:

| Fail | Saiz | Guna |
|---|---|---|
| `www/assets/icons/icon-512.png` | 512×512 | Ikon PWA / Play Store |
| `www/assets/icons/icon-192.png` | 192×192 | Ikon PWA kecil |
| `www/assets/icons/maskable-512.png` | 512×512 | Ikon Android (dipotong ikut bentuk telefon) |
| `www/assets/icons/apple-touch-icon.png` | 180×180 | Ikon iPhone |
| `resources/icon-only.png` | 1024×1024 | Sumber ikon APK |
| `resources/icon-foreground.png` + `icon-background.png` | 1024×1024 | Ikon adaptif Android |
| `resources/splash.png` + `splash-dark.png` | 2732×2732 | Skrin pembukaan APK |

Untuk ubah rupa ikon: edit `resources/icon-maker.html`, jalankan `tools\serve.ps1`, buka `http://localhost:8080/resources/icon-maker.html`, kemudian tekan **Simpan semua ke projek**.

### Bunyi (sistem hibrid)

Semua bunyi diurus oleh `www/js/audio.js` dan ikut suis **Bunyi** dalam Tetapan (dan butang pembesar suara di atas).

**Kategori A: fail `.mp3`** dalam `www/assets/audio/`, dijana dengan ElevenLabs Sound Effects (dinormalkan, 80 kbps, jumlah ~310 KB):

| Fail | Bila berbunyi |
|---|---|
| `malam-tiba.mp3` | Setiap kali malam bermula (gong, cengkerik, angin buluh, harimau jauh) |
| `suasana-malam.mp3` | Gelung latar sepanjang malam, pudar masuk dan pudar keluar bila pagi |
| `pagi-aman.mp3` | Pagi tanpa mangsa (ayam berkokok, burung pagi) |
| `pagi-bahaya.mp3` | Pagi ada mangsa (kentung bertalu-talu) |
| `menang-kampung.mp3` | Kampung atau Pasangan Bercinta menang |
| `menang-harimau.mp3` | Harimau Jadian menang |

**Kategori B: sintesis Web Audio** (tiada fail): klik butang, tukar tab, kad terbalik, detik 10 saat terakhir, kentung 5 saat terakhir, amaran masa tamat, undian, tuduhan, bela diri dan keputusan Mahkamah Kampung.

AudioContext dibuka dan fail `.mp3` dimuat pada sentuhan pertama (syarat autoplay Safari & Chrome). Kalau fail belum siap, versi sintesis dimainkan sebagai ganti. Untuk tukar bunyi, ganti fail dengan nama yang sama, kemudian naikkan versi (package.json, `js/config.js`, `sw.js`).

---

## Fasa 4: Bungkus jadi APK Android (Capacitor)

### Sekali sahaja: pasang perisian
1. **Node.js LTS**: https://nodejs.org (pilih "LTS", pasang dengan tetapan asal).
2. **Android Studio**: https://developer.android.com/studio. Buka sekali, biar ia muat turun Android SDK.
3. Tutup dan buka semula PowerShell, kemudian semak:

```bash
node -v
```

### Bina projek Android (dalam folder `Jadian`)

```bash
npm install
```

```bash
npm run android:add
```

```bash
npm run android:assets
```

```bash
npm run android:sync
```

```bash
npm run android:open
```

Android Studio akan terbuka dengan projek `android/`.

### Uji terus di telefon
1. Di telefon Android: **Tetapan → Perihal telefon**, ketik **Nombor binaan** 7 kali untuk hidupkan **Pilihan pembangun**.
2. Hidupkan **Penyahpepijatan USB**, dan sambung telefon dengan kabel USB.
3. Dalam Android Studio, pilih telefon kau di atas, kemudian tekan ▶ **Run**.

### Hasilkan fail APK untuk dikongsi
1. Android Studio → **Build → Build App Bundle(s) / APK(s) → Build APK(s)**.
2. Fail keluar di `android/app/build/outputs/apk/debug/app-debug.apk`.
3. Hantar fail tu melalui WhatsApp. Kawan kena benarkan **"Pasang dari sumber tidak diketahui"** untuk pasang.

Untuk Play Store nanti, guna **Build → Generate Signed Bundle / APK** (fail `.aab`), dan **simpan fail keystore baik-baik**. Kalau hilang, kau tak boleh kemas kini app di Play Store.

### Selepas ubah kod
Ubah fail dalam `www/`, kemudian:

```bash
npm run android:sync
```

Lepas tu Run semula dalam Android Studio.

---

## Nota penting
- **QR dalam APK** menghala ke `publicUrl` dalam `config.js`. Hoskan dulu (Fasa 2) sebelum bina APK, kalau tak QR tak boleh dibuka di telefon kawan.
- **Lesen**: font Lilita One dan Plus Jakarta Sans (SIL Open Font License), qrcode-generator (MIT). Semua boleh diguna secara komersial.

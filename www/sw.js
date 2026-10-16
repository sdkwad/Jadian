/* Service worker Jadian: simpan semua fail app dalam cache supaya game boleh dibuka tanpa internet.
   Bila kau kemas kini app, NAIKKAN nombor VERSION di bawah supaya telefon pemain ambil fail baru. */
const VERSION = 'jadian-v1.0.0';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/fonts.css',
  'css/style.css',
  'js/config.js',
  'js/app.js',
  'vendor/qrcode.min.js',
  'fonts/LilitaOne-latin.woff2',
  'fonts/LilitaOne-latin-ext.woff2',
  'fonts/PlusJakartaSans-latin.woff2',
  'fonts/PlusJakartaSans-latin-ext.woff2',
  'assets/icons/icon.svg',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/maskable-512.png',
  'assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Cache dulu, kemudian rangkaian. Pautan kad QR (#j1...) tetap dapat index.html kerana hash tak dihantar ke server.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('index.html')))
  );
});

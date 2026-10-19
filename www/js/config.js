/* Tetapan app Jadian.
   publicUrl: alamat rasmi game di internet (selepas hosting, contohnya https://jadian.vercel.app/).
   QR dalam versi APK akan menghala ke alamat ini, sebab telefon kawan tak boleh buka "localhost" dalam APK kau.
   Tukar nilai ini jika URL Vercel berubah, kemudian bina semula APK.
   version: mesti sama dengan "version" dalam package.json dan VERSION dalam sw.js. */
window.JADIAN_CONFIG = {
  publicUrl: 'https://jadian-hazel.vercel.app/',
  version: '1.1.2'
};

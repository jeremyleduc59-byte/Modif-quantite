const CACHE_NAME = 'qr-qty-v2'; // Changé en v2 pour forcer la mise à jour
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://unpkg.com/@zxing/library@latest/umd/index.min.js',
  'https://cdn.jsdelivr.net/npm/bwip-js@3/dist/bwip-js-min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});


const CACHE_NAME = 'qr-qty-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://unpkg.com/@zxing/library@latest/umd/index.min.js',
  'https://cdn.jsdelivr.net/npm/bwip-js@3/dist/bwip-js-min.js'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Stratégie de mise en cache : Réseau puis Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

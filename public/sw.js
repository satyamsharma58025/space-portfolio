// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('space-portfolio-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/blog',
        '/dashboard',
        '/vision',
        '/students',
        '/exports',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

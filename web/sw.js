
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('onduty-v64').then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        'style.css',
        'app.bundle.js',
        'v63_safety_patch.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

const CACHE_NAME = "tienda-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/shop/nay.html",
  "assets/styles.css",
  "assets/main.js",
  "/logo.png"
];

// Instalar y guardar recursos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Interceptar requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

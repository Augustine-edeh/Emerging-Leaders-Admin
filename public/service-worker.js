// service-worker.js

const CACHE_NAME = "emerging-leaders-cache-v1";
const PRECACHE_URLS = [
  "/", // Root path
  "/favicon.ico",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/offline.html",

  // Static Next.js core files
  "/_next/static/chunks/main-app.js",
  "/_next/static/chunks/framework.js",
  "/_next/static/chunks/react-refresh.js",
  "/_next/static/chunks/webpack.js",

  // Example dashboard routes (adjust based on your app)
  "/dashboard",
  "/profile",
  "/settings",

  // Example static CSS/JS files (Next.js often fingerprints these)
  // You can also dynamically add them at build time if needed
];

// Install Service Worker & Pre-cache
self.addEventListener("install", (event) => {
  console.log("SW: Install event fired");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate & Clean Old Caches
self.addEventListener("activate", (event) => {
  console.log("SW: Activate event fired");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
  );
  self.clients.claim();
});

// Stale-While-Revalidate Fetch Strategy
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Ignore non-GET requests and Next.js data fetches
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          // Update cache in background
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
          if (request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        });

      // Serve cached first, then update in background
      return cachedResponse || fetchPromise;
    })
  );
});

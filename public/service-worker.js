const CACHE_NAME = "emerging-leaders-cache-v1";
const PRECACHE_URLS = [
  "/",
  "/favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "apple-touch-icon.png",
  "/site.webmanifest",
  "logo.png",
  "/offline.html",

  // Dashboard routes (added basd on the available routes in the project)
  "/admin/analytics",
  "/admin/assessment-management",
  "/admin/content-management",
  "/admin/support",
  "/admin/user-management",
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

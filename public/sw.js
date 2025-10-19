// Minimal service worker: cache built files for offline
const CACHE_NAME = 'modern-bank-v1'
const urlsToCache = [ '/', '/index.html' ]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  )
})

const CACHE = "NEWS_V1";
const FILES_TO_CACHE = [
    "/index.html",
    "/manifest.json",
    "/assets/js/utils.js",
    "/assets/js/script.js",
    "/assets/js/localforage.min.js",
    "/assets/css/screen.css",
    "/assets/css/reset.css"
];

self.addEventListener("install", (evt) => {
    log("The Service is worker is being isntalled");
    e.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    )
})

self.addEventListener("fetch", (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(res => {
            res ? res : fetch(evt.request);
        })
    )
})
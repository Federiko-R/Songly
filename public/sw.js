if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
    self.addEventListener('fetch', function (event) {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(event.request);
            })
        )
    });
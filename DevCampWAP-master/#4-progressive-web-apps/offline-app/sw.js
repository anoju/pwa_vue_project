var CACHE_NAME = 'sw-demo-1';
var caches_files = [
    '/',
    '/images/test.jpg',
    '/dist/bundle.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('cache is worked');
                return cache.addAll(caches_files);
            })
            .catch(function(err){
                console.error(err);
            })
    );
});
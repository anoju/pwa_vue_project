var CACHE_NAME = 'sw-demo-1';
var caches_files = [
	'/',
	'/images/test.jpg',
	'/dist/bundle.js'
];
/*var CACHE_WHITELIST =[
	'/',
	'/images/test.jpg',
	'/dist/bundle.js'
];*/

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

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if(response){
					console.log(response,'response');
					return response;
				}
				console.log(event.request,'event.request');
				return fetch(event.request);
			})
			.catch(function(err){
				console.error(err,'ERROR: fetch ing the');
			})
	);
});

self.addEventListener('activate', function(event){
	event.waitUntil(
		//
	);
});
const FILES_TO_CACHE = [
   '/',
   '/index.html',
   '/styles.css',
   '/dist/bundle.js',
   'https://fonts.googleapis.com/css?family=Istok+Web|Montserrat:800&display=swap',
   'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
];

const PRECASHE = 'precache-v1';

self.addEventListener('install', (event) => {
   event.waitUntil(
      caches
         .open(PRECASHE)
         .then((cache) => cache.addAll(FILES_TO_CACHE))
         .then(self.skipWaiting())
   )
})


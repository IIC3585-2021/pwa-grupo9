const assets = [
    "./",
    "./index.html",
    "./styles/main.css",
    "./scripts/main.js",
    "./images/profile_placeholder.png",
    "./images/firebase-logo.png",
    "./favicon.ico",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://code.getmdl.io/1.1.3/material.orange-indigo.min.css",
    "https://code.getmdl.io/1.1.3/material.min.js",
    "https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en"
];   
  
self.addEventListener("install", installEvent => {
    const cacheProm = caches.open('static-cache').then(cache => {
        return cache.addAll(assets);
    })
    installEvent.waitUntil(cacheProm);
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
        })
    );
});

importScripts('/__/firebase/6.0.4/firebase-app.js');
importScripts('/__/firebase/6.0.4/firebase-messaging.js');
importScripts('/__/firebase/init.js');

firebase.messaging();

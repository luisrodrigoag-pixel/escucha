/* Service worker de SEGURIPREV ESCUCHA.
   Dos razones para que exista:
   1. Sin él, Chrome no ofrece "Instalar app".
   2. Una vez instalada en el iPad, la app tiene que ABRIR sin señal; si no, el acceso
      directo mostraría la pantalla de error de Safari en la caseta, que es justo donde
      se usa. Por eso guarda copia de la página y de sus imágenes.
   Estrategia: red primero y caché de respaldo, para que una versión nueva llegue sola
   en cuanto haya internet. Nunca guarda respuestas de encuestas: esas viven en
   localStorage, no pasan por aquí. */
const CACHE = "escucha-v1";
const ACTIVOS = ["./", "./index.html", "./escudo.png", "./logo.png", "./favicon.png",
                 "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
                 "./manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ACTIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;   // tipografías y demás, directo a la red
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copia = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});

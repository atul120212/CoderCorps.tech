'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2be6bc151af4af99e1946174232e3535",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/back.gif": "a3224124ee48cddde865ecff61c13fde",
"assets/assets/images/background.png": "0564de0c80dbcae74ffce0f6a09dc3c0",
"assets/assets/images/background1.jpg": "4d17720654543fd053b38768d64bb804",
"assets/assets/images/background2.jpg": "89541420b1ff956bc2c61aa8602de7ae",
"assets/assets/images/background3.jpg": "4db4419f2f4f16504d432707977c04ca",
"assets/assets/images/background6.jpg": "33bd0bdff5cb1b184c6def34b5df3292",
"assets/assets/images/backgrounds.jpg": "6e5ce78f6d89f56bcec74d892e5b4b19",
"assets/assets/images/backgroundss.jpg": "c12fc55390beadbc77f1b6ac379a39a0",
"assets/assets/images/block.gif": "b32f5090bc56ceab8683d04654624c56",
"assets/assets/images/blockk.gif": "8ff636ce702175487f85770ec98b428c",
"assets/assets/images/chainn.gif": "125f024c16542dc182863a236e37754f",
"assets/assets/images/CODER.gif": "dce87263cbd710a11bfe5ace129cbb91",
"assets/assets/images/config.json": "6f6265ac917b65e05af0d7933dc67482",
"assets/assets/images/corps.gif": "3e64903da2a5fdc79f84d3957eff616a",
"assets/assets/images/corpss.jpg": "631e6b5e657d738452312ee57bf652cc",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/fonts/MyFlutterApp.ttf": "db263a165e21844d29cc8a1b66d89624",
"assets/assets/images/ground.jpg": "69ef1a6204db8eac28ce7019034750bc",
"assets/assets/images/java.png": "652fdb659a681116811612e0b9e25354",
"assets/assets/images/LEVELS.jpg": "001cd1a728e4ab28f43bf32f51b79aac",
"assets/assets/images/logo.gif": "86047bcd644b67ccb70b64e539a5a54c",
"assets/assets/images/mutant.jpg": "bed8580fdad32365a44585d748d42f35",
"assets/assets/images/mutant_sol.jpg": "7271a611c4cc658b6044fd460c6bbfc8",
"assets/assets/images/myblock.jpg": "c5638206558ccb64855f291668c10a75",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/PRIMARY.jpg": "cf5dcb99f685f298058ab63ba4111f5e",
"assets/assets/images/primary_sol.jpg": "2c71a48ef8ea4c9ddccc659f399b0133",
"assets/assets/images/sols.jpg": "200e75cf3f57acdaf5b898593a394e07",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/splash.svg": "c2d0cf3fb7d950aa8758ae2c91f5bfbd",
"assets/assets/images/test1.jpeg": "9bb4e188581240286417187e232c4b38",
"assets/assets/images/test2.jpeg": "11346c7dce688552f9b834067e2120d5",
"assets/assets/images/test3.jpeg": "74e1950d7c75cce212743bfd5a0bf432",
"assets/assets/images/tests1.jpg": "3c5a9ad135031a42a6f2f5911b2c78bd",
"assets/assets/images/tests1.png": "57637a37068bfb8c2ce1b5097ac01e61",
"assets/assets/images/tests2.gif": "19454b8dab6717cf02e3d488cf7146c5",
"assets/assets/images/tests2.jpg": "ed1d52732ddc2ba9c9dce5c9e365dc10",
"assets/assets/images/tests2.png": "2b4873e54ba9c360a3ffd4dcc4eef48b",
"assets/assets/images/tests3.jpg": "952ae9a98a8361896b011cc656876daa",
"assets/assets/images/tests3.png": "28b5338169da3d94d4e99231f3e17216",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/FontManifest.json": "e8f4c736e6df1a63a7d698072d1dc400",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "c9d0c138fa652bdc6b075ac357c6680d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "e35870ec64271e47ab35e964af736f5c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0e43bc8aaaa3eefc4130a1f4966700cc",
"/": "0e43bc8aaaa3eefc4130a1f4966700cc",
"main.dart.js": "32856d0325b6d73876e0ff41d522c280",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
"version.json": "9094aacdae789dccd67fa32109ff1a18"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

# Progressive Web App

## Current status of the project
Most of the necessary requirements are added however, there's no real style provided. This was due to the fact there wasn't enough time (so I focussed on more important matters). Following technologies are implemented; Service Worker, LocalForage, installable on Web. I've knowingly chosen not to implement Push Notifications because of my own frustration when browsing the web on a smartphone and having them forced on you. Underneath you'll find more information to the technologies implemented in the Progressive Web App.
## Languages & Frameworks
The project was solely build in HTML5, Javascript (ES6). Altough it was intended to have style on the project as well, the files are there but empty. You'll also find that I've implemented LocalForage, this was to cache items so they can be used to Fetch from the cache, once they are cached there. 

## Service worker
Currently the service worker caches following files; index.html, manifest.json, necessary script files, css files. I've added both an install event and fetch event. The install events does what it says, it installs the service worker for you and stores the files mentioned before in your cache. When re-opening the website the next time, you might find it to be faster than before, this is because fetching from cache is faster.
The Fetch event "intercepts" an Ajax call that happens, it checks whether the item is in the cache, if it's in the cache it returns the cached data else it fetches from the Laravel API
## Manifest File & Lighthouse
You might notice there are a few things in the header of the HTML pages we normally don't use (e.g. theme-color, description). These tags together with the manifest file are used to make the application offline accessible. The lighthouse approves the application with 96% (100, 100, 86, 100 scores). The manifest files holds the icons for the application.


LODASH https://cdnjs.com/libraries/lodash.js

CDN - Content Delivery Network

` <script
      async
      src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
      integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>`

`console.log(_)`

Throttle & Debounce

Chatty events:
- input
- scroll

_.throttle(callback, delay)
// right now and not less then after delay

node.addEventListener('event-name', _.throttle(callback, delay))

_.debounce(callback, delay, options)
// only after delay between calls

node.addEventListener('event-name', _.debounce(handler, delay))

const options = {
    leading: true, // at start - false by default
    trailing: false, // at the end - true by default
}

LAZY-LOADING - to load content (images for ex) only when it need, not at the start loading

- attr `loading` in tag img in Safari not working

Libriaries:
- lazysizes https://afarkas.github.io/lazysizes/index.html
https://cdnjs.com/libraries/lazysizes
` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
    integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`

LQIP (Low Quality Image Placeholder)
1. <img class='lazyload' src='link-to-LQIP-image' data-src='link-to-the-image' alt='demo'/> 

for added class lazyloaded you may add your personal styles

- vanilla-lazyload https://www.andreaverlicchi.eu/vanilla-lazyload/
- lozard https://apoorv.pro/lozad.js/
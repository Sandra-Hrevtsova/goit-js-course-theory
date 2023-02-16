EVENTS https://developer.mozilla.org/ru/docs/Web/Events
- click
- focus 
- blur

- keydown, keypress, keydown (keyCode not used, need to use key & code)

- input (for text inputs and textareas)
- change (for the rest inputs and select)
- submit (for form at all)

`node.addEventListener('eventName', eventHandler)`
`node.removeEventListener('eventName', eventHandler)`

<!-- this in eventHandler is a reference on node -->

EVENT OBJECT
- type
- target
- currentTarget

DEFAULTS
- click on links
- send form
`event.preventDefault()`
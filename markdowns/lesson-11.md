DOM - Document Object Model == {}

- prop == node == { attributes & props & methods }

- element node == tag | <script>, <p>, <h1>, etc.
- text node == content inside and around of tag
- comment node == <!-- comment -->

- window & document

NAVIGATION

only for elem:
- parentNode
- children - pseudo array
- firstElementChild
- lastElementChild
- previousElementSibling
- nextElementSibling

for elem and text:
- childNodes - pseudo array
- firstChild
- lastChild
- previousSibling
- nextSibling

GET ELEMENT

only one:
- getElementById(id)
- querySelector(selector) | as find()

group of elements:
- getElementsByClassName(className) | as filter()
- querySelectorAll(selector)

UPDATE ELEMENT
by attr:
- id
- name
- src 
- alt
- value
- checked

props:
- classList - pseudo array with methods: 
-- contains(class), 
-- add(), 
-- remove(), 
-- toggle(), 
-- replace()

- style == { all CSS styles in camelCase } ex: font-size => fontSize
- textContent
- attributes == { all attributes of element }
- dataset == { all data-attributes without prefix data- }

methods:
- hasAttribute(attrName)
- getAttribute(attrName)
- setAttribute(attrName, value)


CREATE NEW ELEMENT
as {}
- document.createElement(tag)

ass ''
- '<p>Hello World!</p>'

INSERT element into DOM
as {}
- parentElement.before(...newElems) -- before the parentElement
- parentElement.prepend(...newElems) -- at the start of parentElement || unshift
- parentElement.append(...newElems) -- in the end of parentElement || push
- parentElement.appendChild(newElem) -- in the end of parentElement || push
- parentElement.after(...newElems) -- after parentElement

as ''
- parentElement.insertAjacentHTML('beforebegin', newElem)
- parentElement.insertAjacentHTML('afterbegin', newElem)
- parentElement.insertAjacentHTML('beforeend', newElem)
- parentElement.insertAjacentHTML('afterend', newElem)

- parentElement.innerHTML = 'Hello <span class='accent-text'>World</span>'
- parentElement.innerHTML = newElem

REMOVE ELEMENT
old:
- parentElement.removeChild(elem)

new:
- elem.remove()

CLONE NODE
- node.cloneNode() - not deep
- node.cloneNode(true) - deep

add scripts
<script defer src="./index.js"></script> - | DOM
<script async src="./index.js"></script>

console.log(window);

// GET element
// const title = document.querySelector('h1'); // by tag
// console.dir(title);

// const title = document.querySelector('#main-title'); // by id

// const title = document.querySelector('.title'); // by class

// const title = document.querySelector('[data-test="first-section-tite"]'); // by attr
// console.dir(title);

// const title = document.querySelector('#first-section > #main-title'); // by child selector

const title = document.querySelector('body #main-title'); // by selector

// console.log('title:', title);
// console.log('attributes:', title.attributes);
// console.log('id:', title.attributes[0]);
// console.log('id:', title.attributes.id);

// console.log('class:', title.attributes[1]);
// console.log('class:', title.attributes.class);

// console.log('data-:', title.attributes[2]);
// console.log('data:', title.attributes['data-test']);

const body = document.querySelector('body');
console.dir(body);

// console.log(body.childNodes);
// console.log(body.children);

// const result = body.children.map(el => {
//     console.log(el);
// })

// body.childNodes.forEach(el => {
//     console.log(el);
// })

// console.log(body.classList);
// body.classList.remove('element')
// body.classList.add('new-element')
// // body.classList.toggle('body');
// body.classList.replace('body', 'not-body')

// console.log(body.classList.contains('not-body'));

const btn = document.getElementById('btn');

// console.log(body.dataset);
// console.log('id', body.dataset.id);
// console.log('test', body.dataset.test);

// console.log(body.firstChild); // text
// console.log(body.firstElementChild); // section

// console.log('ID:', body.id);
// console.log(body.getAttribute('id'));
body.setAttribute('id', 'new Id')

// console.log(title.textContent);
title.textContent = 'EU 2'

btn.textContent = 'change theme'

// console.log(body.style);
body.style.backgroundColor = 'black'
body.style.color = 'white'

btn.classList.add('primary-btn')

// =======
const stringLink = '<a href="#" class="home-link">HOME</a>'
// console.log(stringLink, typeof stringLink);
// =
body.insertAdjacentHTML('afterbegin', stringLink)

const elementLink = document.createElement('a')
// console.dir(elementLink);
// console.log('content:', elementLink.textContent);
elementLink.textContent = 'Contacts'
// console.log('content:', elementLink.textContent);
elementLink.setAttribute('href', '#')

console.log(elementLink.getAttribute('href'));
// =
// body.insertAdjacentElement('afterbegin', elementLink)
body.after(elementLink)

// DELETE
document.querySelector('#first-section').removeChild(btn)

elementLink.remove()

// CLONING
const clonedLink = elementLink.cloneNode(true);
console.log(clonedLink);
console.log(clonedLink.textContent);

// 
const metaTags = document.querySelectorAll('meta');

console.log('metaTags:', metaTags);
// metaTags.forEach(el => console.log(el))

const containsClassElement = document.getElementsByClassName('element');
console.log('containsClassElement:', containsClassElement);
[...containsClassElement].forEach(el => console.log(el))
import data from '../data/gallery.js';
const { data: initialData } = data;

// console.dir(_);
const inp = document.querySelector('[type="text"]');


window.addEventListener('scroll', () => {
    console.log('Scroll');
})


const handler = (event) => {
    console.log(event.target.value);
}

const delay = 1000;



// inp.addEventListener('input', _.throttle(handler, delay));
// H
// Hello w
// Hello world

inp.addEventListener('input', _.debounce(handler, delay));

const createItem = (src, title, text) => {
    return `
        <li>
            <img src='https://images.pexels.com/photos/1054018/pexels-photo-1054018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
             data-src=${src} alt=${title} width='200' class='lazyload'/>
            <h2>${title}</h2>
            <p>${text}</p>
        </li>
    `
}

const createGallery = (imagesArray, createItemElements) => {
    const listElem = document.createElement('ul');
    const result = imagesArray.map(({image, title, text}) => {
        return createItemElements(image, title, text)
    }).join('')
    listElem.insertAdjacentHTML('afterbegin', result)
    return listElem;
}

const x = createGallery(initialData, createItem);
document.querySelector('body').innerHTML = '';
document.querySelector('body').append(x);
// console.log('ok');

// window.addEventListener('click', (event) => {
//     console.log('click on WINDOW');
// })

// document.querySelector('body').addEventListener('click', (event) => {
//     console.log('click on BODY');
// })

// document.getElementById('submit-btn').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('click on BUTTON');
// })

// document.querySelector('.propagation-section').addEventListener('click', (event) => {
//     console.log('click on SECTION');
// })

// =====================================
import data from '../data/gallery.js';
import images from '../data/images.js';
// console.log(data);
const { data: initialData } = data;

const createItem = (src, title, text) => {
    return `
        <li>
            <img src=${src} alt=${title} width='200'/>
            <h2>${title}</h2>
            <p>${text}</p>
        </li>
    `
}

const createImageItem = (src, title = 'default') => {
    title = title ? title : 'default'
    return `
        <li>
            <img src=${src} alt=${title} width='100'/>
        </li>
    `
}

const createImageItemByMap = (data) => {
    return data.map(({image: src, title = 'default'}) => {
        title = title ? title : 'default'
        return `
            <li>
            <img src=${src} alt=${title} width='100'/>
            </li>
        `
    }).join('')
}

const createGallery = (imagesArray, createItemElements) => {
    // create ul
    const listElem = document.createElement('ul');
    
    // map imagesArray & create items
    const result = imagesArray.map(({image, title, text}) => {
        return createItemElements(image, title, text)
    }).join('')
    
    // insert items into ul 
    listElem.insertAdjacentHTML('afterbegin', result)

    return listElem;
}

const x = createGallery(initialData, createImageItem);
document.querySelector('body').innerHTML = '';
// document.querySelector('body').append(x);

// AS ELEMENTS
const createImgItem = (imagesData) => {
    return imagesData.map(({image, title, text}) => {
        const item = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.setAttribute('data-src', image);
        title = title ? title : 'default';
        img.setAttribute('alt', title);
        img.setAttribute('width', '50');

        item.appendChild(img)
        // console.log(item);
        return item
    })
}

const createImagesList = (array = [], callback, handler) => {

    // create ul
    const listElem = document.createElement('ul');

    const res = callback(array);
    // console.log(typeof res);

    // insert items into ul
    if (typeof res === 'string') {
        listElem.insertAdjacentHTML('afterbegin', res)
    } else if (typeof res === 'object'){
        listElem.append(...res);
    } else {
        listElem.insertAdjacentHTML('afterbegin', '<h1>ERROR</h1>')
    }


    listElem.addEventListener('click', handler)

    return listElem;
}

const imagesElems = createImagesList(images, createImgItem, clickHandler);
// console.log('imagesElems:', imagesElems);
document.querySelector('body').append(imagesElems);

function clickHandler({target}) {
    // console.dir(e.target.nodeName);
    if (target.nodeName === 'IMG') {
        const fullImage = target.dataset.src;
        const altFullImage = target.alt;
        console.log({fullImage, altFullImage});
        // pass {fullImage, altFullImage} to openModal()
    }
}

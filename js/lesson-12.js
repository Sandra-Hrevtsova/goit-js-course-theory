// const docClickHandler = (event) => {
//     // console.log('EVENT:', event);
//     // console.log('Target:', event.target);
//     // console.log('Current Target:', event.currentTarget);
//     console.log('Click on Document!!!');
// };
// //                                  e
// //                                  evt
// document.addEventListener('click', docClickHandler)

// const btn = document.getElementById('btn');

// const clickHandler = (e) => {
//     // console.log('EVENT on btn:', e);
//     // console.log('Target:', e.target);
//     // console.log('Current Target:', e.currentTarget);
//     console.log('Click on BUTTON');
//     document.removeEventListener('click', docClickHandler)
// }

// btn.addEventListener('click', clickHandler)

// btn.removeEventListener('click', clickHandler)

//  ================

const form = document.getElementById('form');
// console.log(form);
form?.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // console.log(evt);
    // console.log('target == form:', evt.target);
    // console.dir(evt.target);
    // console.log('Inner elements:', evt.target.elements);
    // console.log('TEXT input:', evt.target.elements.text);
    // console.dir(evt.target.elements.text);
    // console.log('TEXT input value:', evt.target.elements.text.value);
    // console.log('RANGE input value:', evt.target.elements.range.value);

    const {target: {elements: {text, range}}} = evt;
    const object = {
        text: text.value,
        range: `${range.value}%`
    }

    console.log('RESULT', object);
})

const textInput = document.querySelector('[name="text"]');
// console.log(textInput);
textInput.addEventListener('input', (event) => {
    // console.log('Input event:', event);
    console.log('value:', event.target.value);
    // validateTextInput(event.target)
})

textInput.addEventListener('change', (e) => {
    console.log('CHANGE value:', e.target.value);
})

function validateTextInput(textInput){
    if (textInput.value.length < 5) {
        textInput.style.borderColor = 'red'
    } else {
        textInput.style.borderColor = 'green'
    }
}


document.querySelector('[name="range"]').addEventListener('change', (e) => {
    console.log(e.target.value);
    console.log(e.currentTarget);
})

const selectElem = document.querySelector('[name="select"]');

selectElem.addEventListener('change', (e) => {
    console.dir(e.target);
})

const keyHandler = (e) => {
    console.log(`${e.type}`, e);
    console.log('Key:', e.key); // changed by lang
    console.log('Code:', e.code); // not changed

}
window.addEventListener('keydown', keyHandler);
window.addEventListener('keypress', keyHandler); // ! tab, CAPS
window.addEventListener('keyup', keyHandler); // CAPS

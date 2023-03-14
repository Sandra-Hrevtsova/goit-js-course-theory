console.log('ok');
const body = document.querySelector('body');
body.innerHTML = '';
const input = document.createElement('input');
input.placeholder = 'Enter value'
body.insertAdjacentElement('afterbegin', input)

const API_KEY = '563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2';
const options = {
    headers: {
        Authorization: API_KEY
    }
}

input.addEventListener('change', (e) => {
    const queryValue = e.target.value.trim();
    // console.log('queryValue:', queryValue);
    if (!queryValue) {
        alert('Enter search value!');
        return;
    };
    let queryParams = `?query=${queryValue}&orientation=landscape`;
    const url = `https://api.pexels.com/v1/search${queryParams}`
    fetch(url, options)
    .then((response) => {
        // console.log('RESPONSE:', response);
        if (response.status === 400) {
            throw new Error('Bad request: empty query value.')
        }
        if (response.status === 401) {
            throw new Error('CHECK YOUR API KEY!!!')
        }
        return response.json();
    })
    .then(data => {
        // console.log('DATA:', data);
        return data.photos;
    })
    .then((photos) => {
        // console.log('photos:', photos);
        const result = photos.map(image => {
            // console.log(image);
            return createItem(image.src.tiny, image.alt);
        }).join('')
        // console.log('RESULT:', result);
        input.insertAdjacentHTML('afterend', result)
    } )
    .catch((error) => {
        console.log('ERROR:', error.message);
    })
    .finally(() => {
        e.target.value = ''
    })

})

function createItem(source, description) {
    return `<li>
        <img src=${source} alt=${description}/>
    </li>`
}
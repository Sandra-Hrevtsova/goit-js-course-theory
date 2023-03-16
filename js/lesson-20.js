console.log('ok');
const body = document.querySelector('body');
body.innerHTML = '';

const input = document.createElement('input');
input.placeholder = 'Enter value'
body.insertAdjacentElement('afterbegin', input);

const resultsList = document.createElement('ul');
resultsList.classList.add('resultsList');
input.insertAdjacentElement('afterend', resultsList);

const loadMoreButton = document.createElement('button');
loadMoreButton.type = 'button';
loadMoreButton.textContent = 'Load more...'


function getFetch(value, p) {
    const API_KEY = '563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2';
    const options = {
        headers: {
            Authorization: API_KEY
        }
    }
    let queryParams = `?query=${value}&orientation=landscape&per_page=1&page=${p}`;
    const url = `https://api.pexels.com/v1/search${queryParams}`;
    return fetch(url, options).then((response) => {
        if (response.status === 400) {
            throw new Error('Bad request: empty query value.')
        }
        if (response.status === 401) {
            throw new Error('CHECK YOUR API KEY!!!')
        }
        return response.json();
    })
    .then(data => {
        page = data.page + 1;
        getResults(data.photos);
    })
    .catch((error) => {
        console.log('ERROR:', error.message);
    })
    .finally(() => {
        input.value = ''
    })
};

let queryValue, page;

input.addEventListener('change', (e) => {
    const inputValue = e.target.value.trim();
    if (!inputValue) {
        alert('Enter search value!');
        return;
    };
    queryValue = inputValue;
    getFetch(queryValue, '1')
})

loadMoreButton.addEventListener('click', (e) => getFetch(queryValue, page));

function createItem(source, description) {
    return `<li>
        <img src=${source} alt=${description}/>
    </li>`
}

function getResults (photos) {
    const result = photos.map(image => createItem(image.src.tiny, image.alt)).join('')
    resultsList.insertAdjacentHTML('beforeend', result)
    body.insertAdjacentElement('beforeend', loadMoreButton)
}
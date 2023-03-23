const body = document.querySelector('body');
body.innerHTML = '';

// fetch('.../getToken').then(r => {
//     // r.token => localStorage
//     fetch('.../getUserData').then(r => {
//         console.log(r);
//     }).catch()
//     fetch('.../getMyInfo').then(r => {
//         console.log(r);
//     }).catch()
// }).catch()

// // async await

// const getToken = async () => {
//     return fetch('.../gettoken')
// }

// const getUser = async (t) => {
//     return fetch('.../getUserData')
// }

// const getUserInfo = async (id) => {
//     return fetch('.../getMyInfo')
// }

// const token = await getToken();
// const user = await getUser(token);
// const info = await getUserInfo(user.id);

const input = document.createElement('input');
input.placeholder = 'Enter value'
body.insertAdjacentElement('afterbegin', input)

const API_KEY = '563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2';
const options = {
    headers: {
        Authorization: API_KEY
    }
}

input.addEventListener('change', async (e) => {
    const queryValue = e.target.value.trim();
    if (!queryValue) {
        alert('Enter search value!');
        return;
    };

    try {
        const response = await getFetch(queryValue);
        if (response.status === 429) {
            throw new Error('Too Many Requests: your limit is gone.')
        }
        const data = await response.json();
        const result = data?.photos?.map(image => createItem(image.src.tiny, image.alt)).join('')
    
        input.insertAdjacentHTML('afterend', result);
    } catch(error) {
        console.log(error);
    }
})

async function getFetch(q){
    let queryParams = `?query=${q}&orientation=landscape`;
    const url = `https://api.pexels.com/v1/search${queryParams}`;
    return fetch(url, options);
}

function createItem(source, description) {
    return `<li>
        <img src=${source} alt=${description}/>
    </li>`
}
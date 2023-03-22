const body = document.querySelector('body');
body.innerHTML = '';

const base_url = 'http://localhost:3000';
const edpoints = {
    students: '/students',
    products: '/products'
}

// CRUD
// Create: POST
// Read: GET
// Update: PUT & PATCH
// Delete: DELETE

const form = document.createElement('form');
form.classList.add('newStudentFrom');
const nameInput = document.createElement('input');
nameInput.placeholder = 'name';
nameInput.id = 'name';

const groupInput = document.createElement('input');
groupInput.placeholder = 'group';
groupInput.id = 'group';

const postButton = document.createElement('button');
postButton.type = 'submit';
postButton.textContent = 'Post students';

form.append(nameInput, groupInput, postButton)

body.insertAdjacentElement('afterbegin', form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const group = e.target.elements.group.value;
    if (!name || !group) return;

    const url = base_url + edpoints.students;
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, group})
    }
    fetch(url, options).then(response => console.log('RESPONSE:', response))
})

const getButton = document.createElement('button');
getButton.type = 'button';
getButton.textContent = 'Get students';
form.after(getButton);

const resultsList = document.createElement('ul');

getButton.addEventListener('click', () => {
    const url = base_url + edpoints.students;
    fetch(url).then(response => {
        // console.log('RESPONSE:', response);
        return response.json();
    }).then(data => {
        // console.log('DATA:', data);
        if (data.length > 0) {
            // create elements
            const elements = data.map(el => {
                const elName = el.name;
                const elGroup = el.group;
                const elId = el.id;
                const item = document.createElement('li');
                item.setAttribute('data-id', elId);
                const stName = document.createElement('h3');
                stName.textContent = elName;
                const stGroup = document.createElement('p');
                stGroup.textContent = elGroup;

                const removeButton = document.createElement('button');
                removeButton.type = 'button';
                removeButton.textContent = 'X';
                removeButton.classList.add('removeItem');
                item.append(stName, stGroup, removeButton);
                return item;
            })

            // insert elements in resultsList
            resultsList.append(...elements);
            // resultsList insert after getButton
            getButton.after(resultsList)
        }
    })
})

resultsList.addEventListener('click', (e) => {
    // UPDATE Student
    if (e.target.nodeName === 'LI') {
        const studentId = e.target.dataset.id;
    
        const url = base_url + edpoints.students + `/${studentId}`;
        const name = 'default';
        const putOptions = {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name})
        }
        // fetch(url, putOptions).then(r => {
        //     console.log('RES:', r);
        // })
        const patchOptions = {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name})
        }
        // fetch(url, patchOptions).then(r => {
        //     console.log('RES:', r);
        // })
        const patchOptionsWithNewField = {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({pets: ['cat']})
        }
        
        fetch(url, patchOptionsWithNewField).then(r => {
            console.log('RESP:', r);
        })
    };

    // DELETE student

    if (e.target.classList.contains('removeItem')){
        const id = e.target.parentElement.dataset.id;
        const url = base_url + edpoints.students + `/${id}`;
        fetch(url, {method: 'DELETE'}).then(r => console.log('RESPONSE:', r));
    }
  
})
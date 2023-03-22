console.log('ok');
const body = document.querySelector('body');
body.innerHTML = '';

fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));
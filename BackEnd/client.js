console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  fetchText();
});

async function fetchText() {
    let response = await fetch('http://localhost:3000/users', {method: 'GET'});
    let data = await response.json();
    console.log(data);
}
import './css/styles.css';

var debounce = require('lodash.debounce');
console.log('Hello');
const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
const infoDivRef = document.querySelector('.country-info');
inputRef.addEventListener('input', _.debounce(onInput, 3000));

function onInput(e) {
  console.log('onInput');
  const name = inputRef.value;
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const markup = `<div class='country'>
            <div class='flag'>
            <img src='${data[0].flags.png}' alt='' />
            </div>
            <div class='info'>
            <h2>${data[0].name.common}</h2>
            </div>
            </div>`;
      infoDivRef.innerHTML = markup;
    });
}

const markup = `<div class='country'>
<div class='flag'>
  <img src='' alt='' />
</div>
<div class='info'>
  <h2>Hello</h2>
</div>
</div>`;

// fetch(
//   'https://restcountries.com/v3.1/name/deutschland?fields=name.official,capital,population,flags.svg,languages'
// )
//   .then(response => {
//     // console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     console.log(
//       'Capital:' +
//         data[0].capital[0] +
//         ', Population:' +
//         data[0].population +
//         ', Languages:' +
//         data[0].languages['deu']
//     );
//   })
//   .catch(error => {
//     console.log('Error', error);
//   });

//   console.log(data[0].name.common);
//   console.log(
//     'Capital:' +
//       data[0].capital[0] +
//       ', Population:' +
//       data[0].population +
//       ', Languages:' +
//       data[0].languages['deu'] +
//       ', Flag:' +
//       data[0].flags.png
//   );

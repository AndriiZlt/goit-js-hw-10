import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchFun } from './fetch';
import { markupFun } from './markup';
import { clearOutput } from './clearOutput';
var debounce = require('lodash.debounce');

const inputRef = document.getElementById('search-box');
const infoDivRef = document.querySelector('.country-info');
const listUlRef = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;
inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  const name = inputRef.value.trim();
  fetchFun(name)
    .then(data => {
      if (data.status === 404) {
        clearOutput([infoDivRef, listUlRef]);
        Notiflix.Notify.failure('Oops, there is no country with that name');
      } else if (data.length > 10) {
        clearOutput([infoDivRef, listUlRef]);
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length > 1) {
        clearOutput([infoDivRef]);
        listUlRef.innerHTML = markupFun(data);
      } else if (data.length === 1) {
        Notiflix.Notify.success('Found a match!');
        clearOutput([listUlRef]);
        infoDivRef.innerHTML = markupFun(data);
      } else {
      }
    })
    .catch(error => {
      clearOutput([infoDivRef, listUlRef]);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

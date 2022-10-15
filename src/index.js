import './style.css';
import { addTask, clear, store } from './functions.js';

const form = document.querySelector('form');
let todo;
const inputEl = document.querySelector('.input');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputEl.value !== '') {
    store();
    addTask(todo);
    clear();
  }
});

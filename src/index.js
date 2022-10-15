import './style.css';
import { addTask, clear, store } from './functions.js'

const form = document.querySelector('form');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputEl.value !== '') {
    store();
    addTask(todo);
    clear();
  }
});

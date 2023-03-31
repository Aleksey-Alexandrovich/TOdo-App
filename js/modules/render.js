import {createElement} from './createElement.js';
const app = document.querySelector('.app-container');
app.classList.add('app-container', 'vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
 
 
const {
  createContainer,
  createForm,
  createTable,
  createUserName,
} = createElement;


const renderTodo = (htmlElement) => {
  const list = document.querySelector('.table').querySelector('tbody');
  console.log(list);
  list.insertAdjacentElement("beforeend",  htmlElement);
};

 


export const render = {
  renderTodo,
};

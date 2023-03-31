import {createElement} from './createElement.js';
// import {createRow} from "./createElement.js";
import { render } from './render.js';
import { serviceStorage } from './serviceStorage.js';
const {
  createContainer,
  createForm,
  createTable,
  createUserName,
  createRow
} = createElement;

const {
  getStorage,
  addToStorage,
  removeFromStorage,
  toggleStatusInStorage,
} = serviceStorage;

const { renderTodo } = render;
 
const addEventListeners = () => {
  const form = document.querySelector('form');
  console.log(form)
  const input = form.querySelector('input');
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTask(input.value);
  })
};

const createTask = (text, id, status) => {
    let tempId = id || Math.random().toString().substring(2, 10);
    let tempStatus = status || false;
    const row = createRow(tempId, text, tempStatus);

    if(!id) {
      addToStorage(getUserName(), {id: tempId, text, status: tempStatus});
    }

    console.log(row);
    row.querySelector('.btn-danger').addEventListener('click', () => {
      removeFromStorage(getUserName(), tempId);
      row.remove();
    })

  row.querySelector('.btn-success').addEventListener('click', () => {
    toggleStatusInStorage(getUserName(), tempId);
    console.log("clicked");
    console.log(row);
    row.classList.toggle('table-light');
    row.classList.toggle('table-success');
    row.querySelector(".task").classList.toggle('text-decoration-line-through');
  })

  return row;
  console.log("created row", row);
}

const addInputListener = (form) => {
  const input = form.querySelector('input');
  input.addEventListener('input', (e) => {
    form.querySelector('.btn-primary').disabled = !input.value.trim();
  })
};

const addCreateTaskListener = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    renderTodo(createTask(input.value));
    input.value = '';
    form.querySelector('.btn-primary').disabled = true;
  })
}

const renderTodoFromLocalStorage = (userName) => {
  if(getStorage(userName).length > 0) {
    getStorage(userName).forEach((el) => {
      renderTodo(createTask(el.text, el.id, el.status));
    });
  }
}

const authorizeUser = () => {
  const userName = getUserName();
  renderTodoFromLocalStorage(userName);
}

const getUserName = () => {
  return document.querySelector('#username').innerHTML;
};
 
 
export const control = {createTask, addEventListeners, addCreateTaskListener, addInputListener, authorizeUser};





import {render} from './render.js';
import {control} from './control.js';
import {createElement} from './createElement.js';
import {serviceStorage} from './serviceStorage.js';

const app = document.querySelector('.app-container');
app.classList.add('app-container', 'vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

const {addCreateTaskListener, addInputListener, authorizeUser} = control;

const {
  createContainer,
  createForm,
  createTable,
  createUserName,
} = createElement;

const init = () => {
  const renderUser = createUserName();
  const renderContainer = createContainer();
  const renderForm = createForm();
  const renderTable = createTable();
  app.append(renderUser, renderContainer, renderForm, renderTable);
  console.log('todo rendered');

  addCreateTaskListener(renderForm);
  addInputListener(renderForm);
  authorizeUser();
};

init();

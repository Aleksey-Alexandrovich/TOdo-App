
const app = document.querySelector('.app-container');
app.classList.add('app-container', 'vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

const renderTodo = (htmlElement) => {
  const list = document.querySelector('.table').querySelector('tbody');
  console.log(list);
  list.insertAdjacentElement('beforeend', htmlElement);


  renderNumbers();
};

const renderNumbers = () => {
  const list = document.querySelector('.table').querySelector('tbody');
  list.childNodes.forEach((node, i) => {
    console.log(node);
    node.querySelector("td").innerText = i + 1;
  })
}

export const render = {
  renderTodo,
  renderNumbers
};

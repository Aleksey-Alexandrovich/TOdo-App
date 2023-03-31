


const createContainer = () => {
  // Создаём контейнер
  const container = document.createElement('div');
	container.classList.add('d-flex', 'align-items-center', 'mb-3');
  return container;
};

//   // Создаём заголовок тудушки
//   const title = document.createElement('h3');
//   title.textContent = 'TOdo App';
//   return title;
// };

// const createButtons = () => {
//   // Создаём инпут
// 	const label = document.createElement('label');
// 	label.classList.add('form-group', 'me-3', 'mb-0');
//   const input = document.createElement('input');
//   input.classList.add('form-control');
//   input.placeholder = 'Ввести задачу';
// 	label.append(input);




//   // Создаём кнопку Сохранить
// 	 const saveButton = document.createElement('button');
// 	 saveButton.classList.add('btn', 'btn-primary', 'me-3');
// 	 saveButton.innerText = 'Сохранить';

// 	 	// Создаём кнопку Очистить
// 		 const clearButton = document.createElement('button');
// 		 clearButton.classList.add('btn', 'btn-warning');
// 		 clearButton.innerText = 'Очистить';
// 		 const buttonsContainer = createContainer();
// 		 buttonsContainer.append(label, saveButton, clearButton);
// 		 console.log(buttonsContainer);

//   return buttonsContainer;
// };

const createForm = () => {
	// Cоздаём форму
  const formContainer = createContainer();
  const form = document.createElement('form');
  formContainer.append(form);
  
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

	// Создаём инпут обёрнутый в лейбл
	const label = document.createElement('label');
	label.classList.add('form-group', 'me-3', 'mb-0');
  	const input = document.createElement('input');
  	input.classList.add('form-control');
  	input.placeholder = 'Ввести задачу';
	label.append(input);

  // Создаём кнопку Сохранить
	 const saveButton = document.createElement('button');
	 saveButton.classList.add('btn', 'btn-primary', 'me-3');
	 saveButton.type = 'submit';
	 saveButton.innerText = 'Сохранить';
	//  ставим disabled по умолчанию
	 saveButton.disabled = true;

	// Создаём кнопку Очистить
	const clearButton = document.createElement('button');
	clearButton.classList.add('btn', 'btn-warning');
	clearButton.type = 'reset';
	clearButton.innerText = 'Очистить';


  form.append(label, saveButton, clearButton);
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		console.log('submit');
	})

	
  return form;
};

const createRow = (id, task, isCompleted) => {
	const trTable = document.createElement('tr');
	const trClass = isCompleted ? "table-success" : "table-light";
	trTable.classList.add(trClass);
	const classForCompleted = isCompleted ? 'class="text-decoration-line-through"' : 'class="task"';

  	const rowTable = `
					<td>${id}</td>
					<td ${classForCompleted}>${task}</td>
					<td>${isCompleted ? "Выполнена" : "В процессе"}</td>
					<td>
						<button type="reset" class="btn btn-danger">Удалить</button>
						<button type="submit" class="btn btn-success">Завершить</button>
					</td>`;

 	 trTable.insertAdjacentHTML('afterbegin', rowTable);
 
	//  TODO: добавить слушатели


	return trTable;
}

const createTable = () => {
	// Создаём таблицу обернутую в тейбл врапер
	const tableWrapper = document.createElement('div');
	tableWrapper.classList.add('table-wrapper');
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
	tableWrapper.append(table);
	console.log(tableWrapper);

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
      'beforeend',
      `<tr>
				<th>№</th>
				<th>Задача</th>
				<th>Статус</th>
				<th>Действия</th>
			</tr>`,
  );
	table.append(thead);

  const tbody = document.createElement('tbody');
	table.append(tbody);

 	return tableWrapper;
		
};


const createUserName = () => {
  // Создаём Входной Юзер нейм при запросе prompt
  const userName = prompt('Как вас зовут?');
	const title = document.createElement('h3');
	title.innerText = 'Todo App ';
	

	const span = document.createElement('span');
	span.id = "username";
	span.innerText = userName || 'Незнакомец';
	 
//   if (userName === '' || userName === null) {
	
// 		title.innerText = 'Todo App Незнакомец';
// 		title.insertAdjacentHTML = `Todo App <span id='username'> Незнакомец </span>`;
// 	};

	title.append(span);

  return title;
};


export const createElement = {
	createRow,
	createContainer,
	createForm,
	createTable,
	createUserName,
};



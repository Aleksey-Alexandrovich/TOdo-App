
export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const addToStorage = (key, value) => {
  const newArray = [...getStorage(key), value];
  localStorage.setItem(key, JSON.stringify(newArray));
};

export const removeFromStorage = (key, id) => {
  let prevArray = getStorage(key);
  prevArray = prevArray.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(prevArray));
};

export const toggleStatusInStorage = (key, id) => {
  let prevArray = getStorage(key);
  let task = prevArray.findIndex((item) => item.id === id);
  prevArray[task].status = !prevArray[task].status;
  localStorage.setItem(key, JSON.stringify(prevArray));
};

const task = {
  id: 12e21312,
  title: 'Задача 1',
  status: true, //выполнена
}

export const serviceStorage = {
  getStorage,
  addToStorage,
  removeFromStorage,
  toggleStatusInStorage,
};

// export default {
//   getStorage,
//   setStorage: addToStorage,
//   removeStorage: removeFromStorage,
// };

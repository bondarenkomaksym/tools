const baseUrl = "https://5f56011532f56200168bccc5.mockapi.io/api/v1/tasks";

const mapTasks = (tasks) =>
  tasks.map(({ id, ...rest }) => ({ ...rest, id: id }));
//получаем все задачи из базы
export const getTasksList = () => {
  //fetch возвращает промис
  return (
    fetch(baseUrl)
      //на первом запросе получаем массив задач из базы
      .then((response) => response.json())
      .then((tasks) => mapTasks(tasks))
  );
};
//метод который принимает объект задач
export const createTask = (taskData) => {
  //через fetch создаём элемент методом POST
  return fetch(baseUrl, {
    method: "POST",
    //указываем вид данных
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    //указываем тело запроса - данные которые будем отправлять, приводим объект к строке
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
};

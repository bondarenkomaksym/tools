import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";

//метод, который определяет в каком месте элемента list-item произошёл клик
export const onListClick = (e) => {
  const checkboxItem = e.target.classList.contains("list-item__checkbox");
  const deleteItem = e.target.classList.contains("list-item__delete-btn");

  if (checkboxItem) {
    onToggleTask(e);
  }
  if (deleteItem) {
    onDeleteTask(e);
  }
};

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem("tasksList");
  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    endEvent: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = (e) => {
  const deletedElem = e.target.classList.contains("list-item__delete-btn");

  if (!deletedElem) {
    return;
  }

  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

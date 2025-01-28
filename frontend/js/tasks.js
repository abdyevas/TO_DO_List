const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearTasksButton = document.getElementById('clearTasksButton');

document.addEventListener('DOMContentLoaded', loadTasks);

addTaskButton.addEventListener('click', function () {
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const newTask = createTaskElement(taskValue);
    taskList.appendChild(newTask);
    saveTaskToLocalStorage(taskValue);
    taskInput.value = '';
  }
});

clearTasksButton.addEventListener('click', function () {
  taskList.innerHTML = '';
  localStorage.clear();
});

function createTaskElement(taskValue) {
  const newTask = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  const label = document.createElement('label');
  label.textContent = taskValue;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-task';

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      label.classList.add('completed');
    } else {
      label.classList.remove('completed');
    }
  });

  deleteButton.addEventListener('click', function () {
    taskList.removeChild(newTask);
    removeTaskFromLocalStorage(taskValue);
  });

  newTask.appendChild(checkbox);
  newTask.appendChild(label);
  newTask.appendChild(deleteButton);

  return newTask;
}

function saveTaskToLocalStorage(taskValue) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskValue);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskValue) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.filter(task => task !== taskValue);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const newTask = createTaskElement(task);
    taskList.appendChild(newTask);
  });
}

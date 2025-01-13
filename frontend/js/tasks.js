const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskValue = taskInput.value.trim();  
      
      if (taskValue) {
        const newTask = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task${taskList.children.length + 1}`;
        
        const label = document.createElement('label');
        label.setAttribute('for', checkbox.id);
        label.textContent = taskValue;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.borderRadius = '5px';
        deleteButton.style.padding = '5px 10px';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.cursor = 'pointer';
      
        deleteButton.addEventListener('click', function() {
          taskList.removeChild(newTask);
        });
        newTask.appendChild(checkbox);
        newTask.appendChild(label);
        newTask.appendChild(deleteButton);
        
        taskList.appendChild(newTask);
        
        taskInput.value = '';
      }
    });
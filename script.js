// script.js
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        
        // Create new task element
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        // Create task text element
        const taskTextNode = document.createElement('span');
        taskTextNode.textContent = taskText;

        // Create complete button
        taskTextNode.addEventListener('click', function() {
            taskTextNode.classList.toggle('complete');
        });

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        // Append task text and delete button to task item
        taskItem.appendChild(taskTextNode);
        taskItem.appendChild(deleteBtn);

        // Add task item to task list
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = '';
    }
}

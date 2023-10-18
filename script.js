function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var newTask = document.createElement('li');
        newTask.innerHTML = '<span>' + taskText + '</span><button class="delete" onclick="removeTask(this)">Delete</button>';
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function removeTask(button) {
    button.parentNode.remove();
}

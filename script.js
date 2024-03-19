function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <span class="delete-btn" onclick="deleteTask(this)">-</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        document.getElementById("error").style.display = "none";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function deleteTask(btn) {
    const li = btn.parentElement;
    li.remove();
}
const boardContainer = document.querySelector("#board-container");
const backlogContainer = document.querySelector("#backlog");
const completedContaier = document.querySelector("#completed");
const taskContainers = document.querySelectorAll(".task-container");

const tasksURL = "https://jsonplaceholder.typicode.com/todos?_limit=20";

class Task {
    constructor(taskTitle, taskStatus, taskID) {
        this.taskTitle = taskTitle;
        this.taskStatus = taskStatus;
        this.taskID = taskID;
    }
    render() {
        const taskEl = document.createElement("div");
        taskEl.draggable = true;
        taskEl.classList.add("task");
        const taskID = document.createElement("h4");
        taskID.textContent = this.taskID;
        const taskTitle = document.createElement("h3");
        taskTitle.textContent = this.taskTitle;
        taskEl.append(taskID, taskTitle);
        return taskEl;
    }
}

const fetchTasksData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    const dataTask = await fetchTasksData(tasksURL);

    dataTask.forEach((task) => {
        const taskInstance = new Task(task.title, task.completed, task.id);

        const taskElement = taskInstance.render();

        taskElement.addEventListener("dragstart", dragStart);

        if (taskInstance.taskStatus === false) {
            backlogContainer.append(taskElement);
        }
        if (taskInstance.taskStatus === true) {
            completedContaier.append(taskElement);
        }
    });
});

let taskDragged;
function dragStart(e) {
    taskDragged = e.target;
}
function dropTask(e) {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.append(taskDragged);
}

function dragOver(e) {
    e.preventDefault();
}

taskContainers.forEach((taskContainer) => {
    taskContainer.addEventListener("drop", dropTask);
    taskContainer.addEventListener("dragover", dragOver);
});

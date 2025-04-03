document.addEventListener("DOMContentLoaded", function () {
    const taskContainer = document.querySelector("#task-container");
    const formEl = document.querySelector("form");

    const addTask = function (e) {
        e.preventDefault();
        const taskValue = e.target.querySelector('input[name="task"]').value;
        if (!taskValue) {
            console.log("Please provide input");
            return;
        }
        const taskEl = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check-box");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskDescription.classList.add("line-through");
            } else {
                taskDescription.classList.remove("line-through");
            }
        });
        const taskDescription = document.createElement("span");
        taskDescription.innerText = taskValue;
        const editTaskBtn = document.createElement("button");
        editTaskBtn.classList.add("btn__edit");

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("btn__delete");

        taskContainer.append(taskEl);
        taskEl.append(checkbox, taskDescription, editTaskBtn, deleteTaskBtn);
        e.target.querySelector('input[name="task"]').value = "";
    };

    const removeTask = function (e) {
        if (e.target.classList.contains("btn__delete")) {
            e.target.closest("li").remove();
        }
    };

    const editTask = function (e) {
        if (e.target.classList.contains("btn__edit")) {
            const taskDescription = e.target.closest("li").querySelector("span");
            const editedTask = prompt(
                "Please enter your changes: ",
                taskDescription.innerText
            );

            if (editedTask !== null && editedTask.trim() !== "") {
                taskDescription.innerText = editedTask;
            }
        }
    };

    formEl.addEventListener("submit", addTask);

    taskContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn__delete")) {
            removeTask(e);
        }
        if (e.target.classList.contains("btn__edit")) {
            editTask(e);
        }
    });
});

const timeElement = document.getElementById ('time');
const currentTime = new Date();
timeElement.innerHTML = currentTime.toLocaleDateString();


const Btn_remove1 = document.getElementById("task_0")
const click1 = document.getElementById("task_1")
const NewList = document.getElementById("task_create")
function btn_remove() {
    Btn_remove1.classList.toggle('hidden')
    click1.classList.toggle('hidden')
}
function btn_create() {
    NewList.classList.toggle('hidden')
}

const btn_tag = document.getElementById("rotate_tag")
const Show_tag = document.getElementById("tag_value")


function tagValue(){
    btn_tag.classList.toggle("rotate-90")
    Show_tag.classList.toggle("hidden")
    
}

const actionBtn = document.querySelector('button.todo-create-btn');
const userTitle = document.querySelector('div.todo-creation input[name="todo-title"]');
const userDec = document.querySelector('div.todo-creation textarea[name="todo-desc"]');
const useChose_Tag = document.querySelectorAll('input[name="priority"]');
const colorValue = document.querySelector("color-value");
const inProgressToDoList = document.querySelector("section div.inProgress-todo-list");


actionBtn.addEventListener("click",createToDo);

const inProgressToDos = [];

function createToDo() {
    let selected ;
    useChose_Tag.forEach(element => {
        if (element.checked) {
            selected = element.value; 
        }
    });
    const inProgressToDo = {
        title: userTitle.value,
        desc: userDec.value,
        priority:selected, 
    }
    inProgressToDos.push(inProgressToDo);
    localStorage.setItem("inProgressToDos" , JSON.stringify(inProgressToDos))

    console.log("object : >> " ,inProgressToDos)
}
document.addEventListener("DOMContentLoaded", () => {
    const inProgressToDosProgress = JSON.parse(
        localStorage.getItem("inProgressToDos")
        );
        if (inProgressToDosProgress) {
            inProgressToDosProgress.forEach((todo) => {
                const toDoWrapper = document.createElement("div");
                let priorityClass = "";

            if (todo.priority === "high-priority") {
                priorityClass = "bg-red-600";
            } else if (todo.priority === "mid-priority") {
                priorityClass = "bg-yellow-300";
            } else if (todo.priority === "low-priority") {
                priorityClass = "bg-green-400";
            }
                toDoWrapper.innerHTML = `<div
                class="end-task flex gap-3 relative items-center p-2 ps-4 border border-gray-200 rounded dark:border-gray-700"
                >
                    <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div class="flex flex-col gap-1">
                    <label
                    for="bordered-checkbox-1"
                    class="w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >${todo.title}</label>
                    <div class=" opacity-30">${todo.desc}</div></div>
                    
                    <div
                    class="absolute ${priorityClass} rounded-lg w-1 h-10 right-0"
                    ></div>
                </div>`;
            inProgressToDoList.appendChild(toDoWrapper);
        });
    }
    
});
// import dataJson from '.../data.json';
// console.log(dataJson);

let data = [];
let work = document.querySelector(".work-todo-list-input");
work.value = "";
work.focus();


// selectors
const plusBtn = document.querySelector("#plus-button-todo");
// functions
function deleteItem(e){
    let iconTimes = this;
    let todoItem = iconTimes.parentNode;
    let todoItemContainer = todoItem.parentNode;

    todoItemContainer.removeChild(todoItem);
}

function addItemToDoListProccess(e){
    let todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item-container");

    let todoItem = document.createElement("div");
    todoItem.innerHTML = work.value;
    todoItem.classList.add("todo-item", "bg-dark", "text-white", "h6", "text-center","p-2","pr-4", "rounded-lg")
    
    todoItemContainer.appendChild(todoItem);

    let iconTimes = document.createElement("div");
    iconTimes.classList.add("todo-item-icons-container" , "float-right");
    iconTimes.style.cursor = "pointer";

    let iIcon = document.createElement("i");
    iIcon.classList.add("fas" , "fa-times" , "tofo-item-icon");

    iconTimes.appendChild(iIcon);
    todoItem.appendChild(iconTimes);

    let toDoListContainer = document.querySelector("#todo-list-container")
    toDoListContainer.appendChild(todoItemContainer);

    // store the data in jsonFile
    data.push(work.value);
    
    // clear the input
    work.value = "";
    work.focus();
    iconTimes.addEventListener("click" , deleteItem);    
}

function addItemToDoListProccessKey(e){
    if(e.key == "Enter"){
        addItemToDoListProccess();
    }
}
// Events
plusBtn.addEventListener("click" , addItemToDoListProccess);
work.addEventListener("keyup" , addItemToDoListProccessKey);

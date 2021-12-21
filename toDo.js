// import dataJson from '.../data.json';
// console.log(dataJson);

let data = [];
let work = document.querySelector(".work-todo-list-input");
work.value = "";
work.focus();


// selectors
const plusBtn = document.querySelector("#plus-button-todo");
console.log("message")
// functions

function addItemToDoListProccess(e){
    let todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item-container");

    let todoItem = document.createElement("div");
    todoItem.innerHTML = work.value;
    todoItem.classList.add("todo-item", "bg-dark", "text-white", "h6", "text-center","p-2", "rounded-lg")
    
    todoItemContainer.appendChild(todoItem);

    let toDoListContainer = document.querySelector("#todo-list-container")
    toDoListContainer.appendChild(todoItemContainer);

    // store the data in jsonFile
    data.push(work.value);
    
    // clear the input
    work.value = "";
    work.focus();
        
}

function addItemToDoListProccessKey(e){
    if(e.key == "Enter"){
        addItemToDoListProccess();
    }
}
// Events
plusBtn.addEventListener("click" , addItemToDoListProccess);
work.addEventListener("keyup" , addItemToDoListProccessKey);

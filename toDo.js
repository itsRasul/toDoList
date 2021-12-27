// import dataJson from '.../data.json';
// console.log(dataJson);

let data = [];
let work = document.querySelector(".work-todo-list-input");
work.value = "";
work.focus();


// selectors
const plusBtn = document.querySelector("#plus-button-todo");
const closeFullScreenEdit = document.querySelector(".close-fullscreen");
const doneItemContainer = document.querySelector(".done-item-container");

// functions

function closeFullScreenEditFun(e){
    let closeBtn = this;
    let fullPage = closeBtn.parentNode;

    fullPage.classList.replace("d-flex", "d-none")
}

function setEditInputToItsToDoItem(toDoItem , checkFullScreen){
    return function() {
        let input = checkFullScreen.previousElementSibling;
        let value = input.value;

        closeFullScreenEditFun.call(closeFullScreenEdit);
        toDoItem.firstChild.textContent = value;
    }
}

function addItemToDoneList(e){
    const iconCheck = this;
    const todoItem = iconCheck.parentNode.parentNode;
    const todoItemContainer = todoItem.parentNode;
    let value = todoItem.textContent;
    console.log(value)
    // add todoItem to Done list
    let doneItem = document.createElement('div');
    doneItem.classList.add("done-item", "bg-dark" , "text-white", "h6", "text-center", "p-2" , "rounded");
    doneItem.textContent = value;

    let donteItemIconContainer = document.createElement("div");
    donteItemIconContainer.classList.add("done-item-icons-container" ,"float-right")

    let doneIconTrash = document.createElement("i");
    doneIconTrash.classList.add("fas" , "fa-trash" , "done-icon-trash");

    donteItemIconContainer.appendChild(doneIconTrash);
    doneItem.appendChild(donteItemIconContainer);

    doneItemContainer.appendChild(doneItem);

    // delete the item from todo list
    todoItemContainer.removeChild(todoItem)
}

function editItem(e){
    editIcon = this;
    let toDoItem = editIcon.parentNode.parentNode;

    let fullscreenEditPage = document.querySelector("#edit-input-fullscreen-page-container");
    fullscreenEditPage.classList.replace("d-none", "d-flex");

    let firstValue = toDoItem.firstChild.textContent;
    
    let inputFullScreen = fullscreenEditPage.querySelector("input[name='edit']")
    inputFullScreen.value = firstValue;
    inputFullScreen.focus();
    const checkFullScreen = document.querySelector(".check-fullscreen");
    checkFullScreen.addEventListener("click" , setEditInputToItsToDoItem(toDoItem , checkFullScreen));
    
}

function deleteItem(e){
    let iconTimes = this;
    let todoItem = iconTimes.parentNode.parentNode;
    let todoItemContainer = todoItem.parentNode;

    todoItemContainer.removeChild(todoItem);
}

function addItemToDoListProccess(e){
    let todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item-container");

    let todoItem = document.createElement("div");
    todoItem.innerHTML = work.value;
    todoItem.classList.add("todo-item", "bg-dark", "text-white", "h6", "text-center","p-2", "rounded-lg")
    
    todoItemContainer.appendChild(todoItem);
    // iconTimes => icon-container
    let iconTimes = document.createElement("div");
    iconTimes.classList.add("todo-item-icons-container" , "float-right");
    iconTimes.style.cursor = "pointer";
    // iIcon => deleteIcon(i)
    let iIcon = document.createElement("i");
    iIcon.classList.add("fas" , "fa-times" , "tofo-item-icon" , "mr-1");

    let editIcon = document.createElement("i");
    editIcon.classList.add("far" , "fa-edit" , "mr-1" , "edit-icon");

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fas" , "fa-check" , "todo-icon-check" );

    iconTimes.appendChild(editIcon);
    iconTimes.appendChild(iIcon);
    iconTimes.appendChild(checkIcon)
    todoItem.appendChild(iconTimes);

    let toDoListContainer = document.querySelector("#todo-list-container")
    toDoListContainer.appendChild(todoItemContainer);

    // store the data in jsonFile
    data.push(work.value);
    
    // clear the input
    work.value = "";
    work.focus();

    //Events about icons
    iIcon.addEventListener("click" , deleteItem);
    editIcon.addEventListener("click" , editItem);
    checkIcon.addEventListener("click" , addItemToDoneList);
}

function addItemToDoListProccessKey(e){
    if(e.key == "Enter"){
        addItemToDoListProccess();
    } 
}

function limitChar(e){
    if (work.value.length >= 30) {
        e.preventDefault();
    }
}
// Events
plusBtn.addEventListener("click" , addItemToDoListProccess);
work.addEventListener("keyup" , addItemToDoListProccessKey);
work.addEventListener("keypress" , limitChar);
closeFullScreenEdit.addEventListener("click" , closeFullScreenEditFun);

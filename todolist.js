const todoForm = document.querySelector(".js-todolist");
const todoInput = todoForm.querySelector("Input");
const todoUl = todoForm.querySelector("ul");

const TODOS_LS = "currentItems";
const todoArray=[];


function saveTodo(){
     localStorage.setItem(TODOS_LS, JSON.stringify(todoArray));
}


function printTodos(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const todoID = Date.now();
    delbtn.innerHTML = "☹";
    span.innerHTML= text;

 //   delbtn.addEventListener("click", deletlist);

    li.appendChild(span);
    li.appendChild(delbtn);

    li.id = todoID;

    todoUl.appendChild(li);

    const todoObj ={
        text :text,
        Id : todoID
    }

    todoArray.push(todoObj);
    saveTodo();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    printTodos(currentValue);
    todoInput.value = "";
}


function loadItems(){
    const toDoItems = localStorage.getItem(TODOS_LS)
    if ( toDoItems !== null) {
        const parsedToDos = JSON.parse(toDoItems);
        parsedToDos.forEach(function(todo){
        printTodos(todo.text);
        });
    } 
}

function init(){
    loadItems();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
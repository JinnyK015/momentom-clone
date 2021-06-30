const todoForm= document.querySelector('.todoForm');
const todoInput= todoForm.querySelector('input');
const penUl= document.getElementById('pending');
const finUl= document.getElementById('finished');

const PENDING_LS='pendingtodo';
const FINISHED_LS='finishedtodo';

let pendingItem =[];
let finishedItem=[];

function savePending(){
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingItem));
}
function saveFinished(){
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedItem));
}

function deletePending(event){
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
    pendingItem = pendingItem.filter((toDo) => toDo.id !== parseInt(li.id));
    savePending();
}   

function deleteFinished(event){
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
    finishedItem = finishedItem.filter((toDo) => toDo.id !== parseInt(li.id));
    saveFinished();
}   

function moveFinished(event){
    const div = event.target.parentElement;
    const li = div.parentElement;
 
    const liObj={
        text:li.querySelector("span").innerHTML,
        id: Date.now()
    };

    finishedItem.push(liObj);    
    printFin(liObj);
    saveFinished(liObj);

    penUl.removeChild(li);
    pendingItem = pendingItem.filter((toDo) => toDo.id !== parseInt(li.id));
    savePending(pendingItem);
}

function movePending(event){
    const div = event.target.parentElement;
    const li = div.parentElement;
  

    const liObj={
        text:li.querySelector("span").innerHTML,
        id: Date.now()
    };

    pendingItem.push(liObj);    
    printPen(liObj);
    savePending(liObj);

    finUl.removeChild(li);
    finishedItem = finishedItem.filter((toDo) => toDo.id !== parseInt(li.id));
    saveFinished(finishedItem);
}



function printFin(newItem){
    li = document.createElement('li');
    li.id =newItem.id;

    btnBox = document.createElement('div');
    penbtn = document.createElement('button');
    penbtn.innerHTML = 'Undo';
    penbtn.addEventListener('click', movePending);

    delbtn = document.createElement('button');
    delbtn.innerHTML = 'Del';
    delbtn.addEventListener('click', deleteFinished);

    span = document.createElement('span');
 

    span.innerHTML=newItem.text;

    btnBox.appendChild(penbtn);
    btnBox.appendChild(delbtn);

    li.appendChild(span);
    li.appendChild(btnBox)
    
    li.classList.add('todo__item');

    finUl.appendChild(li);
}



function printPen(newItem){
    li = document.createElement('li');
    li.id =newItem.id;

    btnBox = document.createElement('div');

    finbtn = document.createElement('button');
    finbtn.innerHTML = 'Done';
    finbtn.addEventListener('click', moveFinished);

    delbtn = document.createElement('button');
    delbtn.innerHTML = 'Del';
    delbtn.addEventListener('click', deletePending);

    span = document.createElement('span');
 

    span.innerHTML=newItem.text;

    btnBox.appendChild(finbtn);
    btnBox.appendChild(delbtn);

    li.appendChild(span);
    li.appendChild(btnBox);
  
    li.classList.add('todo__item');

    penUl.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const newItem =todoInput.value;
    todoInput.value="";
    const liObj={
        text: newItem,
        id: Date.now()
    };
    pendingItem.push(liObj);    
    printPen(liObj);
    savePending(liObj);
}

const pendingtodo = localStorage.getItem(PENDING_LS);
const finishedtodo = localStorage.getItem(FINISHED_LS);

if(pendingtodo !== null){
    const parsedToDos = JSON.parse(pendingtodo);
    pendingItem = parsedToDos;
     parsedToDos.forEach(printPen);
}

if(finishedtodo !== null){
    const parsedFinshed = JSON.parse(finishedtodo);
    finishedItem = parsedFinshed;
    parsedFinshed.forEach(printFin);
}

todoForm.addEventListener('submit', handleSubmit);
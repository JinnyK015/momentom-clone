const todoForm= document.querySelector('.todoForm');
const todoInput= todoForm.querySelector('input');
const penUl= document.getElementById('pending');

const PENDING_LS= 'localPen';
const localpending=[];

function deletePending(event){
    const li = event.target.parentElement;
    li.remove();
}   


function printtodo(text){
    li = document.createElement('li');
    delbtn = document.createElement('button');
    span =document.createElement('span');

    delbtn.innerHTML = 'Del';
    delbtn.addEventListener('click', deletePending);
    span.innerHTML=text;
    

    li.appendChild(span);
    li.appendChild(delbtn);


    penUl.appendChild(li);
            
    let dataid = new Date();
    let newID= dataid++;

    const liObj={
        text: text,
        id: newID
    }
    console.log(liObj);
   
}

function handleSubmit(event){
    event.preventDefault();
    printtodo(todoInput.value);
    todoInput.value="";
}



todoForm.addEventListener('submit', handleSubmit);
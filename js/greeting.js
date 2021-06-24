
const greetForm = document.querySelector(".js-greetingForm");
const greetingInput = document.querySelector("input");
const greetingTitle = document.querySelector(".js-greeting");

const NAME_LS = "currentUser";
const SHOW_CLASSNAME = "showing";

function saveName(text){
    localStorage.setItem(NAME_LS, text);
}

function paintGreeting(text){
    greetForm.classList.remove(SHOW_CLASSNAME);
    greetingTitle.classList.add(SHOW_CLASSNAME);
    const date = new Date();
    const hour = date.getHours();
    if( hour > 5 && hour < 11){
        greetingTitle.innerHTML=`Good Morning! ${text}`;
    } else if( hour >= 12 && hour <= 17){
        greetingTitle.innerHTML=`Good Afternoon? ${text}`;
    } else{
        greetingTitle.innerHTML=`Good evening? ${text}`;
    }
    // for 혹은  스위치등으로 5개 연달아서.
    // 굿모닝 디쥬해브 나이스 런치? 굿이브닝 굿나잇 두유해브어 컨설? 
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}



function askName(){
    greetForm.classList.add(SHOW_CLASSNAME);
    greetForm.addEventListener("submit", handleSubmit);
    
}

function loadName(){
    const currentUser = localStorage.getItem(NAME_LS);

    if (currentUser !== null) {
        paintGreeting(currentUser);
    } else{
        askName();
    }
}




function init(){
        loadName();
}

init();
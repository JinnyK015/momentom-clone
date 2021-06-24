// Clock part

const clockForm = document.querySelector(".js-clock"),
     clockTitle = clockForm.querySelector("h1");


function paintClock(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clockTitle.innerHTML = 
    `${hour < 10 ? `0${hour}`: hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}


    paintClock();
    setInterval(paintClock, 1000);




const screen = document.querySelector("body");




const ORIGIN_COLOR = "rgb(4, 207, 92)";
const MIDDLE_COLOR =  "rgb(26, 110, 228)";
const LARGE_COLOR = "rgb(244, 184, 149)";



const masterhandle = {

    handleresize : function () {
       const currentScreenSize = window.innerWidth;
       if ( 700 >= currentScreenSize){
           screen.style.backgroundColor = ORIGIN_COLOR;
       }
       else if (currentScreenSize >= 700 && 1200 >= currentScreenSize){
           screen.style.backgroundColor = MIDDLE_COLOR;
       } else {
           screen.style.backgroundColor = LARGE_COLOR;
       }
    }
}



function init () {
    screen.style.backgroundColor = ORIGIN_COLOR;
    window.addEventListener("resize", masterhandle.handleresize);
};

init(); 
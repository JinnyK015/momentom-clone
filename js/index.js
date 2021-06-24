//배경색 선택해서 바꿀수있는 창 만들기


const screen = document.querySelector("body");



const ORIGIN_COLOR = " #e85697";
const ORI_IMG= "linear-gradient(0deg, #e85697 0%, #a574d1 50%, #2B86C5 100%)";

const MIDDLE_COLOR =  "#4158D0";
const MID_IMG = "linear-gradient(45deg, #4158D0 0%, #C850C0 30%, #FFCC70 66%, #ffffff 100%)";

const LARGE_COLOR = "rgb(244, 184, 149)";
const LRG_IMG = "linear-gradient(to right, #fd868c 0%, #deacff 50%, #fedd8b 100%)";

const masterhandle = {

    handleresize : function () {
       const currentScreenSize = window.innerWidth;
       if ( 700 >= currentScreenSize){
           screen.style.backgroundColor = ORIGIN_COLOR;
           screen.style.backgroundImage = ORI_IMG;
       }
       else if (currentScreenSize >= 700 && 1200 >= currentScreenSize){
           screen.style.backgroundColor = MIDDLE_COLOR;
           screen.style.backgroundImage = MID_IMG;
       } else {
           screen.style.backgroundColor = LARGE_COLOR;
           screen.style.backgroundImage =LRG_IMG;
       }
    }
}




    window.addEventListener("resize", masterhandle.handleresize);




const API_KEY ="8dfce592a9300e93376f0feb69bf07d6";
const city = document.querySelector('.weather__container span:first-child');
const weather= document.querySelector('.weather__container span:last-child');

function geoWorking(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat, long);
   
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText=`${data.name}, ${data.sys.country}`
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}℃`;
})
}

function geoBroken(){
 alret("Sorry, I can't find you...😥")
}

navigator.geolocation.getCurrentPosition(geoWorking, geoBroken);
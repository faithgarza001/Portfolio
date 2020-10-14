/**JavaScript has available built-in browser objects and some external open source libraries to interact with API's.
//All the possible ways of making an API call in JavaScript
 1)XMLHttpRequest

 2) fetch

 3) Axios

 4) jQuery*/



//XMLHttpRequest- Before ES6 the standard way to make HTTP request was using XMLHttpRequest. The XMLHttpRequest is built within the browser and allows to be made use in HTTP request in JavaScript since most browsers have javascript embedded. This method has been deprecated (outdated) once the introduction of fetch within ES 6 arrival.



// let request = new XMLHttpRequest();
// request.open('GET',`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`+DARKSKY_SECRET+`/37.8267,-122.4233`);
// request.send();
// request.onload = () => {
//     if(request.status == 200){
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(` error ${request.status} ${request.statusText}`)
//     }
// }


//FETCH-allows to make HTTP request similarly to XMLHttpRequest but with straightforward interface by using promises. Supported by most modern browsers, Fetch can be applied in two ways.



//Method 1
// fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+DARKSKY_SECRET+"/42.3601,-71.0589")
//     .then((response) => {
//         return response.json();
//     })
//     .then((myJson) => {
//         console.log(myJson);
//     }).catch((error) => {
//     console.log(error)
// });


// //USING ASYNC AND AWAIT-The disadvantage is the error handling within the fetch is not presented.
// async function getWeather(){
//     let response = await fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+DARKSKY_SECRET+"/42.3601,-71.0589");
//     let data = await  response.json()
//     return data;
// }
//
// getWeather().then(data => console.log(data));


//THE NEXT WAY TO MAKE AN API REQUEST IS WITH AXIOS
//Axios- an HTTP request open-source library, contains many features, functionality within browsers and Node.js, promise based but can be used vanilla js and React, Angular and other advanced frameworks. Axios automatically returns the JSON, performs better error handling as well a plethora of supported browsers





// axios.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+DARKSKY_SECRET+"/42.3601,-71.0589")
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error =>console.error(error));



//jQuery
// $(document).ready(function() {
//
//     let proxy = 'https://cors-anywhere.herokuapp.com/';
//     let apiLinkDS = "https://api.darksky.net/forecast/"+ DARKSKY_SECRET +"/37.8267,-122.4233";
//
//     $.ajax({
//         url: proxy + apiLinkDS,
//         success:function(data) { console.log(data);}
//     });
//
// });
//
import (openWeatherMap)
/**THIS IS THE END OF API EXAMPLE BELOW BEGINS THE WEATHER APP**/

const api = {
    key: openWeatherMap,
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);

    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {


    let city = document.querySelector('.location .city');

    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


/**Clouds animation begin below
 * Defining our variables
 world and viewport are DOM elements,
 worldXAngle and worldYAngle are floats that hold the world rotations,
 d is an int that defines the distance of the world from the camera*/

let world = document.getElementById('world'),
    viewport = document.getElementById('viewport'),
    worldXAngle = 0,
    worldYAngle = 0,
    d= 0;


/*Event listener to transform mouse position into angles
from -180 to 180 degrees, both vertically and horizontally
*/
window.addEventListener( 'mousemove', function( e ) {

    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
    updateView();

} );

/*
  Changes the transform property of world to be
  translated in the Z axis by d pixels,
  rotated in the X axis by worldXAngle degrees and
  rotated in the Y axis by worldYAngle degrees.
*/
function updateView() {

    world.style.transform = 'translateZ( ' + d + 'px ) \
  rotateX( ' + worldXAngle + 'deg) \
  rotateY( ' + worldYAngle + 'deg)';

}


/*
  objects is an array of cloud bases
  layers is an array of cloud layers
*/
var objects = [],
    layers = [];

/*
  Clears the DOM of previous clouds bases
  and generates a new set of cloud bases
*/
function generate() {

    objects = [];
    layers = [];

    if ( world.hasChildNodes() ) {
        while ( world.childNodes.length >= 1 ) {
            world.removeChild( world.firstChild );
        }
    }

    for( var j = 0; j < 5; j++ ) {
        objects.push( createCloud() );
    }

}

/*
  Creates a single cloud base: a div in world
  that is translated randomly into world space.
  Each axis goes from -256 to 256 pixels.
*/
function createCloud() {

    var div = document.createElement( 'div'  );
    div.className = 'cloudBase';
    var t = 'translateX( ' + random_x + 'px ) \
    translateY( ' + random_y + 'px ) \
    translateZ( ' + random_z + 'px )';
    div.style.transform = t;
    world.appendChild( div );

    return div;

}


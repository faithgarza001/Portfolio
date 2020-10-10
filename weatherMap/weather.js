$(document).ready(function() {

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiLinkDS = "https://api.darksky.net/forecast/"+ DARKSKY_SECRET +"/37.8267,-122.4233";

    $.ajax({
        url: proxy + apiLinkDS,
        success:function(data) { console.log(data);}
    });

});


const container = document.getElementById('root');

let request = new XMLHttpRequest()
request.open('Get','https://api.darksky.net/forecast/'+ DARKSKY_SECRET +'/37.8267,-122.4233' )


const wDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const wMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const iconValue = {
    CLEARDAY: 'clear-day',
    CLEARNIGHT: 'clear-night',
    RAIN: 'rain',
    SNOW: 'snow',
    SLEET: 'sleet',
    WIND: 'wind',
    FOG: 'fog',
    CLOUDY: 'cloudy',
    PARTLY_CLOUDY_DAY: 'partly-cloudy-day',
    PARTLY_CLOUDY_NIGHT: 'partly-cloudy-night'
}

//fetching the weather
function fetchWeatherReport(DARKSKY_SECRET,latitude,longitude){

    let proxy = 'https://cors-anywhere.herokuapp.com/';

    let apiLinkDS = "https://api.darksky.net/forecast/"+ DARKSKY_SECRET +"/37.8267,-122.4233";

    fetch(apiLinkDS)
        .then(response => {
            return response.json();
        })
        .then(data => {

            //work with json data, you can see these objects in JSON format in console in browser, creating our own variables and assigning the JSON data object to our variables.
            let resultsHTML = "";
            let tableHTML = "";
            let summary = data.currently.summary;
            let temperature = data.currently.temperature;
            let icon = data.currently.icon;
            let precipitationProbability = data.currently.precipitationProbability;
            let humidity = data.currently.humidity;
            let windSpeed = data.currently.windSpeed;
            let timeS = new Date(data.currently.time * 1000);
            let forecastDate = `${wDay[timeS.getDay()]} ${wMonth[timeS.getMonth()]} ${timeS.getDate()}`


            //Setting values for the current conditions
            //using document get element by ID to place the location on front end layout
            document.getElementById('dayTime').innerHTML = forecastDate;
            document.getElementById('summary').innerHTML = summary;
            document.getElementById('currentTemp').innerHTML = `${Math.round(temperature)}&deg`;
            document.getElementById('WeatherIcon').src = getIcon(icon);
            document.getElementById('precipitation').innerHTML = `Precipitation ${precipitationProbability*100}%`;
            document.getElementById('humidity').innerHTML = `Humidity ${Math.round(windSpeed)}%`;
            document.getElementById('wind').innerHTML = `Winds ${Math.round(windSpeed)}mph`;

            //generate tabs

            document.getElementById('dailyForecast').innerHTML = renderWeeklyForecast(data.daily);
            document.getElementById('weeklyForecast').innerHTML = renderDailyForecast(data.hourly);
        })
        .catch(err => {
            //On catch of error do the below
            throw (`Sorry an error has occurred please check your connection. ${err}`);
        })
}


function fetchLocation(DARKSKY_SECRET, latitude, longitude){

    //





}
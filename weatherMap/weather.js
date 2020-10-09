$(document).ready(function() {

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiLinkDS = "https://api.darksky.net/forecast/"+ DARKSKY_SECRET +"/37.8267,-122.4233";

    $.ajax({
        url: proxy + apiLinkDS,
        success:function(data) { console.log(data);}
    });

});

//create a request
let request = new XMLHttpRequest();

//open connection using get
request.open('GET','https://api.darksky.net/forecast/DARKskyKEy/37.8267,-122.4233',true)
request.onload = function (){

    console.log(data)
}

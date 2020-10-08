$(document).ready(function() {

    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var apiLinkDS = "https://api.darksky.net/forecast/"+ DARKSKY_SECRET +"/37.8267,-122.4233";

    $.ajax({
        url: proxy + apiLinkDS,
        success:function(data) { console.log(data);}
    });

});
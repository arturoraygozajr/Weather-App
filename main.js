'use strict'

$(document).ready(init);

function init() {
	$('#getWeather').click(infoGrab);
	console.log("im working");


  $.ajax({
    url: 'http://api.wunderground.com/api/fb2e463b5ef06946/geolookup/q/94107.json',
    method: 'GET',
    success: function(data){
    	currentZip(data);
    },
    error: function(err){
      console.log('error:', err);
    }
  });
}

function currentZip(data){
var zipCode = data.location.zip;
$('#zipCode').val(zipCode);
infoGrab();


}


function infoGrab(){
var zipCode = $('#zipCode').val()
$.ajax({
    url: 'http://api.wunderground.com/api/fb2e463b5ef06946/conditions/q/'+zipCode+'.json',
    method: 'GET',
    success: function(data){
    	weather(data);
    	console.log('data:', data.current_observation.wind_string)
    },
    error: function(err){
      console.log('error:', err);
    }
  });
}


function weather(data){
	console.log("me", data);
	console.log(data.current_observation.temp_f);
	var temp = data.current_observation.temp_f;
	var weather = data.current_observation.weather;
	var windSt = data.current_observation.wind_string;
	$(".holder").empty();
	var $temp = $('<div>').text(temp).addClass("holder");
	var $weather = $('<div>').text(weather).addClass("holder");
	var $windSt = $('<div>').text(windSt).addClass("holder");
	$('#temp').append($temp), $('#weather').append($weather), $('#windSt').append($windSt);
}
//attr("src".)
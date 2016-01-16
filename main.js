'use strict'

$(document).ready(init);

function init() {
	$('#getWeather').click(infoGrab);
	console.log("im working");


//   $.ajax({
//     url: 'http://api.wunderground.com/api/fb2e463b5ef06946/geolookup/q/94107.json',
//     method: 'GET',
//     error: function(err){
//       console.log('error:', err);
//     }
//   });
}

function infoGrab(){
var zipCode = $('#zipCode').val()
$.ajax({
    url: 'http://api.wunderground.com/api/fb2e463b5ef06946/conditions/q/'+zipCode+'.json',
    method: 'GET',
    success: function(data){
    	weather(data)
    },
    error: function(err){
      console.log('error:', err);
    }
  });
}

var temp;

function weather(data){
	console.log("me", data);
	console.log(data.current_observation.temp_f);
	temp = data.current_observation.temp_f;
	$(".holder").empty();
	var $temp = $('<div>').text(temp).addClass("holder");
	$('#temp').append($temp);
}

//attr("src".)
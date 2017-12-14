// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  $.ajax({
    method: 'GET',

    // The URL for the request
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',

    // The type of data we want back
    dataType: 'json',

    // Code to run if the request succeeds; the JSON
    // response is passed to the function as an argument.
    success: onSuccess
  })

	function onSuccess(responseData, status){
	console.log(status);
 
		for (var i = 0; i < responseData.features.length; i++) {
			$('#info').append('<p>' + responseData.features[i].properties.title +'</p>');
			}
		}

	function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}		
});

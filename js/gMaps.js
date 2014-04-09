App

.directive('gMaps',function(){
	return function(scope, element, attrs){
		var mapOptions = {
		  center: new google.maps.LatLng(46.361975,48.031282),
		  zoom: 8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
          sensor: true
		};
		var map = new google.maps.Map(element[0],
			mapOptions);
	}
	  //google.maps.event.addDomListener(window, 'load', initialize);
})

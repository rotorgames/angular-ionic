angular.module('contactsApp', ['ionic'])
.controller('MainCtrl', function($scope) {
	var items = [];
	for(var i = 0; i < 100; i+= 3){
		items.push({name:'MAN-'+i,color:'green'});
		items.push({name:'MAN-'+(i+1),color:'red'});
		items.push({name:'MAN-'+(i+2),color:'yellow'});
	}
	$scope.items = items;
});


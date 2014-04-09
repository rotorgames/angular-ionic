App.directive('iScroll', function() {
	return function(scope, element, attrs) { 
		scope.kots = ['kot','pes','dog']
		element.bind('scroll', function(event) {
			
        });
	}
});
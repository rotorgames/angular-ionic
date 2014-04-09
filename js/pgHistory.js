angular.module('pgHistory', ['ionic'])

.run(function($state, $rootScope, $ionicViewService){
	$rootScope.$on('$viewHistory.historyChange',function(){ 
		if($state.current.hIndex && $rootScope.$viewHistory.backView){
			$ionicViewService.clearHistory();
			navigator.app.clearHistory();
		}
	})
})

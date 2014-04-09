App = angular.module('App', ['ionic','pgHistory'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('signin', {
      url: "/sign-in",
	  hIndex:true,
      templateUrl: "sign-in.html",
      controller: 'SignInCtrl'
    })
    .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "forgot-password.html"
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
	  hIndex:true,
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "facts.html",
		  controller: 'FactsTabCtrl'
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "facts2.html",
		  controller: 'FactsTabCtrl'
        }
      }
    })
    .state('tabs.map', {
      url: "/map",
	  hIndex:true,
      views: {
        'map-tab': {
          templateUrl: "map.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "contact.html"
        }
      }
    });

	//$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise("/sign-in");

})

.controller('SignInCtrl', function($scope, $state) {
	
	$scope.leftButtons = function(user){
        alert(user.username+" "+user.password)
    }
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.home');
  };
  
})

.controller('HomeTabCtrl', function($scope) {
	
  console.log('HomeTabCtrl');
})

.controller('FactsTabCtrl', function($scope) {
	//$scope.on('$onScroll',function(){console.log('good')})
  $scope.kot = function(){console.log('nekot')};
});
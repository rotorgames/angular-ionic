angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: "/sign-in",
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
          templateUrl: "facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
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


   $urlRouterProvider.otherwise("/sign-in");

})

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.home');
  };
  
})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
(function(){
	var scripts = document.querySelectorAll('script');
	var head = document.querySelector('head');
	for(var i = 0; i < scripts.length; i++){
		var attribute = scripts[i].getAttribute('data-main');
		if(attribute){
			node = document.createElement('script');
			//node.type = 'text/javascript';
			//node.charset = 'utf-8';
			//node.async = true;
			node.src = attribute;
			head.appendChild(node);
		}
	}
})();
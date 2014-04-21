angular.module('freeInfiniteScroll', [])

.directive('freeInfiniteScroll', function($ionicScrollDelegate, $compile, $ionicBind) {
	return {
		restrict: 'E',
		link:function(scope, element, attrs) {
			console.log('ds');
			
			$ionicBind(scope, attrs, {
				data:'=',
				length:'@'
			});
			
			scope.length = parseInt(scope.length);
			
			at = attrs;
			
			el = element;
			
			sc = scope;
			
			children = angular.element(element.children()[0]);
			
			children.attr('ng-repeat','kot in kott');
			
			htm = children.clone();
			
			children.remove();
			
			//element.html('<div style="text-align:center;" class="icon button-full button-icon ion-loading-c"></div>')
			
			element.ready(function(){
				$compile(htm)(scope);
				element.append(htm);
				scope.$digest();
			});
			
			/*scop = scope;
		bac = $ionicBackdrop;
		scr = $ionicScrollDelegate;
			var list = [],
				height = 0,
				listLength = parseInt(attrs.length),
				data = scope[attrs.data];
				
			console.log(listLength);
			
			for(var i = 0; i < listLength; i++){
				list.push({i:i});
			}
			
			el = element;
			
			scope.kots = list;
		
			element.ready(function(){
				childrens = element.children();
				for(var i = 0; i < childrens.length; i++){
					children = childrens[i];
					children.style['-webkit-transform'] = "translate3d(0px, "+height+"px, 0px)";
					height += children.getBoundingClientRect().height;
				}
			});
			
			element.on('iScrollLoad', function(){
				console.log(data.length);
			});
			element.on('scroll', function(event) {
				//list.push({i:event.detail.scrollTop});
				//scope.$digest();
				//var ch = childrens[childrens.length-1];
				//ch.style['-webkit-transform'] = "translate3d(0px, "+height+"px, 0px)";
				//height += ch.getBoundingClientRect().height;
			});
		*/}
	}
	
});
angular.module('Dashboard')
	.directive('ccHistory', ['$window', function ($window) {

		function link (scope, element, attrs) {
			var timeout;

			function getWidth (){
				console.log('getWidth');
				scope.width = element.parent()[0].clientWidth - 150;
			}
			getWidth();

			// Perhaps this should be throttled a bit?
			angular.element($window).bind('resize', getWidth);
			scope.$on('sidebarToggle', function () { 
				if (timeout) {
					$window.cancelTimeout(timeout);
				}
				// Hack: transitions take 0.4 seconds. Yuk.
				$window.setTimeout(function () {
					scope.$apply(getWidth);
				}, 400)
			});
		}

		return {
			restrict: 'E',
			link: link,
			scope: {
				servers: '=servers'
			},
			templateUrl: 'history.html'
		}
	}]);
angular
	.module('Dashboard', ['ui.bootstrap', 'ui.router', 'ngCookies'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	    	.state('index', { url: '/', templateUrl: 'farmReport.html', controller: 'FarmReportCtrl' });
	}]);
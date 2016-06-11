(function () {
	'use strict';

	var myApp = angular.module('myApp', [
		'ui.router',
		'myApp.view1',
		'myApp.view2',
		'myApp.version',
		'myApp.products'
	]);

	function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/view1');
	}

	myApp.config(routeConfig);
	routeConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
}());
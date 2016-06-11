(function () {
	'use strict';

	var myApp = angular.module('myApp.view1', [
		'ui.router'
	]);

	function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider.state('view1', {
			url: '/view1',
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl',
			controllerAs: 'ctrl'
		});

	}

	function View1Ctrl() {
		var vm = this;

	}

	myApp.config(routeConfig);
	myApp.controller('View1Ctrl', View1Ctrl);
	routeConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
}());
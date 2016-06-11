(function () {
	'use strict';

	var myApp = angular.module('myApp.view2', [
		'ui.router'
	]);

	function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider.state('view2', {
			url: '/view2',
			templateUrl: 'view2/view2.html',
			controller: 'View2Ctrl',
			controllerAs: 'ctrl'
		});

	}

	function View2Ctrl() {
		var vm = this;

	}

	myApp.config(routeConfig);
	myApp.controller('View2Ctrl', View2Ctrl);
	routeConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
}());
(function () {
	'use strict';

	var myApp = angular.module('myApp.view3', [
		'ui.router'
	]);

	function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
		$stateProvider.state('view3', {
			url: '/view3',
			templateUrl: 'view3/view3.html',
			controller: 'View3Ctrl',
			controllerAs: 'ctrl'
		});

	}

	function View3Ctrl($scope, view3Service) {
		var vm = this;
		vm.name = view3Service.getViewName();
	}

	myApp.config(routeConfig);
	myApp.controller('View3Ctrl', View3Ctrl);
	routeConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
	View3Ctrl.$inject = ['$scope', 'view3Service'];
}());
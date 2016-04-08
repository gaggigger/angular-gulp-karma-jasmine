'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/view3', {
		templateUrl: 'view3/view3.html',
		controller: 'View3Ctrl'
	});
}])

.controller('View3Ctrl', ['$scope', 'view3Service',
	function ($scope, view3Service) {
		$scope.name =view3Service.getViewName();

	}
]);

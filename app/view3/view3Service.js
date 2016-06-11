(function () {
	'use strict';

	var myApp = angular.module('myApp.view3');

	function view3Service($http) {
		return {
			page: null,
			description_error: null,

			getViewName: function () {
				return 'My name';
			},
			getViewPromise: function () {
				return $http.get('/app/datas/view3.json')
					.success(function (data) {
					return response.data;
				});
			}
		};
	}

	myApp.factory('view3Service', view3Service);
	view3Service.$inject = ['$http'];
}());
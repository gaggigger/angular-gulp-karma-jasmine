angular.module('myApp.view3')
	.factory("view3Service", ['$http',
		function($http){
		"use strict";
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
	]);

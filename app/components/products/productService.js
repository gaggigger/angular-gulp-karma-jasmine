(function () {
	'use strict';

	var myApp = angular.module('myApp.products');

	function ProductService() {
		return function getProducts() {
			return [{ name: 'Chai' }, { name: 'Syrup' }];
		};
	}
	myApp.factory('ProductService', ProductService);
}());
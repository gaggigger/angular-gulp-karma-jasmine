(function () {
	'use strict';

	var myApp = angular.module('myApp.products');

	function ProductService() {
		return {
			getProducts: function () {
				return [{ name: 'Chai' }, { name: 'Syrup' }];
			}
		};
	}
	myApp.factory('ProductService', ProductService);
}());
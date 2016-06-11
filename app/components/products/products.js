(function () {
	'use strict';

	var myApp = angular.module('myApp.products', []);


	function productsCtrl(ProductService) {
		var vm = this;
		vm.products = ProductService.getProducts();

	}

	myApp.controller('productsCtrl', productsCtrl);
	productsCtrl.$inject = ['ProductService'];
}());
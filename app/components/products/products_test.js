describe('products tests', function () {

	beforeEach(module('myApp.products'));
	var $scope;
	var $controller;

	describe('no-mocking of service', function () {
		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_;
			$scope = {};
		}));

		it('should return products list on load', function () {
			var vm = $controller('productsCtrl', {
				$scope: $scope
			});
			expect(vm.products).toEqual([{
				name: 'Chai'
			}, {
				name: 'Syrup'
			}]);
		});
	});
	describe('mock.module mocking of service', function () {
		beforeEach(angular.mock.module(function ($provide) {
			$provide.service('ProductService', function mockService() {
				return function mockGetProducts() {
					return [{
						name: 'Tea'
							}, {
						name: 'Syrup'
							}];
				}
			});
		}));
		// Note that ordering is important! Controller service must be registered after mocks.
		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_;
			$scope = {};
		}));
		it('should return products list on load', function () {
			var vm = $controller('productsCtrl', {
				$scope: $scope
			});
			expect(vm.products).toEqual([{
				name: 'Tea'
			}, {
				name: 'Syrup'
			}]);
		});
	});

	describe('in-line mocking of service', function () {
		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_;
			$scope = {};
		}));
		it('should return products list on load', function () {
			var mockService = function ProductService() {
				return [{
					name: 'Tea'
						}, {
					name: 'Syrup'
						}];
			}
			var vm = $controller('productsCtrl', {
				$scope: $scope,
				ProductService: mockService
			});
			expect(vm.products).toEqual([{
				name: 'Tea'
					}, {
				name: 'Syrup'
					}]);
		});
	});
});
describe('inline controller example', function () {

	beforeEach(module('myApp.products'));
	var $scope;
	var $controller;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
		$scope = {};
	}));
	it('should return products list on load', function () {
		var vm = $controller(function inlineController($scope, ProductService) {
			$scope.products = ProductService();
		}, {
			$scope: $scope
		});
		expect($scope.products).toEqual([{
			name: 'Chai'
					}, {
			name: 'Syrup'
					}]);
	});
});
describe('inline controller example using controllerProvider', function () {

	beforeEach(module('myApp.products'));
	var $scope;
	var $controller;

	beforeEach(module(function ($controllerProvider) {
		$controllerProvider.register('inlineController', function ($scope, ProductService) {
			$scope.products = ProductService();
		});
	}));
	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
		$scope = {};
	}));
	it('should return products list on load', function () {
		var vm = $controller('inlineController', {
			$scope: $scope
		});
		expect($scope.products).toEqual([{
			name: 'Chai'
					}, {
			name: 'Syrup'
					}]);
	});
});
describe('controller example using bindings', function () {

	beforeEach(module('myApp.products'));
	var $scope;
	var $controller;
	var bindings = {
		foo: 'bar'
	};

	beforeEach(module(function ($controllerProvider) {
		$controllerProvider.register('inlineController', function () {
			expect(this.data).toBe(bindings);
		});
	}));
	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
		$scope = {};
	}));
	it('should return products list on load', function () {
		var vm = $controller('inlineController', {
			$scope: $scope
		}, {
			data: bindings
		});
	});
});
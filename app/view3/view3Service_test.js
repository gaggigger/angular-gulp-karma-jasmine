'use strict';

describe('myApp.view3 module', function () {
	var view3Service;

	beforeEach(function () {

		module('myApp.view3');

		inject(function(_view3Service_) {
			view3Service = _view3Service_;
		});
	});

	describe('view3 service', function () {

		// check to see if it has the expected function
		it('should have an getViewName function', function () {
			expect(angular.isFunction(view3Service.getViewName)).toBe(true);
		});

		// check to see if it does what it's supposed to do.
		it('should get name', function (){
			var result = view3Service.getViewName();
			expect(result).toBe('My name');
		});

	});
});

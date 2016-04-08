'use strict';

describe('myApp.view2 module', function () {

	beforeEach(module('myApp.view2'));

	describe('view2 controller', function () {

		it('should have "View2Ctrl" as controller', inject(function ($controller) {
			//spec body
			var view2Ctrl = $controller('View2Ctrl');
			expect(view2Ctrl).toBeDefined();
		}));

		it('should have "x = 2" ', inject(function ($controller) {
			var a = 1, b = 3;
			var x  = a + b;
			expect(x).toBe(2);
		}));

	});
});

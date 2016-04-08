'use strict';

describe('myApp.view3 module', function () {

	var $controller, view3ServiceMock, $scope, controller;

	beforeEach(function() {

		view3ServiceMock = jasmine.createSpyObj('view3Service', ['getViewName']);

		module('myApp.view3');

		inject(function($rootScope, $controller) {
			// create a scope object for us to use.
			$scope = $rootScope.$new();

			// set up the returns for our someServiceMock
			// $q.when('weee') creates a resolved promise to "weee".
			// this is important since our service is async and returns
			// a promise.
			view3ServiceMock.getViewName.and.returnValue('My name');



			// now run that scope through the controller function,
			// injecting any services or other injectables we need.
			// **NOTE**: this is the only time the controller function
			// will be run, so anything that occurs inside of that
			// will already be done before the first spec.
			controller = $controller('View3Ctrl', {
				$scope: $scope,
				view3Service: view3ServiceMock
			});
		});

	});
	it('should update fizz asynchronously when test2() is called', function (){
		// just make the call
		$scope.name = view3ServiceMock.getViewName();

		// asser that it called the service method.
		expect(view3ServiceMock.getViewName).toHaveBeenCalled();
		expect($scope.name).toEqual('My name');
	});
	/*beforeEach(inject(function($rootScope, $controller, view3ServiceMock){
		scope = $rootScope.$new();
		view3ServiceMock = view3Service;
		createController = function() {
			return $controller("View3Ctrl", {
				$scope: scope,
				view3Service: view3ServiceMock
			});
		};
		spyOn(view3Service,'getViewName').and.callThrough();
	}));

	it('should get "View3Ctrl" name', inject(function ($controller) {
		//spec body

		createController();
		scope.name = view3Service.getViewName();
		expect(scope.name).toBeDefined();
		expect(scope.name.test("My name")).toBe(true);
	}));*/
});

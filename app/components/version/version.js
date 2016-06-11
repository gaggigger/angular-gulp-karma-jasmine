(function () {
	'use strict';

	var myApp = angular.module('myApp.version', [
		'myApp.version.interpolate-filter',
		'myApp.version.version-directive'
	]);

	myApp.value('version', '0.1');
}());
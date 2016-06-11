(function () {
	'use strict';

	var myApp = angular.module('myApp.version.interpolate-filter', []);
	function interpolate(version) {
		return function (text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}
	myApp.filter('interpolate', interpolate);
	interpolate.$inject = ['version'];
}());

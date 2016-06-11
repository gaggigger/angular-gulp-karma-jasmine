(function () {
	'use strict';

	var myApp = angular.module('myApp.version.version-directive', []);
	function appVersion(version) {
		return function (scope, elm, attrs) {
			elm.text(version);
		};
	}
	myApp.directive('appVersion', appVersion);
	appVersion.$inject = ['version'];
}());
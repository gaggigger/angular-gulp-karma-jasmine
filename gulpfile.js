(function () {

	'use strict';
	var gulp = require('gulp'),
		g = require('gulp-load-plugins')(),
		conf = require('./package.json'),
		paths = conf.paths,
		logger = require('log4js').getLogger();


	gulp.task('test:unit', ['unit', 'open']);

	gulp.task('unit', function () {
		return gulp.src([
			paths.bower + '/angular/angular.js',
			paths.bower + '/angular-mocks/angular-mocks.js',
			paths.bower + '/angular-ui-router/release/angular-ui-router.js',
			paths.bower + '/angular-mocks/angular-mocks.js',
			paths.src + '/app.js',
			paths.src + '/view*/*.js',
			paths.src + '/components/**/*.js'
		]).pipe(g.karma({
			configFile: 'karma.conf.js',
			action: 'run'
		})).on('error', function (e) {
			logger.error("[test:unit] desktop error : " + e);
		});
	});

	gulp.task('open', function () {
		setTimeout(function () {
			gulp.src(paths.unitTest + '/karma_html/index.html')
				.pipe(g.open());
		}, 5000);
		gulp.src(paths.unitTest + '/karma_html/index.html')
			.pipe(gulp.dest(paths.unitTest + '/karma_html/history/report-' + new Date().getTime()));
	});

}());

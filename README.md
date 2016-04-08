# Configuration des tests unitaires avec Gulp, Karma, Jasmine et Nyan pour Angular.Js

## Setup Instructions

* Installer les dépendances
* Paramétrer Gulp
* Paramétrer Karma

Dépendances
-------------
NPM est préconfiguré pour exécuter automatiquement bower afin que nous puissions simplement faire: 

    npm install


Gulp
-------------
Packages  nécessaires:

    npm install gulp-open --save-dev

Implémentation:

```javascript
  // gulpFile.js
  (function() {

	'use strict';
	var gulp        	= require('gulp'),
		open 		= require('gulp-open'),
		g           	= require('gulp-load-plugins')(),
		conf        	= require('./package.json'),
		paths       	= conf.paths, // à configurer dans le package.json 
		logger		= require('log4js').getLogger(),
		fs		= require('fs');


	gulp.task('test:unit', ['unit', 'open']);


	gulp.task('unit', function() {
		return gulp.src([
			paths.bower + '/angular/angular.js',
			paths.bower + '/angular-route/angular-route.js',
			paths.bower + '/angular-mocks/angular-mocks.js',
			paths.src + '/app.js',
			paths.src + '/view*/*.js'
		])
			.pipe(g.karma({
			configFile: 'karma.conf.js',
			action: 'run'
		})).on('error', function(e) {
			logger.error("[test:unit] desktop error : " + e);
		}),
			gulp.src(paths.unitTest + 'karma_html/index.html')
			.pipe(gulp.dest('karma_html/history/report-'+ new Date().getTime()));
	});

	gulp.task('open', function(){
		setTimeout(function(){
			gulp.src(paths.unitTest + '/karma_html/index.html')
				.pipe(open());
		}, 5000)
	});

}());

```
Le test est lancer avec la commande:

    gulp test:unit
    
    
Karma
-------------
Packages  nécessaires:

    npm install karma-html-reporter --save-dev

Implémentation:

```javascript

  // karma.conf.js
  module.exports = function (config) {
  	'use strict';
  	config.set({
  		// base path qui servira pour tous les fichiers
  		basePath: '../',
  
  		// les frameworks à utiliser : la liste est ici : https://npmjs.org/browse/keyword/karma-adapter
  		frameworks: ['jasmine'],
  
      // liste des fichiers à inclure : Les fichiers sont définis dans le gulpFile.js
  		files: [],
  		
  		// watcher sur les fichiers
  		autoWatch: false,
  		
  		// liste des fichiers à exclure : Les fichiers sont définis dans le gulpFile.js
  		exclude: [],
  
  		// preprocess les fichiers avant de les exposés au navigateur : 
  		//la liste est ici : https://npmjs.org/browse/keyword/karma-preprocessor
  		preprocessors: {},
  
  		// Les reporters de test à utiliser
  		// la liste est ici : https://npmjs.org/browse/keyword/karma-reporter
  		// progress est utilisé en complément du html
  		reporters: ['nyan', 'progress', 'html'],
  
  		// port du web server
  		port: 9876,
  
  		// couleur dans les résultats (reporters and logs)
  		colors: true,
  
  		// niveau de log
  		// Les valeurs possibles sont : LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
  		logLevel: config.LOG_DEBUG,
  
  
  		// Les navigateurs dans lesquels afficher les rapports
  		// la liste est ici : https://npmjs.org/browse/keyword/karma-launcher
  		browsers: ['Chrome'], //PhantomJS
  
  		// Intégration continue : if true, Karma affiche le navigateur, execute le test et s'arrête
  		singleRun: false,
  
  		// @TODO check outPutfile pour un rapport sauvegardé
  		nyanReporter: {
  			// Supprime le rapport à la fin du test
  			suppressErrorReport: true,
  
  			// Supprime le fond rouge en cas d'erreur dans le rapport
  			suppressErrorHighlighting: true,
  
  			// Nombre de couleurs à afficher (mac) : min = 4, max = terminal height - 1
  			numberOfRainbowLines: 100,
  
  			// Affichage du ggraphique uniquement à la fin du traitement.
  			renderOnRunCompleteOnly: true
  		},
  		htmlReporter: {
  		  // Répertoire dans lequel sauvegarder les rapports
  			outputDir: 'test/karma_html',
  			// à modifier si le  jasmine_template.html est déplacé
  			templatePath: null,
  			// focus sur l'onglet des erreurs
  			focusOnFailures: true,
  			// Nommer les fichiers au lieu de créer des sous-dossiers
  			namedFiles: false, 
  			// Titre de la page de rapport
  			pageTitle: null, 
  			// remplaces les " " par des  "_" pour les noms de dossiers et de fichiers
  			urlFriendlyName: false, 
  			// Nom du rapport
  			reportName: 'report-summary', 
  			
  			// experimental
  			// Laisser déployer ou non les descriptions
  			preserveDescribeNesting: false, 
  			// (only with preserveDescribeNesting) Le rapport commence rétracté
  			foldAll: false, 
  		}
  	});
  };

```

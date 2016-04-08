module.exports = function (config) {
	'use strict';
	config.set({
		// base path qui servira pour tous les fichiers
		basePath: '/',

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
			outputDir: 'unit-tests',
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
			// Nom du dossier du rapport (non null)
			reportName: 'karma_html',

			// experimental
			// Laisser déployer ou non les descriptions
			preserveDescribeNesting: false,
			// (only with preserveDescribeNesting) Le rapport commence rétracté
			foldAll: false,
		}
	});
};

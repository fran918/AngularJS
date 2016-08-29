module.exports = function(config){
  config.set({

    basePath : './',

    files : [

	'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
	  'app/help/*.js', 
	  'app/designs/*.js', 
	  'app/home/*.js', 
	  'app/locations/*.js', 
	  'app/newSystem/*.js', 
	  'app/systems/*.js', 
	  'app/newDesign/*.js',
		'app/editDesign/*.js',
		'app/editSystem/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

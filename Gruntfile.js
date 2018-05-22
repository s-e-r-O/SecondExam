module.exports = function(grunt) { 
	var config, configFile;
	var data, dataFile;
	try{
		configFile = grunt.option('config');
		config = grunt.file.readJSON(configFile);
	} catch(error) {
		configFile = 'config.json';
		config = grunt.file.readJSON(configFile);
	}
	
	try{
		dataFile = grunt.option('data');
		data = grunt.file.readJSON(dataFile);
	} catch(error) {
		dataFile = 'data.json';
		data = grunt.file.readJSON(dataFile);
	}

	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.initConfig({
	  jasmine: {
	    JS: {
	      options: {
	        specs: 'spec/*.spec.js'
	      }
	    }
	  }
	});

	grunt.registerTask('generateIndex', function() {
		grunt.file.copy('./templates/index.html', config.buildFolder+'/index.html', {
			process: function(files){
					return grunt.template.process(files, {
							data: {
								pageTitle: config.appName
							}
					});
			}
		});
	});
	
	grunt.registerTask('generateMenu', function() {
		grunt.file.copy('./templates/menu.component.html', config.buildFolder+'/menu.component.html');

		grunt.file.copy('./templates/menu.component.ts', config.buildFolder+'/menu.component.ts', {
			process: function(files) {	
					return grunt.template.process(files, {
							data: {
								configFileName: configFile
							}
					});
			}
		});
	});

	grunt.registerTask('generateUpbUsers', function() {
		grunt.file.copy('./templates/upb-users.component.html', config.buildFolder+'/' + 
		config.pageOneName + '.html', {
			process: function(files) {	
					return grunt.template.process(files, {
							data: {
								defaultPic: 'http://www.eurogeosurveys.org/wp-content/uploads/2014/02/default_profile_pic.jpg',
								year: new Date().getFullYear()
							}
					});
			}
		});

		grunt.file.copy('./templates/upb-users.component.ts', config.buildFolder+'/upb-users.component.ts', {
			process: function(files) {	
					return grunt.template.process(files, {
							data: {
								dataFileName: dataFile,
								pageOneName: config.pageOneName + '.html'
							}
					});
			}
		});
	});
	
	grunt.registerTask('generateFreePage', function() {
		grunt.file.copy('./templates/free-content.component.html', config.buildFolder+'/' + 
		config.pageTwoName + '.html');

		grunt.file.copy('./templates/free-content.component.ts', config.buildFolder + 
		'/free-content.component.ts', {
			process: function(files) {	
					return grunt.template.process(files, {
							data: {
								configFileName: configFile,
								pageTwoName: config.pageTwoName + '.html'
							}
					});
			}
		});
	});
	grunt.registerTask('build', [
															'generateIndex',
															'generateMenu', 
															'generateUpbUsers',
															'generateFreePage', 
															'jasmine'
														]);
	
};
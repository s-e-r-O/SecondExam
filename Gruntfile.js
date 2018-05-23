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
		grunt.file.copy(config.buildFolder+'/index.html', 'src/index.html');
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
		grunt.file.copy(config.buildFolder+'/menu.component.html', 'src/app/menu/menu.component.html');
		grunt.file.copy(config.buildFolder+'/menu.component.ts', 'src/app/menu/menu.component.ts');
	});

	grunt.registerTask('generateHome', function() {
		grunt.file.copy('./templates/home.component.html', config.buildFolder+'/home.component.html');

		grunt.file.copy('./templates/home.component.ts', config.buildFolder+'/home.component.ts', {
			process: function(files) {	
					return grunt.template.process(files, {
							data: {
								configFileName: configFile
							}
					});
			}
		});
		grunt.file.copy(config.buildFolder+'/home.component.html', 'src/app/home/home.component.html');
		grunt.file.copy(config.buildFolder+'/home.component.ts', 'src/app/home/home.component.ts');
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
								configFileName: configFile,
								pageOneName: config.pageOneName + '.html'
							}
					});
			}
		});
		grunt.file.copy(config.buildFolder+'/'+config.pageOneName+'.html', 
										'src/app/upb-users/'+config.pageOneName+'.html');
		grunt.file.copy(config.buildFolder+'/upb-users.component.ts', 
										'src/app/upb-users/upb-users.component.ts');
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
		grunt.file.copy(config.buildFolder+'/'+config.pageTwoName+'.html', 
										'src/app/free-content/'+config.pageTwoName+'.html');
		grunt.file.copy(config.buildFolder+'/free-content.component.ts', 
										'src/app/free-content/free-content.component.ts');
	});
	grunt.registerTask('build', [
															'generateIndex',
															'generateMenu',
															'generateHome', 
															'generateUpbUsers',
															'generateFreePage', 
															'jasmine'
														]);
	
};
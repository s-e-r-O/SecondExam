module.exports = function(grunt) { 
	var config = grunt.file.readJSON(grunt.option('config') || 'config.json');
	
	grunt.registerTask('generatePage', function(oldPageName, newPageName) {
		grunt.file.copy('./'+oldPageName+'.html', config.buildFolder+'/'+newPageName+'.html', {
			process: function(files){
					return grunt.template.process(files, {
							data: {
								pageTitle: config.appName
							}
					});
			}
		});
	});

	grunt.registerTask('build', [
															'generatePage:Index:Index', 
															'generatePage:page1:'+config.pageOneName, 
															'generatePage:page2:'+config.pageTwoName]);
	
};
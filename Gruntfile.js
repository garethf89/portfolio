module.exports = function (grunt) {

	var data = {
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			src:{
				root:"",
				css:"css",
				scss:"css",
				js:"js",
				img:"images",
                bower: "bower_components",
                testing:"tests",
			},
			dest:{
				root:"",
                scss:"css",
				css:"css",
				js:"js",
				img:"images",
			}
		},
        url: "index.html"
	};
    
    
    // measures the time each task takes
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-concurrent');
    require('load-grunt-config')(grunt,{data: data});
};
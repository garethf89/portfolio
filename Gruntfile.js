module.exports = function (grunt) {

	var data = {
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			src:{
				root:"",
				css:"css",
				scss:"css",
				js:"js",
				img:"images"
			},
			dest:{
				root:"",
                scss:"css",
				css:"css",
				js:"js",
				img:"images",
			}
		}
	};
    
    
    // measures the time each task takes
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt,{data: data});
};
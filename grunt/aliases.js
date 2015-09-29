module.exports = function (grunt) {

    grunt.registerTask('default', ["concurrent:watch"]);
    
    grunt.registerTask('build', ['copy','sass','concat', 'newer:critical', 'ngAnnotate', 'uglify', 'newer:jsonmin', 'newer:cssmin','newer:imagemin']);
        
};
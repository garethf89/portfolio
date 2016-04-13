module.exports = function (grunt) {

    grunt.registerTask('default', ["concurrent:dev"]);
    
    grunt.registerTask('build', ['copy','newer:imagemin','sass','concat', 'newer:critical', 'ngAnnotate', 'uglify', 'newer:jsonmin', 'newer:cssmin']);
        
};
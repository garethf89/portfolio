module.exports = function (grunt) {

    grunt.registerTask('default', ["concurrent:dev"]);
    
    grunt.registerTask('build', ['copy','sass','concat', 'critical', 'ngAnnotate', 'uglify', 'jsonmin', 'cssmin']);
        
};
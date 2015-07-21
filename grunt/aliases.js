module.exports = function (grunt) {

    grunt.registerTask('default', ["concurrent:watch"]);
    
    grunt.registerTask('build', ['sass','newer:concat', 'newer:ngAnnotate', 'uglify', 'newer:jsonmin', 'newer:cssmin','newer:imagemin']);
        
};
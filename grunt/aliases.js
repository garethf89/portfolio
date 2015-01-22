module.exports = function (grunt) {

    grunt.registerTask('default', ['watch']);
    
    grunt.registerTask('build', ['sass','newer:concat', 'newer:ngAnnotate', 'uglify', 'newer:jsonmin', 'newer:cssmin','newer:imagemin']);
    
};
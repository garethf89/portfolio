module.exports = function (grunt) {

    grunt.registerTask('default', ["concurrent:watch"]);
    
    grunt.registerTask('build', ['sass','newer:concat', 'newer:ngAnnotate', 'uglify', 'newer:jsonmin', 'newer:cssmin','newer:imagemin']);
    
    grunt.registerTask('speedTest', ['pagespeed']);
    
    var ngrok = require('ngrok');
    
            grunt.registerTask('ngrok-test', 'Run pagespeed with ngrok', function() {
                
            var done = this.async();
            var port = 8080;

            ngrok.connect(port, function(err, url) {
              if (err !== null) {
                grunt.fail.fatal(err);
                return done();
              }
              grunt.config.set('url', url);
              grunt.task.run('pagespeed');
              done();
            });
          });
    
    grunt.registerTask('perf', ['ngrok-test']);
    
};
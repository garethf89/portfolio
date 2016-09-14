module.exports = {
    scripts: {
        files: ['js/**/*.js', 'js/**/*.json'],
        tasks: ['jsonmin', 'concat:js', 'concat:libs', 'concat:plugins', 'uglify'],
        options: {
            spawn: false,
            livereload: true
        },
    },
    css: {
        files: ['css/*.css', 'css/*.scss', 'css/*/*.scss'],
        tasks: ['sass', 'concat:css', 'cssmin', 'topdoc'],
        options: {
            spawn: false,
            livereload: true
        },
    },
    server: {
    files: ['.rebooted'],
    options: {
      livereload: true
    }
  } 
};
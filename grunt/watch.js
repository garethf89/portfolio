module.exports = {
    scripts: {
        files: ['js/**/*.js', 'js/**/*.json'],
        tasks: ['jsonmin', 'concat:js', 'concat:libs', 'concat:plugins', 'uglify'],
        options: {
            spawn: false,
        },
    },
    css: {
        files: ['css/*.css', 'css/*.scss'],
        tasks: ['sass', 'concat:css', 'cssmin'],
        options: {
            spawn: false,
        },
    }
};
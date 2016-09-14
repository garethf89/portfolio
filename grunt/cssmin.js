module.exports = {

    //MINIFY
    original: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.css %>/',
            src: ['main.css', 'critical.css'],
            dest: '<%= paths.dest.css %>/',
            ext: '.min.css'
            }]
    }
};
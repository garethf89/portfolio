module.exports = {

    //MINIFY
    my_target: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.css %>/',
            src: ['main_css.css'],
            dest: '<%= paths.dest.css %>/',
            ext: '.min.css'
            }]
    }


};
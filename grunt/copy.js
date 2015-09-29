module.exports = {
        main: {
            expand: true,
            cwd:    '<%= paths.src.bower %>/fancybox/source',
            src:    [ '*.png', '.gif' ],
            dest: '<%= paths.src.css %>'
        }
};
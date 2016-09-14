module.exports = {
        main: {
            expand: true,
            cwd:    '<%= paths.src.bower %>/fancybox/source',
            src:    [ '*.png', '.gif' ],
            dest: '<%= paths.src.css %>'
        },
        test: {
            expand: true,
            cwd:    '<%= paths.src.js %>',
            src:    'data.json',
            dest: '<%= paths.src.testing %>',
        }
};
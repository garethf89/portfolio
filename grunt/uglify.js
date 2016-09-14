module.exports = {
    options: {
        mangle: false
    },
    js: {
        files: {
            '<%= paths.dest.js %>/build/production.min.js' : [
                        '<%= paths.src.js %>/build/libs.js',
                        '<%= paths.src.js %>/build/plugins.js',
                        '<%= paths.src.js %>/build/angular_app.js'
                    ]
        }
    }
};
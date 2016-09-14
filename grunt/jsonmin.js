module.exports = {
    dev: {
        options: {
            stripWhitespace: true || false,
            stripComments: true || false
        },
        files: {
            "<%= paths.src.js %>/data.min.json": "<%= paths.dest.js %>/data.json"
        }
    }
};
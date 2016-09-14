module.exports = {

    site: {
        options: {
            base: './',
            css: [
                '<%= paths.src.css %>/main.min.css'
            ],
            width: 1920,
            height: 1080
        },
        src: 'index.html',
        dest: 'index-critical.html'
    }

};
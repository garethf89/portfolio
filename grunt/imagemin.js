module.exports = {
    images: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.img %>/',
            src: ['**/*.{png,jpg}'],
            dest: '<%= paths.dest.img %>/'
                }]
    },
    lightbox: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.img %>/lighboximages',
            src: ['**/*.{png,jpg}'],
            dest: '<%= paths.dest.img %>/lighboximages'
                }]
    },
    bg: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.img %>/backgrounds',
            src: ['**/*.{png,jpg}'],
            dest: '<%= paths.dest.img %>/backgrounds'
                }]
    },
    home: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.img %>/home',
            src: ['**/*.{png,jpg}'],
            dest: '<%= paths.dest.img %>/home'
                }]
    },
    thumbs: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.img %>/thumbs',
            src: ['**/*.{png,jpg}'],
            dest: '<%= paths.dest.img %>/thumbs'
                }]
    }

};
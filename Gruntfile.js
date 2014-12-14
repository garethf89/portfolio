module.exports = function(grunt) {
    
    
    var pkg =  grunt.file.readJSON('package.json');

    // 1. All configuration goes here 
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        //COMBINE FILES
        concat: { 

            css: { //CSS
                src: [
                    'css/main.css',
                    'js/fancybox/jquery.fancybox.css'
                ],
                dest: 'css/main_css.css',
            },
            
            js: { //JS
                src: [
                    'js/angular/angular.min.js',
                    'js/angular/angular-animate.min.js',
                    'js/angular/angular-route.min.js',
                    'js/angular/angular-sanitize.min.js',
                    'js/main.js',
                    'js/controllers.js'
                ],
                dest: 'js/build/angular_app.js',
            },
            libs: {
                src: [
                    'js/vendor/*.js'
                ],
                dest: 'js/build/libs.js',
            },
            plugins: {
                src: [
                    'js/plugins/*.js'
                ],
                dest: 'js/build/plugins.js',
            }
        },
         
        //MINIFY
        uglify: {
            js: {
                src: [
                    'js/build/libs.js',
                    'js/build/plugins.js',
                    'js/build/angular_app.js'
                ],
                dest: 'js/build/production.min.js'
            }
        },
        
        //MINIFY
        cssmin: {
          my_target: {
            files: [{
              expand: true,
              cwd: 'css/',
              src: ['main_css.css'],
              dest: 'css/',
              ext: '.min.css'
            }]
          }
        },
        
        //IMAGES
        imagemin: {
            images: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'images/'
                }]
            },
            lightbox: {
                files: [{
                    expand: true,
                    cwd: 'images/lighboximg',
                    src: ['**/*.{png,jpg}'],
                    dest: 'images/lighboximg'
                }]
            },
            bg: {
                files: [{
                    expand: true,
                    cwd: 'images/backgrounds',
                    src: ['**/*.{png,jpg}'],
                    dest: 'images/backgrounds'
                }]
            }
        },
        
        //WATCH
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat:js','concat:libs','concat:plugins', 'uglify', 'version'],
                options: {
                    spawn: false,
                },
            }, 
            css: {
                files: ['css/*.css'],
                tasks: ['concat:css', 'cssmin'],
                options: {
                    spawn: false,
                },
            } 
        },
        
        //VERSION
        cachebreaker: {
            dev: {
                options: {
                    match: ['js/build/production.min.js'],
                    replacement: function (){
                        return  "v_" + pkg.version
                    }
                },
                files: {
                    src: ['index.php']
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cache-breaker');
    
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin',]);

};
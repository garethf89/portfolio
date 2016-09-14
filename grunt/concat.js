   module.exports =  {

       //COMBINE FILES
           css: {
               src: [
                    '<%= paths.src.css %>/main.css',
                    '<%= paths.src.bower %>/fancybox/source/*.css'
                ],
               dest: '<%= paths.dest.css %>/main.css'
           },

           js: {
               src: [
                    '<%= paths.src.bower %>/angular/angular.min.js',
                    '<%= paths.src.bower %>/angular-route/angular-route.min.js',
                    '<%= paths.src.bower %>/angular-sanitize/angular-sanitize.min.js',
                    '<%= paths.src.bower %>/angular-aria/angular-aria.min.js',
                    '<%= paths.src.bower %>/angular-animate/angular-animate.min.js',
                    '<%= paths.src.js %>/main.js',
                    '<%= paths.src.js %>/controllers.js'
                ],
               dest: '<%= paths.dest.js %>/build/angular_app.js',
           },
           libs: {
               src: [
                    '<%= paths.src.bower %>/jquery/dist/jquery.min.js'
                ],
               dest: '<%= paths.dest.js %>/build/libs.js',
           },
           plugins: {
               src: [
                    '<%= paths.src.bower %>/fancybox/source/jquery.fancybox.js',
                    '<%= paths.src.js %>/plugins/*.js',
                ],
               dest: '<%= paths.dest.js %>/build/plugins.js',
           }
       
   };
               
               
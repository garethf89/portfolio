var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    
    browserSync.init({
        port: 8081,
        server: {
            baseDir: "." // Change this to your web root dir
        }
    });
    
});

gulp.task('styles', function() {
    
    

    
    
});


gulp.task("nodemon", function(){

  return nodemon({
    script: 'api/index.js',
    env: {
        port: '3000'
    },
    watch: 'api/*'
  })
  .on('config:update', function () {
    /* setTimeout(function () {
       browserSync.reload();
    }, 1000); */
  });
    
});

gulp.task('default', ['watch', 'nodemon']);
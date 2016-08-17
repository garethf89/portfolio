var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    critical = require('critical').stream,
    browserSync = require('browser-sync').create();

	var data = {
		paths: {
				root:"",
				css:"css",
				scss:"css/*.scss",
                fancybox_css: "bower_components/fancybox/source/*.css",
				js:"js",
				img:"images",
                bower: "bower_components",
                testing:"tests"
        }
    };


var filesToCopy =  data.paths.bower + '/fancybox/source/*.{png,gif}',
    filesToCopy_tests = data.paths.js + '/data.json' ;


// =============================================================================
// Copy
// =============================================================================

gulp.task('copy-tests', function() {
    return gulp.src(filesToCopy_tests)
        .pipe(gulp.dest(data.paths.testing));
});

gulp.task('copy', function() {
    return gulp.src(filesToCopy)
        .pipe(gulp.dest(data.paths.css));
});

// =============================================================================
// Styles
// =============================================================================

gulp.task('styles', function() {
    
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano(),
    ];
    
    return gulp.src([data.paths.scss, data.paths.fancybox_css])
        .pipe(sass
            (
				{
				    outputStyle		: "expanded",
				    errLogToConsole	: true,
				    indentType 		: 'tab',
				    indentWidth		: 1
				}
            )
        )
        .pipe(concat('main.css'))
        .pipe(gulp.dest(data.paths.css))
        .pipe(postcss(processors))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(data.paths.css));

});

// =============================================================================
// Watching and Nodemon
// =============================================================================

gulp.task('watch', ['nodemon'], function() {
    
    browserSync.init({
        port: 8081,
        server: {
            baseDir: "." // Change this to your web root dir
        }
    });
    
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

gulp.task('default', ['copy', 'copy-tests', 'watch']);
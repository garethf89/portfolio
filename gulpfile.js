var gulp = require('gulp'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    ngAnnotate = require('gulp-ng-annotate'),
    postcss = require('gulp-postcss'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    critical = require('critical'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    jsonminify = require('gulp-jsonminify'),
    browserSync = require('browser-sync').create();

	var data = {
		paths: {
  				root:"",
          build: "build",
  				css:"build/css",
          css_src: "css",
  				scss:"css/*.scss",
          fancybox_css: "bower_components/fancybox/source/*.css",
  				js:"build/js",
          js_src:"js",
  				img:"build/images",
          img_src:"images",
          bower: "bower_components",
          testing:"tests"
        }
    };

var filesToCopy =  data.paths.bower + '/fancybox/source/*.{png,gif,css}',
    filesToCopy_tests = data.paths.js_src + '/data.json' ;

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

gulp.task('css', function() {

    var processors = [
        autoprefixer({
            browsers: ['last 2 versions']
        }),
        cssnano(),
    ];

    return gulp.src([data.paths.scss, data.paths.fancybox_css])
        .pipe(sass({
            outputStyle: "expanded",
            errLogToConsole: true,
            indentType: 'tab',
            indentWidth: 1
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(data.paths.css))
        .pipe(postcss(processors))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(data.paths.css));

});

gulp.task('clean:styles', function () {
  return del([
    data.paths.css + "/*.css"
  ]);
});

gulp.task('styles', ['css'], function() {

    critical.generate({
        inline: true,
        base: './',
        src: 'index.html',
        dest: 'index-critical.html',
        css: [
            data.paths.css + '/main.min.css'
        ],
        minify:true,
        width: 1920,
        height: 1080
    });

});

// =============================================================================
// Scripts
// =============================================================================

gulp.task('scripts:source', function() {
    return gulp.src(data.paths.js_src + '/src/*.js')
        .pipe(ngAnnotate())
        .pipe(concat('source.js'))
        .pipe(gulp.dest(data.paths.js))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename('source.min.js'))
        .pipe(gulp.dest(data.paths.js))
});

gulp.task('scripts:libraries', function() {
    return gulp.src([
            data.paths.bower + '/jquery/dist/jquery.min.js',
            data.paths.js_src + '/plugins/*.js',
            data.paths.bower + '/fancybox/source/jquery.fancybox.js',
            data.paths.bower + '/fancybox/source/jquery.fancybox-buttons.js',
            data.paths.bower + '/angular/angular.min.js', data.paths.bower + '/angular-route/angular-route.min.js',
            data.paths.bower + '/angular-sanitize/angular-sanitize.min.js', data.paths.bower + '/angular-aria/angular-aria.min.js', data.paths.bower + '/angular-animate/angular-animate.min.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(data.paths.js))
});

gulp.task('scripts:combine', function() {
  return gulp.src(data.paths.js + '/*js')
      .pipe(concat('production.min.js'))
      .pipe(gulp.dest(data.paths.js))
});

gulp.task('clean:scripts', function() {
    return del([
        data.paths.js + "/*.js"
    ]);
});

gulp.task('scripts', ['scripts:libraries', 'scripts:source', 'scripts:combine']);

// =============================================================================
// JSON
// =============================================================================

gulp.task('json', function () {
    return gulp.src(data.paths.js_src + '/data.json')
        .pipe(jsonminify())
        .pipe(rename('data.min.json'))
        .pipe(gulp.dest(data.paths.js_src));
});

// =============================================================================
// Images
// =============================================================================

gulp.task('images', function() {
  return gulp.src(data.paths.img_src + '/**/*')
      .pipe(changed(data.paths.img))
      .pipe(imagemin())
      .pipe(gulp.dest(data.paths.img))
});


// =============================================================================
// Watching and Nodemon
// =============================================================================

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('watch', ['nodemon'], function() {

    browserSync.init({
        port: 8081,
        server: {
            baseDir: "." // Change this to your web root dir
        }
    });

    gulp.watch(data.paths.js_src + '/*src/*js', ['scripts:source','scripts:combine', 'reload']);
    gulp.watch(data.paths.css_src  + '/**/*.scss', ['styles','reload']);
});

gulp.task("nodemon", function(){

  return nodemon({
    script: 'api/index.js',
    env: {
        port: '3000'
    },
    watch: 'api/*'
  })
  .on('restart', function () {
     setTimeout(function () {
       browserSync.reload();
    }, 1000);
  });

});

// =============================================================================
// Clean all
// =============================================================================

gulp.task('clean:start', function () {
  return del([
    data.paths.build + "/{css,js}/*.{css.js}"
  ]);
});

gulp.task('default', ['clean:start', 'copy', 'copy-tests', 'json', 'images', 'styles', 'scripts', 'watch']);

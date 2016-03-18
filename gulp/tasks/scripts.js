var gulp         = require('gulp');
var config       = require('../config').scripts;
var babelify     = require('babelify');
var browserify   = require('browserify');
var buffer       = require('vinyl-buffer');
var source       = require('vinyl-source-stream');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

gulp.task('scripts', function () {
  var bundler = browserify({
    entries: config.main_src,
    debug: true
  });
  bundler.transform(babelify);
  bundler.bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(source(config.main_name))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});

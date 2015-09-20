var gulp        = require('gulp');
var config      = require('../config').scripts;
var size        = require('gulp-size');
var plumber     = require('gulp-plumber');
var gutil       = require("gulp-util");
var jshint      = require('gulp-jshint');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var stripDebug  = require('gulp-strip-debug');
var modernizr   = require('gulp-modernizr');
var options     = require('minimist')(process.argv.slice(2));

gulp.task('jshint', function() {
  return gulp.src(config.jshint)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(concat('index.js'))
    .pipe(options.production ? stripDebug() : gutil.noop())
    .pipe(options.production ? uglify() : gutil.noop())
    .pipe(size({
      title: 'Script'
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('modernizr', function() {
  return gulp.src(config.src)
    .pipe(modernizr(config.modernizr_settings))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});

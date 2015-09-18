var gulp        = require('gulp');
var config      = require('../config').template;
var jade        = require('gulp-jade');
var htmlmin     = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var plumber     = require('gulp-plumber');
var gutil       = require("gulp-util");
var notify      = require('gulp-notify');
var options     = require('minimist')(process.argv.slice(2));

gulp.task('template', function() {
  return gulp.src(config.page_src)
    .pipe(plumber({
      errorHandler: notify.onError('JADE Error: <%= error.message %>')
    }))
    .pipe( jade({ pretty: true }))
    .pipe(options.production ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(gulp.dest(config.dest));
});

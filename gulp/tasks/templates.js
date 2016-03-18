var gulp         = require('gulp');
var config       = require('../config').templates;
var jade         = require('gulp-jade');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var gutil        = require("gulp-util");
var htmlmin      = require('gulp-htmlmin');
var size         = require('gulp-size');
var options      = require('minimist')(process.argv.slice(2));

gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  return gulp.src(config.page_src)
    .pipe(plumber({
      errorHandler: notify.onError('JADE Error: <%= error.message %>')
    }))
    .pipe( jade({
      pretty: true,
      locals: YOUR_LOCALS
    }))
    .pipe(options.production ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(size({ title: 'template' }))
    .pipe(gulp.dest(config.dest));
});

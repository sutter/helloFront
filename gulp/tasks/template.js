var gulp = require('gulp');
var config = require('../config').template;
var jade = require('gulp-jade');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var gutil = require("gulp-util");
var notify = require('gulp-notify');
var options = require('minimist')(process.argv.slice(2));

var onError = function(err) {
  notify.onError({
    title: "Gulp",
    subtitle: "Template Failure!",
    message: "Error: <%= error.message %>",
    sound: "Frog"
  })(err);
  this.emit('end');
};

gulp.task('template', function() {
  return gulp.src(config.filesSrc)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(
      jade({
        pretty: true
      })
    )
    .pipe(options.production ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(gulp.dest(config.folderDest))
    .pipe(browserSync.stream());
});

var gulp = require('gulp');
var config = require('../config').template;
var jade = require('gulp-jade');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var gutil = require("gulp-util");
var options = require('minimist')(process.argv.slice(2));

gulp.task('template', function() {
  return gulp.src(config.filesSrc)
    .pipe(options.production ? plumber() : gutil.noop())
    .pipe(
      jade({
        pretty: true
      })
      .on('error', console.error.bind(console))
    )
    .pipe(options.production ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(gulp.dest(config.folderDest))
    .pipe(browserSync.stream());
});

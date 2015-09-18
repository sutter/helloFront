var gulp = require('gulp');
var config = require('../config').script;
var size = require('gulp-size');
var plumber = require('gulp-plumber');
var gutil = require("gulp-util");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var options = require('minimist')(process.argv.slice(2));

gulp.task('script', function() {
  return gulp.src(config.folderSrc)
    .pipe(options.production ? plumber() : gutil.noop())
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(options.production ? uglify() : gutil.noop())
    .pipe(size({
      title: 'Script'
    }))
    .pipe(gulp.dest(config.folderDest))
    .pipe(browserSync.stream());
});

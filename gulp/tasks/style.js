var gulp = require('gulp');
var config = require('../config').style;
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var gutil = require("gulp-util");
var csso = require("gulp-csso");
var size = require('gulp-size');
var browserSync = require('browser-sync').create();
var options = require('minimist')(process.argv.slice(2));

gulp.task('style', function() {
  return gulp.src(config.mainSrc)
    .pipe(options.production ? plumber() : gutil.noop())
    .pipe(
      sass(config.settings)
      .on('error', console.error.bind(console))
    )
    .pipe(autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    }))
    .pipe(options.production ? cmq({
      log: true
    }) : gutil.noop())
    .pipe(options.production ? csso() : gutil.noop())
    .pipe(size({
      title: 'style'
    }))
    .pipe(gulp.dest(config.folderDest))
    .pipe(browserSync.stream());
});

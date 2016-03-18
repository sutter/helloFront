var gulp         = require('gulp');
var config       = require('../config').images;
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var size         = require('gulp-size');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');

gulp.task('images', function() {
  return gulp.src(config.files_src)
    .pipe(plumber({
      errorHandler: notify.onError("Images Error: <%= error.message %>")
    }))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(size({
      title: 'image'
    }))
    .pipe(gulp.dest(config.dest));
});

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var size = require('gulp-size');
var config = require('../config').image;

gulp.task('image', function() {
  return gulp.src(config.folderSrc)
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
  .pipe(gulp.dest(config.folderDest));
});

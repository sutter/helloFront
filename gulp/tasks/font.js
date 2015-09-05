var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config').font;

gulp.task('font', function() {
  return gulp.src(config.folderSrc)
  .pipe(gulp.dest(config.folderDest))
  .pipe(browserSync.stream());
});

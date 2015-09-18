var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var config      = require('../config').fonts;

gulp.task('fonts', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});

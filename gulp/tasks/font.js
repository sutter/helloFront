var gulp = require('gulp');

var config = require('../config').font;

gulp.task('font', function() {
  return gulp.src(config.folderSrc)
  .pipe(gulp.dest(config.folderDest));
});

var gulp = require('gulp');
var config = require('../config').copy;

gulp.task('copy', function() {
  return gulp.src(config.filesSrc, {
      dot: true
    })
    .pipe(gulp.dest(config.folderDest));
});

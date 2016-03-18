var gulp         = require('gulp');
var config       = require('../config').rootfiles;

gulp.task('rootfiles', function() {
  return gulp.src(config.src, {
      dot: true
    })
    .pipe(gulp.dest(config.dest));
});

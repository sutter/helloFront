var gulp         = require('gulp');
var aigis        = require('gulp-aigis');

gulp.task('styleguide', function() {
  return gulp.src('./aigis_config.yml')
    .pipe(aigis());
});

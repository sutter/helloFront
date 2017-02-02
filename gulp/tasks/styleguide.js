const gulp         = require('gulp');
const aigis        = require('gulp-aigis');

gulp.task('styleguide', () => {
  return gulp.src('./aigis_config.yml')
    .pipe(aigis());
});

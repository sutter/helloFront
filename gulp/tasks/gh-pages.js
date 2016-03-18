var gulp        = require('gulp');
var config      = require('../config').deploy;
var deploy      = require('gulp-gh-pages');

gulp.task('gh-pages', function() {
  return gulp.src(config.folderSrc)
    .pipe(deploy())
});

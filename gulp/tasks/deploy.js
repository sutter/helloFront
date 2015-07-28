var gulp = require('gulp');
var config = require('../config').deploy;
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('githubPage', function() {
  return gulp.src(config.folderSrc)
    .pipe(deploy())
});

var gulp        = require('gulp');
var config      = require('../config');
var replace     = require('gulp-replace');
var deploy      = require('gulp-gh-pages');

gulp.task('gh-pages', function() {
  return gulp.src(config.deploy.folderSrc)
    .pipe(replace(config.url.urlLocal, config.url.urlProd))
    .pipe(deploy())
});

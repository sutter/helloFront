const gulp        = require('gulp');
const config      = require('../config');
const replace     = require('gulp-replace');
const deploy      = require('gulp-gh-pages');
const runSequence  = require('run-sequence');

gulp.task('deploy', callback => {
  runSequence(
    'replace',
    'gh-pages',
    callback
  )
});

gulp.task('replace', () => {
  return gulp.src(config.deploy.folderReplaceSrc)
    .pipe(replace(config.url.urlLocal, config.url.urlProd))
});

gulp.task('gh-pages', () => {
  return gulp.src(config.deploy.folderSrc)
    .pipe(deploy())
});

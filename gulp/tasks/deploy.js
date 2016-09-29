var gulp        = require('gulp');
var config      = require('../config');
var replace     = require('gulp-replace');
var deploy      = require('gulp-gh-pages');
var runSequence  = require('run-sequence');

gulp.task('deploy', function(callback){
  runSequence(
    'replace',
    'gh-pages',
    callback
  )
});

gulp.task('replace', function() {
  return gulp.src(config.deploy.folderReplaceSrc)
    .pipe(replace(config.url.urlLocal, config.url.urlProd))
});

gulp.task('gh-pages', function() {
  return gulp.src(config.deploy.folderSrc)
    .pipe(deploy())
});

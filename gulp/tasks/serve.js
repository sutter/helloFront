var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', ['style', 'template', 'script'], function() {
  browserSync.init(config.browserSync);
  gulp.watch(config.style.folderSrc, ['style']);
  gulp.watch(config.script.folderSrc, ['script']);
  gulp.watch(config.template.folderSrc, ['template']);
  gulp.watch(config.appBuild + '/**/*.css').on('change', browserSync.reload);
  gulp.watch(config.appBuild + '/**/*.js').on('change', browserSync.reload);
  gulp.watch(config.appBuild + '/**/*.html').on('change', browserSync.reload);

});

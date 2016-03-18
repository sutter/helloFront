var gulp         = require('gulp');
var config       = require('../config');
var browserSync  = require('browser-sync');
var watch        = require('gulp-watch');
var reload       = browserSync.reload;

gulp.task('watch', function () {

  watch(config.styles.files_src, function() {
    gulp.start('styles');
    reload();
  });

  watch(config.images.files_src, function() {
    gulp.start('images');
    reload();
  });

  watch(config.templates.files_src, function() {
    gulp.start('templates');
    reload();
  });

  watch(config.scripts.files_src, function() {
    gulp.start('scripts');
  });

  watch(config.scripts.main_dest, function() {
    reload();
  });

  watch(config.font_icon.files_src, function() {
    gulp.start('font-icon');
    gulp.start('styles');
    reload();
  });

  watch(config.fonts.src, function() {
    gulp.start('fonts');
    reload();
  });

});

var gulp        = require('gulp');
var config      = require('../config');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var watch       = require('gulp-watch');

gulp.task('watch', function (callback) {
  // Watch Sass Files
  watch(config.styles.folder_src, function() {
    gulp.start('styles');
  });

  // Watch JS Files
  watch(config.scripts.src, function() {
    gulp.start('jshint');
    gulp.start('scripts');
    reload();
  });

  // Watch Images Files
  watch(config.images.src, function() {
    gulp.start('images');
    reload();
  });

  // Watch IconFont Files
  watch(config.font_icon.files_src, function() {
    gulp.start('font-icon');
    gulp.start('styles');
    reload();
  });

  // Watch Font Files
  watch(config.fonts.src, function() {
    gulp.start('fonts');
    reload();
  });

  // Watch Templates Files
  watch(config.template.files_src, function() {
    gulp.start('template');
    reload();
  })

  // Watch Sketch file
  watch(config.font_icon.sketch_file_src, function() {
    gulp.start('sketch-icon');
  });

});

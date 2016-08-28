var gulp         = require('gulp');
var config       = require('../config');
var browserSync  = require('browser-sync');
var watch        = require('gulp-watch');
var runSequence  = require('run-sequence');

gulp.task('watch', function () {

  watch(config.styles.files_src, function() {
    gulp.start('styles');
    gulp.start('scsslinter');
  });

  watch(config.images.files_src, function() {
    runSequence('images', browserSync.reload);
  });

  watch(config.templates.files_src, function() {
    runSequence('templates', browserSync.reload);
  });

  watch(config.font_icon.files_src, function() {
    runSequence('font-icon', 'styles', browserSync.reload);
  });

  watch(config.fonts.src, function() {
    runSequence('fonts', browserSync.reload);
  });

});

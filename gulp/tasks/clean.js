var gulp        = require('gulp');
var del         = require('del');
var config      = require('../config');
var runSequence = require('run-sequence');

gulp.task('clean', del.bind(null, [
    config.appBuild,
    config.font_icon.path_create_icon_font_file,
    config.font_icon.files_dest,
    config.font_icon.files_src,
    config.styles.file_normalize_scss
]));

gulp.task('clean-images', function(cb) {
  del([config.images.dest], cb);
});

gulp.task('clean-normalize', function(cb) {
  del([config.styles.file_normalize_scss], cb);
});

gulp.task('clean-styles', function(cb) {
  del([config.styles.dest], cb);
});

gulp.task('clean-scripts', function(cb) {
  del([config.scripts.dest], cb);
});

gulp.task('clean-fonts', function(cb) {
  del([config.fonts.dest], cb);
});

gulp.task('clean-template', function(cb) {
  del([config.template.files_dest], cb);
});

gulp.task('clean-font-icon', function(cb) {
  del([
    config.font_icon.path_create_icon_font_file,
    config.font_icon.files_dest,
    config.font_icon.files_src
    ], cb);
});

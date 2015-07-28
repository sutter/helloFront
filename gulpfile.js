var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
requireDir('./gulp/tasks');

gulp.task('default', function(callback) {
  runSequence('clean', 'image', 'font-custom', 'copy', 'font', ['serve'], callback);
});

gulp.task('deploy', function(callback) {
  runSequence(['githubPage'], callback)
});

const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');

gulp.task('default', callback => {
  process.WATCH_SCRIPTS = true;
  runSequence('build', 'scsslinter', 'styleguide', 'browserSync', 'watch', callback);
});

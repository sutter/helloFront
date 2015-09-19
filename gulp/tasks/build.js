var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb){
  runSequence(
    'clean',
    'copy',
    'images',
    'font-icon',
    'fonts',
    'normalize',
    'styles',
    'jshint',
    'scripts',
    'template',
    cb
  )
});

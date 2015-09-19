var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb){
  runSequence(
    'clean',
    'rootfiles',
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

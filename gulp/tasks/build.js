var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb){
  runSequence(
    'clean',
    'copy',
    'images',
    'icon-font',
    'fonts',
    'normalize',
    'styles',
    'jshint',
    'scripts',
    'template',
    cb
  )
});

var gulp         = require('gulp');
var runSequence  = require('run-sequence');

gulp.task('build', function(callback){
  runSequence(
    'clean',
    'svgstore',
    'font-icon',
    ['normalize', 'styles', 'templates', 'images', 'rootfiles', 'fonts', 'scripts'],
    callback
  )
});

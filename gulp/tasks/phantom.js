var gulp = require('gulp');
var phantomcss = require('gulp-phantomcss');

gulp.task('phantomcss', function (){
  gulp.src('./testsuite.js')
    .pipe(phantomcss());
});

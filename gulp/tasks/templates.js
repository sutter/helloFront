var gulp         = require('gulp');
var config       = require('../config').templates;
var pug          = require('gulp-pug');
var md           = require('jstransformer')(require('jstransformer-markdown-it'));
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var gutil        = require("gulp-util");
var htmlmin      = require('gulp-htmlmin');
var size         = require('gulp-size');
var options      = require('minimist')(process.argv.slice(2));

gulp.task('templates', function() {
  return gulp.src(config.page_src)
    .pipe(plumber({
      errorHandler: notify.onError('PUG Error: <%= error.message %>')
    }))
    .pipe( pug({pretty: true}))
    .pipe(options.production ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(size({ title: 'template' }))
    .pipe(gulp.dest(config.dest));
});

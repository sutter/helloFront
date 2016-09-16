var gulp         = require('gulp');
var config       = require('../config');
var fs           = require('fs');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var notify       = require('gulp-notify');
var sourcemaps   = require('gulp-sourcemaps');
var gutil        = require("gulp-util");
var size         = require('gulp-size');
var scsslint     = require('gulp-scss-lint');
var csso         = require("gulp-csso");
var options      = require('minimist')(process.argv.slice(2));

function createNormalizeScss() {
  fs.createReadStream(config.styles.file_normalize_css)
    .pipe(fs.createWriteStream(config.styles.file_normalize_scss));
}

gulp.task('normalize', function() {
  createNormalizeScss();
});

gulp.task('styles', function() {
  return gulp.src(config.styles.files_src)
    .pipe(plumber({
      errorHandler: notify.onError('SASS Error: <%= error.message %>')
    }))
    .pipe(!options.production ? sourcemaps.init() : gutil.noop())
    .pipe(sass({ precision: 10 }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(!options.production ? sourcemaps.write('.') : gutil.noop())
    .pipe(options.production ? csso() : gutil.noop())
    .pipe(size({ title: 'style' }))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('scsslinter', function() {
  return gulp.src([
    config.styles.files_src,
    '!' + config.styles.file_normalize_scss,
    '!' + config.font_icon.path_create_icon_font_file,
    '!' + config.font_icon.path
  ])
    .pipe(plumber({
      errorHandler: notify.onError('SASS Error: <%= error.message %>')
    }))
    .pipe(scsslint({
      'bundleExec': true,
      'config': 'scss-lint.yml'
    }))
});

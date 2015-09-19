var gulp        = require('gulp');
var fs          = require('fs');
var iconfont    = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var browserSync = require('browser-sync').create();
var config      = require('../config').font_icon;
var utils       = require('./utils');
var sketch      = require('gulp-sketch');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');

gulp.task('sketch-icon', function() {
  return gulp.src(config.sketch_file_src)
    .pipe(sketch({
      export: "artboards",
      formats: "svg"
    }))
  .pipe(gulp.dest(config.src));
});

gulp.task('font-icon', function() {
  if (utils.checkDirectoryForExt(config.src, '.svg')){
    return gulp.src(config.files_src)
      .pipe(plumber({
        errorHandler: notify.onError('IconFont Error: <%= error.message %>')
      }))
      .pipe(iconfontCss({
        fontName: config.settings.font_name,
        path: config.path,
        targetPath: config.target_path,
        fontPath: config.font_path
      }))
      .pipe(iconfont({
        fontName: config.settings.font_name,
        appendCodepoints: config.settings.append_codepoints,
        normalize: config.settings.normalize,
        fontHeight: config.settings.font_height
      }))
      .pipe(gulp.dest(config.dest));
    return
  } else {
    // Create an Empty Icon SCSS File if there's no icons in the folder
    // Avoids SCSS errors when requiring a non-existent file
    console.info('IconFont source folder is empty, skipping iconFont creation...')
    utils.createEmptyFile(config.path_create_icon_font_file);
  }
});

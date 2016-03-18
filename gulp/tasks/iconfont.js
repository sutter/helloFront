var gulp         = require('gulp');
var fs           = require('fs');
var iconfont     = require('gulp-iconfont');
var iconfontCss  = require('gulp-iconfont-css');
var config       = require('../config').font_icon;
var utils        = require('./utils');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var runTimestamp = Math.round(Date.now()/1000);


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
        prependUnicode: true,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: runTimestamp,
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

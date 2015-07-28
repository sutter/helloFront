var gulp = require('gulp');
var fs = require('fs');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var config = require('../config').fontCustom;

function createIconFontFile() {
  fs.writeFile(config.pathCreateIconFontFile, '', function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

gulp.task('font-custom', function() {
  createIconFontFile();
  return gulp.src(config.folderSrc)
    .pipe(iconfontCss({
      fontName: config.fontName,
      path: config.path,
      targetPath: config.targetPath,
      fontPath: config.fontPath
    }))
    .pipe(iconfont({
      fontName: config.fontName,
      appendCodepoints: true,
      normalize:true,
      fontHeight:512
    }))
    .pipe(gulp.dest(config.folderDest));
});

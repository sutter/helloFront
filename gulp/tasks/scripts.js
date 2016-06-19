var gulp         = require('gulp');
var webpack      = require('webpack-stream');
var config       = require('../config').scripts;
var named        = require('vinyl-named');
var browserSync  = require('browser-sync');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');

var webpackConfig = require('../../webpack.config.js');

function webpackChangeHandler (_, stats) {
  gutil.log("[webpack]", stats.toString({
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
    version: false,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
  }));
  browserSync.reload();
}

gulp.task('scripts', function() {
  if (process.WATCH_SCRIPTS) webpackConfig.watch = true;

  var webpackStream = gulp.src(config.main_src)
      .pipe(plumber({
        errorHandler: gutil.noop, // prevent double errors in console
      }))
      .pipe(named())
      .pipe(webpack(webpackConfig, null, webpackChangeHandler))
      .pipe(gulp.dest(config.dest));

  if (!process.WATCH_SCRIPTS) {
    return webpackStream; // return the stream if scripts watch is disabled to properly finish the script tasks
  }
});

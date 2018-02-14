const gulp = require("gulp");
const webpack = require("webpack-stream");
const config = require("../config").scripts;
const named = require("vinyl-named");
const browserSync = require("browser-sync");
const gutil = require("gulp-util");
const plumber = require("gulp-plumber");
const options = require("minimist")(process.argv.slice(2));

const webpackConfig = options.production
  ? require("../../webpack/webpack.config.prod")
  : require("../../webpack/webpack.config.dev");

const webpackChangeHandler = (_, stats) => {
  gutil.log(
    "[webpack]",
    stats.toString({
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
      errorDetails: false,
    })
  );
  browserSync.reload();
};

gulp.task("scripts", () => {
  if (process.WATCH_SCRIPTS) webpackConfig.watch = true;

  const webpackStream = gulp
    .src(config.main_src)
    .pipe(
      plumber({
        errorHandler: gutil.noop, // prevent double errors in console
      })
    )
    .pipe(named())
    .pipe(webpack(webpackConfig, null, webpackChangeHandler))
    .pipe(gulp.dest(config.dist));

  if (!process.WATCH_SCRIPTS) {
    return webpackStream; // return the stream if scripts watch is disabled to properly finish the script tasks
  }
});

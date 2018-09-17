const gulp = require("gulp");
const config = require("../config");
const fs = require("fs");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const gutil = require("gulp-util");
const size = require("gulp-size");
const cssnano = require("gulp-cssnano");
const options = require("minimist")(process.argv.slice(2));

gulp.task("styles", () => {
  return gulp
    .src(config.styles.files_src)
    .pipe(
      plumber({
        errorHandler: notify.onError("SASS Error: <%= error.message %>"),
      })
    )
    .pipe(!options.production ? sourcemaps.init() : gutil.noop())
    .pipe(sass({ precision: 10 }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(!options.production ? sourcemaps.write(".") : gutil.noop())
    .pipe(options.production ? cssnano() : gutil.noop())
    .pipe(size({ title: "style" }))
    .pipe(gulp.dest(config.styles.dist));
});

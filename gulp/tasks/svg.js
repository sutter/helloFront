const gulp = require("gulp");
const config = require("../config").svg;
const imagemin = require("gulp-imagemin");
const size = require("gulp-size");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

gulp.task("svg", () => {
  return gulp
    .src(config.files_src)
    .pipe(
      plumber({
        errorHandler: notify.onError("SVG Error: <%= error.message %>"),
      })
    )
    .pipe(
      imagemin(
        [
          imagemin.svgo({
            plugins: [{ removeViewBox: false }, { removeDimensions: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(
      size({
        title: "svg",
      })
    )
    .pipe(gulp.dest(config.dist));
});

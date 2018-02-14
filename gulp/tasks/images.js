const gulp = require("gulp");
const config = require("../config").images;
const imagemin = require("gulp-imagemin");
const size = require("gulp-size");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

gulp.task("images", () => {
  return gulp
    .src(config.files_src)
    .pipe(
      plumber({
        errorHandler: notify.onError("Images Error: <%= error.message %>"),
      })
    )
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
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
        title: "image",
      })
    )
    .pipe(gulp.dest(config.dist));
});

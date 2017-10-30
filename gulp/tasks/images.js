const gulp = require("gulp");
const config = require("../config").images;
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
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
      imagemin({
        progressive: true,
        svgoPlugins: [
          {
            removeViewBox: false,
          },
        ],
        use: [pngquant()],
      })
    )
    .pipe(
      size({
        title: "image",
      })
    )
    .pipe(gulp.dest(config.dest));
});

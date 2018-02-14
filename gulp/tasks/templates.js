const gulp = require("gulp");
const config = require("../config").templates;
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gutil = require("gulp-util");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const options = require("minimist")(process.argv.slice(2));

gulp.task("templates", () => {
  return gulp
    .src(config.page_src)
    .pipe(
      plumber({
        errorHandler: notify.onError("PUG Error: <%= error.message %>"),
      })
    )
    .pipe(pug({ pretty: true }))
    .pipe(
      options.production ? htmlmin({ collapseWhitespace: true }) : gutil.noop()
    )
    .pipe(size({ title: "template" }))
    .pipe(gulp.dest(config.dist));
});

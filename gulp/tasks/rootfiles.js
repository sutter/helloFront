const gulp = require("gulp");
const config = require("../config").rootfiles;

gulp.task("rootfiles", () => {
  return gulp
    .src(config.src, {
      dot: true,
    })
    .pipe(gulp.dest(config.dist));
});

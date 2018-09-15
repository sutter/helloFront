const gulp = require("gulp");
const config = require("../config");
const browserSync = require("browser-sync");
const watch = require("gulp-watch");
const runSequence = require("run-sequence");

gulp.task("watch", () => {
  watch(config.styles.files_src, "./src/assets", function() {
    runSequence("styles");
  });

  watch(config.images.files_src, () => {
    runSequence("images", browserSync.reload);
  });

  watch(config.templates.files_src, () => {
    runSequence("templates", browserSync.reload);
  });

  watch(config.fonts.src, () => {
    runSequence("fonts", browserSync.reload);
  });
});

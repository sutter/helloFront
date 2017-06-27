const gulp = require("gulp");
const config = require("../config").browserSync;
const browserSync = require("browser-sync");
const reload = browserSync.reload;

gulp.task("browserSync", () => {
  browserSync(config);
});

gulp.task("browserSync-reload", () => {
  browserSync.reload();
});

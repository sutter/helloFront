const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("build", callback => {
  runSequence(
    "clean",
    "svg",
    "icons",
    ["styles", "templates", "images", "rootfiles", "fonts", "scripts"],
    callback
  );
});

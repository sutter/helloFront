const gulp = require("gulp");
const config = require("../config");
const rev = require("gulp-rev");
const revdel = require("gulp-rev-delete-original");
const revReplace = require("gulp-rev-replace");

gulp.task("rev", () => {
  console.log([config.assets_dist + "/**.css", config.assets_dist + "/**.js"]);
  return gulp
    .src([config.assets_dist + "/**.css", config.assets_dist + "/**.js"], {
      dot: true,
    })
    .pipe(rev())
    .pipe(revdel())
    .pipe(gulp.dest(config.assets_dist))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.assets_dist));
});

gulp.task("revreplace", () => {
  const manifest = gulp.src(config.assets_dist + "/rev-manifest.json");
  return gulp
    .src(config.dist + "/**/*.html")
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(config.dist));
});

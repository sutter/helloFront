const gulp = require("gulp");
const config = require("../config");
const rev = require("gulp-rev");
const revdel = require("gulp-rev-delete-original");
const revReplace = require("gulp-rev-replace");

gulp.task("rev", () => {
  console.log([config.assets_dest + "/**.css", config.assets_dest + "/**.js"]);
  return gulp
    .src([config.assets_dest + "/**.css", config.assets_dest + "/**.js"], {
      dot: true,
    })
    .pipe(rev())
    .pipe(revdel())
    .pipe(gulp.dest(config.assets_dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.assets_dest));
});

gulp.task("revreplace", () => {
  const manifest = gulp.src(config.assets_dest + "/rev-manifest.json");
  return gulp
    .src(config.build + "/**/*.html")
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(config.build));
});

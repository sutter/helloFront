const gulp = require("gulp");
const config = require("../config").icons;
const utils = require("./utils");
const imagemin = require("gulp-imagemin");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");

gulp.task("icons", () => {
  if (utils.checkDirectoryForExt(config.dir, ".svg")) {
    return gulp
      .src(config.src_files)
      .pipe(rename({ prefix: "spriteIcon-" }))
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
        svgSprite({
          mode: {
            symbol: {
              dest: config.dest,
              sprite: "icons.svg",
              inline: true,
            },
          },
        })
      )
      .pipe(gulp.dest(config.dir));
  } else
    console.info(
      "Icon source folder is empty, skipping svg sprite icon creation"
    );
});

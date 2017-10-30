const gulp = require("gulp");
const config = require("../config").svgstore;
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const path = require("path");

gulp.task("svgstore", () => {
  return gulp
    .src(config.files_src_svg_sprites)
    .pipe(
      svgmin(function(file) {
        const prefix = path.basename(
          file.relative,
          path.extname(file.relative)
        );
        return {
          plugins: [
            {
              cleanupIDs: {
                prefix: prefix + "-",
                minify: true,
              },
            },
          ],
        };
      })
    )
    .pipe(svgstore())
    .pipe(gulp.dest(config.dest));
});

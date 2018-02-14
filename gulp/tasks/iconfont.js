const gulp = require("gulp");
const fs = require("fs");
const iconfont = require("gulp-iconfont");
const iconfontCss = require("gulp-iconfont-css");
const config = require("../config").font_icon;
const utils = require("./utils");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const runTimestamp = Math.round(Date.now() / 1000);

gulp.task("font-icon", () => {
  if (
    utils.checkDirectoryForExt(config.src, ".svg") &&
    config.enable === true
  ) {
    return gulp
      .src(config.files_src)
      .pipe(
        plumber({
          errorHandler: notify.onError("IconFont Error: <%= error.message %>"),
        })
      )
      .pipe(
        iconfontCss({
          fontName: config.settings.font_name,
          path: config.path,
          targetPath: config.target_path,
          fontPath: config.font_path,
        })
      )
      .pipe(
        iconfont({
          fontName: config.settings.font_name,
          prependUnicode: config.settings.prependUnicode,
          formats: ["woff", "woff2"],
          timestamp: runTimestamp,
          normalize: config.settings.normalize,
          fontHeight: config.settings.font_height,
        })
      )
      .pipe(gulp.dest(config.dist));
    return;
  } else if (config.enable === true) {
    // Create an Empty Icon SCSS File if there's no icons in the folder
    // Avoids SCSS errors when requiring a non-existent file
    console.info(
      "IconFont source folder is empty, skipping iconFont creation..."
    );
    utils.createEmptyFile(config.path_create_icon_font_file);
  } else {
    console.info("IconFont is disabled, skipping iconFont creation...");
  }
});

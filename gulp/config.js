const src = "./src";
const dist = "./dist";
const fontName = "app-font";
const assets_dist = "./dist/assets";

module.exports = {
  src: src,
  dist: dist,
  assets_dist: assets_dist,

  browserSync: {
    notify: false,
    open: false,
    server: dist,
    files: [dist + "/**/*.css"],
  },

  styles: {
    src: src + "/assets/scss",
    files_src: src + "/assets/scss/**/*.scss",
    dist: assets_dist,
  },

  scripts: {
    files_src: src + "/assets/js/**/*.js",
    main_src: src + "/assets/js/main.js",
    main_name: "main.js",
    dist: assets_dist,
  },

  templates: {
    src: src + "/template",
    files_src: [src + "/template/**/*.pug", src + "/template/**/*.md"],
    page_src: src + "/template/pages/**/*.pug",
    dist: dist,
    files_dist: dist + "/**/*.html",
  },

  icons: {
    dir: src + "/assets/icons/",
    src_files: [
      `${src}/assets/icons/**/*.svg`,
      `!${src}/assets/icons/symbol/**/*`,
    ],
  },

  svg: {
    files_src: [
      "!" + src + "/assets/img/sprite/**/*.svg",
      "!" + src + "/assets/img/sprite.svg",
      src + "/assets/img/**/*.svg",
    ],
    dist: src + "/assets/img",
  },

  images: {
    files_src: [
      "!" + src + "/assets/img/sprite/**/*.svg",
      "!" + src + "/assets/img/sprite.svg",
      src + "/assets/img/**/*.{jpg,png,gif, svg}",
    ],
    dist: assets_dist,
  },

  rootfiles: {
    src: src + "/rootfiles/**",
    dist: dist,
  },

  fonts: {
    src: src + "/assets/fonts/**",
    dist: assets_dist,
  },
};

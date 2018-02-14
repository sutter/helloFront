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

  svgstore: {
    files_src_svg_sprites: src + "/assets/img/sprite/*.svg",
    dist: src + "/assets/img",
    file_dist: src + "/assets/img/sprite.svg",
  },

  rootfiles: {
    src: src + "/rootfiles/**",
    dist: dist,
  },

  fonts: {
    src: src + "/assets/fonts/**",
    dist: assets_dist,
  },

  font_icon: {
    enable: false,
    path_create_icon_font_file: src + "/assets/scss/atoms/_icons.scss",
    src: src + "/assets/icons",
    files_src: src + "/assets/icons/*.svg",
    path: src + "/assets/scss/tools/_template-font-custom.scss",
    target_path: "../scss/atoms/_icons.scss",
    font_path: "../fonts/",
    dist: src + "/assets/fonts",
    files_dist: src + "/assets/fonts/" + fontName + ".{eot,svg,ttf,woff}",
    settings: {
      prependUnicode: true,
      font_name: fontName,
      normalize: true,
      font_height: 512,
    },
  },

  url: {
    urlLocal: "http://localhost:3000",
    urlProd: "http://sutter.github.io/helloFront",
  },

  deploy: {
    folderSrc: dist + "/**/*",
    folderReplaceSrc: [
      dist + "/**/*.html",
      dist + "/**/*.js",
      dist + "/**/*.css",
    ],
  },
};

var app    = './app';
var build  = './build';
var fontName  = 'app-font';

module.exports = {

  app: app,
  build:  build,

  browserSync: {
    notify: false,
    open:   false,
    server: build,
    files: [
      build + '/**/*.css'
    ],
  },

  styles: {
    src :                app + '/assets/scss',
    files_src:           app + '/assets/scss/**/*.scss',
    main_dest:           build + '/assets/css/main.css',
    dest:                build + '/assets/css/',
    file_normalize_css:  './node_modules/normalize.css/normalize.css',
    file_normalize_scss: app + '/assets/scss/base/_b-normalize.scss'
  },

  scripts: {
    files_src: app + '/assets/js/**/*.js',
    main_src:  app + '/assets/js/main.js',
    main_name: 'main.js',
    dest:      build + '/assets/js/',
    main_dest: build + '/assets/js/main.js'
  },

  templates: {
    src:        app + '/template',
    files_src:  app + '/template/**/*.pug',
    page_src:   app + '/template/pages/**/*.pug',
    dest:       build,
    files_dest: build + '/**/*.html'
  },

  images: {
    files_src: [
      '!' + app + '/assets/img/sprite/**/*.svg',
      '!' + app + '/assets/img/sprite.svg',
      app + '/assets/img/**/*.{jpg,png,gif,svg}'
    ],
    dest:      build + '/assets/img'
  },

  svgstore: {
    files_src_svg_sprites: app + '/assets/img/sprite/*.svg',
    dest:                  app + '/assets/img',
    file_dest:             app + '/assets/img/sprite.svg'
  },

  rootfiles: {
    src:  app + '/rootfiles/**',
    dest: build
  },

  fonts: {
    src:  app + '/assets/fonts/**',
    dest: build + '/assets/fonts'
  },

  font_icon: {
    path_create_icon_font_file: app + '/assets/scss/components/_icons.scss',
    src:                        app + '/assets/icons',
    files_src:                  app + '/assets/icons/*.svg',
    path:                       app + '/assets/scss/tools/_template-font-custom.scss',
    target_path:                '../scss/components/_icons.scss',
    font_path:                  '../fonts/',
    dest:                       app + '/assets/fonts',
    files_dest:                 app + '/assets/fonts/' + fontName + '.{eot,svg,ttf,woff}',
    settings: {
      prependUnicode:          true,
      font_name:               fontName,
      normalize:               true,
      font_height:             512
    }
  },

  url: {
    urlLocal: 'http://localhost:3000',
    urlProd: 'http://sutter.github.io/helloFront'
  },

  deploy: {
    folderSrc:  build + '/**/*',
    folderReplaceSrc:  [
      build + '/**/*.html',
      build + '/**/*.js',
      build + '/**/*.css'
    ]
  }

};

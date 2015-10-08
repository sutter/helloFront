var appSource = './app';
var appBuild  = './build';
var fontName  = 'app-font';

module.exports = {
  appSource: appSource,
  appBuild: appBuild,
  fontName: fontName,
  browserSync: {
    notify: false,
    open: false,
    server: appBuild,
    files: [
      appBuild + '/assets/css/index.css'
    ],
  },
  styles: {
    src :                appSource + '/assets/scss',
    folder_src:          appSource + '/assets/scss/**/*.scss',
    main_src:            appSource + '/assets/scss/index.scss',
    dest:                appBuild + '/assets/css/',
    file_normalize_css:  './node_modules/normalize.css/normalize.css',
    file_normalize_scss: appSource + '/assets/scss/base/_b-normalize.scss'
  },
  template: {
    src:        appSource + '/template',
    files_src:  appSource + '/template/**/*.jade',
    page_src:   appSource + '/template/pages/**/*.jade',
    dest:       appBuild,
    files_dest: appBuild + '/**/*.html'
  },
  scripts: {
    src: [
     'node_modules/jquery/dist/jquery.min.js',
      appSource + '/assets/js/application.js'
    ],
    dest: appBuild + '/assets/js/',
    jshint: [
      appSource + '/assets/js/application.js'
    ],
    modernizr_settings : {
      "options": [
        "html5shiv",
        "setClasses"
      ],
      "tests": [
        "touchevents",
        "flexbox",
        "csscalc",
        "csstransforms3d",
        "csspositionsticky"
      ]
    }
  },
  images: {
    src: appSource + '/assets/img/**/*.{jpg,png,gif,svg}',
    dest: appBuild + '/assets/img'
  },
  fonts: {
    src: appSource + '/assets/font/**',
    dest: appBuild + '/assets/font'
  },
  font_icon: {
    sketch_file_src:            appSource + '/assets/icon.sketch',
    path_create_icon_font_file: appSource + '/assets/scss/components/_icons.scss',
    src:                        appSource + '/assets/icon',
    files_src:                  appSource + '/assets/icon/*.svg',
    path:                       appSource + '/assets/scss/tools/_template-font-custom.scss',
    target_path:                '../scss/components/_icons.scss',
    font_path:                  '../font/',
    dest:                       appSource + '/assets/font',
    files_dest:                 appSource + '/assets/font/' + fontName + '.{eot,svg,ttf,woff}',
    settings: {
      font_name:         fontName,
      append_codepoints: true,
      normalize:        true,
      font_height:       512
    }
  },
  rootfiles: {
    src: appSource + '/rootfiles/**',
    dest: appBuild
  },
  deploy: {
    folderSrc: appBuild + '/**/*'
  }
};

var appSource = './app';
var appBuild = './build';
var fontName = 'app-font';
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  appSource: appSource,
  appBuild: appBuild,
  fontName: fontName,
  browserSync: {
    notify: false
  },
  template: {
    filesSrc: appSource + '/template/pages/**/*.jade',
    folderSrc: appSource + '/template/**/*.jade',
    folderDest: appBuild
  },
  script: {
    folderSrc: appSource + '/assets/js/**/*.js',
    folderDest: appBuild + '/assets/js/'
  },
  style: {
    folderSrc: appSource + '/assets/scss/**/*.scss',
    mainSrc: appSource + '/assets/scss/application.scss',
    folderDest: appBuild + '/assets/css/',
    fileNormalizeCss: './node_modules/normalize.css/normalize.css',
    fileNormalizeScss: appSource + '/assets/scss/base/_b-normalize.scss'
  },
  clean: {
    filesSrc: [
      appBuild,
      appSource + '/assets/font/' + fontName + '.{eot,svg,ttf,woff}',
      appSource + '/assets/scss/components/_icons.scss',
      appSource + '/assets/scss/base/_b-normalize.scss'
    ]
  },
  image: {
    folderSrc: appSource + '/assets/img/**/*.{jpg,png,gif,svg}',
    folderDest: appBuild + '/assets/img'
  },
  font: {
    folderSrc: appSource + '/assets/font/**',
    folderDest: appBuild + '/assets/font'
  },
  fontCustom: {
    pathCreateIconFontFile: appSource + '/assets/scss/components/_icons.scss',
    folderSrc: appSource + '/assets/icon/*.svg',
    fontName: fontName,
    path: appSource + '/assets/scss/tools/_template-font-custom.scss',
    targetPath: '../scss/components/_icons.scss',
    fontPath: '../font/',
    folderDest: appSource + '/assets/font'
  },
  browserSync: {
    notify: false,
    server: appBuild,
  },
  copy: {
    filesSrc: [
      appSource + '/.htaccess',
      appSource + '/robots.txt',
      appSource + '/favicon.ico',
    ],
    folderDest: appBuild
  },
  deploy: {
    folderSrc: appBuild + '/**/*'
  }
};

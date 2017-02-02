const gulp         = require('gulp');
const del          = require('del');
const config       = require('../config');


gulp.task('clean', del.bind(null, [
  config.build,
  config.styles.file_normalize_scss,
  config.svgstore.file_dest
]));

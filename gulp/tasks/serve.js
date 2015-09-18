var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var watch = require('gulp-watch');

gulp.task('serve', ['image', 'style', 'template', 'script'], function() {
    browserSync.init(config.browserSync);
    //gulp.watch(config.style.folderSrc, ['style', reload]);

    watch(config.style.folderSrc, function() {
        gulp.start('style');
        reload();
    });
    watch(config.script.folderSrc, function() {
        gulp.start('script');
        reload();
    });
    watch(config.template.folderSrc, function() {
        gulp.start('template');
        reload();
    });
    watch(config.image.folderSrc, function() {
        gulp.start('image');
    });
    watch(config.font.folderSrc, function() {
        gulp.start('font');
    });
    watch(config.fontCustom.folderSrc, function() {
        gulp.start('font-custom');
    });
});

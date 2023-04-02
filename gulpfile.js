gulp = require('gulp'),
browserSync = require('browser-sync').create()
function watch(){
    browserSync.init({
    server: "./work_directory"
    });
    gulp.watch('./work_directory/*.html').on('change', browserSync.reload);
    gulp.watch('./work_directory/*.css').on('change', browserSync.reload);
}
gulp.task('watch', watch);
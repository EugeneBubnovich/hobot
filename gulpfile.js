const gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
        port: 8080,
        open: true,
        notify: false
    })
});


gulp.task('watch', ['browserSync'], function () {
    gulp.watch('src/*.html', browserSync.reload);
});
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// 本地服务器功能，自动刷新（dev）
gulp.task('startserver', ()=>{
  browserSync.init({
    server: './'
  });
  gulp.watch('./**/*.css').on('change', reload);
  gulp.watch('./**/*.html').on('change', reload);
  gulp.watch('./**/*.js').on('change', reload);
});
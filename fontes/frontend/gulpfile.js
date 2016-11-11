var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

// HTML Task
gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});


gulp.task('styles', function() {
    gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

// CSS Task
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

// JS Task
gulp.task('js', function () {
  gulp.src('./app/js/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html', './app/**/*.html'], ['html']);
  gulp.watch('./app/sass/**/*.scss',['styles']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/**/*.js'], ['js']);
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    livereload: true,
    port: 5000,
  });
});

gulp.task('default', ['connect', 'watch']);

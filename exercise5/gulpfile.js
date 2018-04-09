var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var watch = require('gulp-watch');
 
gulp.task('less', function () {
  return gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('pug', function() {
  return gulp.src('./src/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/*.less', ['less']);
});

gulp.task('default', [ 'watch' ]);
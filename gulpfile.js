const gulp = require('gulp'),
      sass = require('gulp-sass'),
      eslint = require('gulp-eslint'),
      concat = require('gulp-concat'),
      gulpCopy = require('gulp-copy'),
      uglify = require('gulp-uglify-es').default,
      livereload = require('gulp-livereload'),
      del = require('del'),
      pump = require ('pump');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss').pipe(sass()).pipe(gulp.dest('./prod/css'));
});

gulp.task('eslint', () => {
  return gulp.src('./scripts/jquery.js').pipe(eslint()).pipe(eslint.failAfterError()).pipe(gulp.dest('./prod/eslint'));
});

gulp.task('live', () => {
  livereload.listen();
  gulp.watch('./scripts/**/*.js', ['eslint']);
});

gulp.task('del', ()=> {
  return del([
    './prod'
   ]);
 });

gulp.task('concat', () => {
  return gulp.src('./scripts/**/*.js').pipe(concat('app.js', {newLine: '//New concat file \n'})).pipe(gulp.dest('./prod/js'))
});

gulp.task ('copyMainPage', () => {
  return gulp.src('./index.html').pipe(gulp.dest('./prod'));
});

gulp.task('compress', (cb) => {
  pump([
      gulp.src('./scripts/**/*.js'),
      uglify(),
      gulp.dest('./prod/compress'),
  ], cb);
});

gulp.task('start', [ 'sass', 'concat', 'compress', 'copyMainPage']);



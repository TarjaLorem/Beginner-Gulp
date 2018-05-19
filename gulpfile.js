const gulp = require('gulp'),
      sass = require('gulp-sass'),
      eslint = require('gulp-eslint'),
      concat = require('gulp-concat'),
      gulpCopy = require('gulp-copy'),
      uglify = require('gulp-uglify-es').default,
      livereload = require('gulp-livereload'),
      del = require('del');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss').pipe(sass()).pipe(gulp.dest('./css'));
});

gulp.task('eslint', () => {
  return gulp.src('./scripts/**/*.js').pipe(eslint()).pipe(eslint.failAfterError()).pipe(gulp.dest('./dist/js'));
});

gulp.task('live', () => {
  livereload.listen();
  gulp.watch('./scripts/**/*.js', ['eslint']);
});

gulp.task('del', ()=> {
  return del([
    './css',
    './js'
   ]);
 });

gulp.task('concat', () => {
  return gulp.src('./scripts/**/*.js').pipe(concat('index.js', {newLine: '//New concat file \n'})).pipe(gulp.dest('./dist/concat'))
});

gulp.task('compress', () => {
  return gulp.src('./scripts/uglify-index.js').pipe(uglify()).pipe(gulp.dest('./dist/compress'));
});

gulp.task ('copy', () => {
  return gulp.src('./scripts/copy-index.js').pipe(gulpCopy('./scripts', { prefix: 1 })).pipe(gulp.dest('./dist/copy'));
});

gulp.task('bundled', ['eslint', 'sass']);


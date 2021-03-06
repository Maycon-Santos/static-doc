const postcss = require('gulp-postcss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const gulp = require('gulp')

function transformCss () {
  return gulp
    .src('./theme/**/*.css')
    .pipe(postcss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'))
}

function transformTs () {
  return gulp
    .src(['./theme/**/*.ts', './theme/**/*.tsx'])
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
}

if (process.argv.includes('--watch')) {
  gulp.watch(
    ['./theme/**/*.ts', './theme/**/*.tsx', './theme/**/*.css'],
    gulp.parallel(transformTs, transformCss)
  )
}

const tasks = process.argv.includes('--pre-deploy')
  ? gulp.parallel(transformCss)
  : gulp.parallel(transformTs, transformCss)

exports.default = tasks

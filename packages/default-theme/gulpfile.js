const postcss = require('gulp-postcss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const gulp = require('gulp')

function transformCss () {
  return gulp.src('./theme/**/*.css')
    .pipe(postcss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'))
}

function transformTs () {
  return gulp.src(['./theme/**/*.ts', './theme/**/*.tsx'])
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
}

if (process.argv.includes('--watch')) {
  gulp.watch(['./theme/**/*.css'], transformCss)
}

if (process.argv.includes('--watch')) {
  gulp.watch(['./theme/**/*.ts', './theme/**/*.tsx'], transformTs)
}

exports.default = gulp.parallel(transformTs, transformCss)

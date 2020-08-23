const postcss = require('gulp-postcss')
const concat = require('gulp-concat')
const gulp = require('gulp')

function transformCss () {
  return gulp.src('./theme/**/*.css')
    .pipe(postcss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'))
}

if (process.argv.includes('--watch')) {
  gulp.watch(['./theme/**/*.css'], transformCss)
}

exports.default = transformCss

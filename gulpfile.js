const path = require('path');

const {
  src,
  dest,
  series,
  parallel
} = require('gulp');

const header = require('gulp-header');
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pkg = require('./package.json');

const banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' */',
  ''
].join('\n');


function cssrtl() {
  return src(['./docs/assets/css/chaldene.css'])
    .pipe(rtlcss())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(rename({
      suffix: '.rtl'
    }))
    .pipe(dest('docs/assets/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      pkg
    }))
    .pipe(dest('docs/assets/css'));
}

function js() {
  return src(['./js/*.js'])
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(header(banner, {pkg}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('docs/assets/js'))
    .pipe(uglify())
    .pipe(header(banner, {pkg}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('docs/assets/js'));
}

exports.cssrtl = cssrtl;
exports.js = js;

exports.default = series(cssrtl, js);

const {
  src,
  dest,
  series,
  parallel
} = require('gulp');

const header = require('gulp-header');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');
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

function cssltr() {
  return src(['./source/less/chaldene.less', './less/theme-*.less'])
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(dest('docs/assets/css'))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      pkg
    }))
    .pipe(dest('docs/assets/css'));
}

function cssrtl() {
  return src(['./source/less/chaldene.less', './less/theme-*.less'])
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rtlcss())
    .pipe(header(banner, {
      pkg
    }))
    .pipe(rename({
      suffix: '-rtl'
    }))
    .pipe(dest('docs/assets/css'))
    .pipe(cssnano())
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
    .pipe(header(banner, {pkg}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('docs/assets/js'))
    .pipe(uglify())
    .pipe(header(banner, {pkg}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('docs/assets/js'));
}

const css = parallel(cssltr, cssrtl);

exports.cssltr = cssltr;
exports.cssrtl = cssrtl;
exports.css = css;
exports.js = js;

exports.rtl = parallel(cssrtl);

exports.default = series(css, js);

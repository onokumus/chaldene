const path = require('path');

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
const concat = require('gulp-concat');
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

const vnd = 'docs/assets/vendor';


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

function bsrtl() {
  return src('docs/assets/vendor/bootstrap/css/bootstrap.css')
    .pipe(rtlcss())
    .pipe(rename('bootstrap-rtl.css'))
    .pipe(dest('docs/assets/vendor/bootstrap/css/'));
}

function bsrtlmin() {
  return src('docs/assets/vendor/bootstrap/css/bootstrap.min.css')
    .pipe(rtlcss())
    .pipe(rename('bootstrap-rtl.min.css'))
    .pipe(dest('docs/assets/vendor/bootstrap/css/'));
}

function vendorcss() {
  return src([
      `${vnd}/bootstrap/css/bootstrap.min.css`,
      `${vnd}/animate.css/animate.min.css`,
      `${vnd}/metismenu/metisMenu.min.css`,
      `${vnd}/metis-canvas/metis-canvas.min.css`,
    ])
    .pipe(concat('vendor.css'))
    .pipe(dest('docs/assets/css'));
}

function vendorcssrtl() {
  return src([
      `${vnd}/bootstrap/css/bootstrap-rtl.min.css`,
      `${vnd}/animate.css/animate.min.css`,
      `${vnd}/metismenu/metisMenu.min.css`,
      `${vnd}/metis-canvas/metis-canvas.min.css`,
    ])
    .pipe(concat('vendor-rtl.css'))
    .pipe(dest('docs/assets/css'));
}

function vendorjs() {
  return src([
      `${vnd}/jquery/jquery.min.js`,
      `${vnd}/bootstrap/js/bootstrap.min.js`,
      `${vnd}/moment/moment.min.js`,
      `${vnd}/metismenu/metisMenu.min.js`,
      `${vnd}/metis-canvas/metis-canvas.min.js`,
      `${vnd}/screenfull/screenfull.min.js`,
      `${vnd}/in-view/in-view.min.js`,
    ])
    .pipe(concat('vendor.js'))
    .pipe(dest('docs/assets/js'));
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

function fonts() {
  return src([
    `${vnd}/bootstrap/fonts/*.*`,
    `${vnd}/font-awesome/fonts/*.*`
  ])
  .pipe(dest('docs/assets/fonts'))
}

const css = parallel(cssltr, cssrtl);
const bs = parallel(bsrtl, bsrtlmin);
const vendor = parallel(vendorjs, vendorcss, vendorcssrtl);

exports.cssltr = cssltr;
exports.cssrtl = cssrtl;
exports.bsrtl = bsrtl;
exports.bsrtlmin = bsrtlmin;
exports.css = css;
exports.js = js;
exports.fonts = fonts;
exports.vendorjs = vendorjs;
exports.vendor = vendor;

exports.rtl = parallel(cssrtl, bsrtl, bsrtlmin, vendorcssrtl, vendorjs, fonts);

exports.default = series(cssltr, js, vendorcss, vendorjs, fonts);

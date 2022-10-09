'use strict';
var assemble = require('assemble');
var extname = require('gulp-extname');
var path = require('path');
var helpers = require('handlebars-helpers');
var prettify = require('gulp-prettify');
var pkg = require('./package.json');

var vnd = 'docs/assets/vendor';

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' */',
  ''
].join('\n');

var app = assemble();
app.create('home');


app.task('init', function(cb) {
  var demo = app.options.demo;
  var projectName = 'Chaldene';
  var imgExt = 'svg';

  app.data({
    topNav: false
  });
  app.data('rtl', app.options.rtl);
  app.data('demo', demo);
  app.data('hasColumn', false);
  app.data('imgExt', imgExt);
  app.data('projectName', projectName);
  app.data('prod', app.options.prod);
  app.option('layout', 'first');
  app.option('assets', 'assets/');
  app.helper('math', helpers.math());
  app.helper('number', helpers.number());
  app.helper('date', helpers.date());
  app.helper('html', helpers.html());
  app.helper('object', helpers.object());
  app.helper('comparison', helpers.comparison());
  app.helper('markdown', helpers.markdown());
  app.data(['./templates/data/**/*.json']);
  app.data('pkg', pkg);
  app.layouts(path.join(__dirname, './templates/layouts/**/*.hbs'));
  app.partials(path.join(__dirname, './templates/includes/**/*.hbs'));
  app.pages(path.join(__dirname, './templates/content/**/*.hbs'));
  cb();
});


app.task('content', ['init'], function() {
  app.option('layout', 'first');
  app.data('lay', 'first');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .on('err', console.error)
    .pipe(prettify({
      indent_inner_html: false,
      preserve_newlines: true,
      end_with_newline: true,
      extra_liners: ['head', 'body']
    }))
    .pipe(extname())
    .pipe(app.dest(path.join(__dirname, './docs')));
});


app.task('default', ['content'], function() {});

module.exports = app;

'use strict';

var assemble = require('assemble');
var extname = require('gulp-extname');
var path = require('path');
var rename = require('gulp-rename');
var helpers = require('handlebars-helpers');
var prettify = require('gulp-prettify');
var pkg = require('./package.json');
var bower = require('./bower.json');
var app = assemble();

app.task('default', function() {
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
  app.data('bower', bower);
  app.layouts('templates/layouts/**/*.hbs');
  app.partials('templates/includes/**/*.hbs');
  app.pages('templates/content/**/*.hbs');
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
    .pipe(app.dest('docs'));
});

module.exports = app;

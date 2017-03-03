/**
* metis-canvas v1.0.1
* Homepage : https://github.com/metisadmin/metis-canvas
* Author : Osman Nuri Okumuş <onokumus@gmail.com> (https://github.com/onokumus)
* Copyright 2016
* Licensed under MIT
*/

;(function($) {
  'use strict';

  var MetisCanvas = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, MetisCanvas.DEFAULTS, options);
    this.$trigger = $('[data-toggle="canvas"][href="#' + element.id + '"],' +
      '[data-toggle="canvas"][data-target="#' + element.id + '"]');

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaCollapsedClass(this.$element, this.$trigger);
    }
  };

  MetisCanvas.DEFAULTS = {
    toggle: true,
    openClass: 'is-open'
  };

  MetisCanvas.prototype.show = function() {
    var openClass = this.options.openClass;
    this.$element
      .addClass(openClass)
      .attr('aria-expanded', true);

    this.$trigger
      .attr('aria-expanded', true);
  };

  MetisCanvas.prototype.hide = function() {
    var openClass = this.options.openClass;
    this.$element
      .removeClass(openClass)
      .attr('aria-expanded', false);

    this.$trigger
      .attr('aria-expanded', false);
  };

  MetisCanvas.prototype.toggle = function() {
    var openClass = this.options.openClass;
    this[this.$element.hasClass(openClass) ? 'hide' : 'show']();
  };

  MetisCanvas.prototype.getParent = function() {
    return $(this.options.parent)
      .find('[data-toggle="canvas"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function(i, element) {
        var $element = $(element);
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
      }, this))
      .end();
  };

  MetisCanvas.prototype.addAriaCollapsedClass = function($element, $trigger) {
    var openClass = this.options.openClass;
    var isOpen = $element.hasClass(openClass);

    $trigger.attr('aria-expanded', isOpen);
    $element
      .toggleClass(openClass, !isOpen)
      .attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

    return $(target);
  }

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('canvas');
      var options = $.extend({},
        MetisCanvas.DEFAULTS,
        $this.data(),
        typeof option === 'object' && option);

      if (!data && options.toggle && /show|hide/.test(option)) {
        options.toggle = false;
      }
      if (!data) {
        $this.data('canvas', (data = new MetisCanvas(this, options)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  }

  var old = $.fn.canvas;

  $.fn.canvas = Plugin;
  $.fn.canvas.Constructor = MetisCanvas;

  // CANVAS NO CONFLICT
  // ====================

  $.fn.canvas.noConflict = function() {
    $.fn.canvas = old;
    return this;
  };

  $(document).on('click.canvas.data-api', '[data-toggle="canvas"]', function(e) {
    var $this = $(this);

    if (!$this.attr('data-target')) {
      e.preventDefault();
    }

    var $target = getTargetFromTrigger($this);
    var data = $target.data('canvas');
    var option = data ? 'toggle' : $this.data();

    Plugin.call($target, option);
  });
})(jQuery);
//# sourceMappingURL=metis-canvas.map

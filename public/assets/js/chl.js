/**
 * chl - Bootstrap 3 Based Admin Toolkit
 * @version v0.1.1
 * @author onokumus
 */
'use strict';

if (typeof jQuery === 'undefined') {
  throw new Error('Theme\'s JavaScript requires jQuery');
}

var Momentum = {

  clock: function clock(element) {
    var attrData = $.extend({}, $(element).data());
    var format = attrData.format !== undefined ? attrData.format : 'LTS';
    var locale = attrData.locale !== undefined ? attrData.locale : 'en';
    var time;

    function displayTime() {
      moment.locale(locale);
      time = moment().format(format);
      $(element).html(time);
      setTimeout(displayTime, 1000);
    }
    displayTime();
  },

  relative: function relative(element) {
    var attrData = $.extend({}, $(element).data());
    var time = moment(attrData.time).isValid() ? attrData.time : moment();
    var locale = attrData.locale !== undefined ? attrData.locale : 'en';

    moment.locale(locale);
    $(element).html(moment(time).fromNow());
  }

};

$(document).on("chl.momentum", function () {
  $("[data-momentum]").each(function () {
    window.moment !== undefined && $(this).is(":visible") && Momentum[$(this).attr("data-momentum")](this);
  });
}).trigger("chl.momentum");

var Charty = {

  pie: function pie(element) {
    var attrData = $.extend({}, $(element).data());
    new Chart(element, {
      type: 'pie',
      data: {
        labels: eval(attrData.labels),
        datasets: [{
          data: eval(attrData.value),
          backgroundColor: eval(attrData.backgroundColor)
        }]
      },
      options: {
        legend: {
          display: eval(attrData.legend)
        }
      }
    });
  },

  doughnut: function doughnut(element) {
    var attrData = $.extend({}, $(element).data());
    new Chart(element, {
      type: 'doughnut',
      data: {
        labels: eval(attrData.labels),
        datasets: [{
          data: eval(attrData.value),
          backgroundColor: eval(attrData.backgroundColor)
        }]
      },
      options: {
        cutoutPercentage: eval(attrData.cutoutPercentage) || 50,
        legend: {
          display: eval(attrData.legend)
        }
      }
    });
  },

  line: function line(element) {
    var attrData = $.extend({}, $(element).data());

    new Chart(element, {
      type: 'line',
      data: {
        labels: eval(attrData.labels),
        datasets: [{
          label: attrData.label,
          data: eval(attrData.value),
          borderColor: attrData.borderColor,
          fill: false
        }]
      },
      options: {
        legend: {
          display: eval(attrData.legend)
        },
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  },

  area: function area(element) {
    var attrData = $.extend({}, $(element).data());

    new Chart(element, {
      type: 'line',
      data: {
        labels: eval(attrData.labels),
        datasets: [{
          label: attrData.label,
          data: eval(attrData.value),
          borderColor: attrData.borderColor,
          backgroundColor: attrData.backgroundColor,
          fill: true
        }]
      },
      options: {
        legend: {
          display: eval(attrData.legend)
        },
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  },

  statline: function statline(element) {
    var attrData = $.extend({}, $(element).data());

    new Chart(element, {
      type: 'line',
      data: {
        labels: eval(attrData.labels),
        datasets: [{
          label: attrData.label,
          data: eval(attrData.value),
          borderColor: attrData.borderColor,
          fill: false
        }]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            stacked: true
          }]
        }
      }
    });
  },

  statarea: function statarea(element) {
    var attrData = $.extend({}, $(element).data());

    new Chart(element, {
      type: 'line',
      data: {
        labels: eval(attrData.labels),
        datasets: [{
          label: attrData.label,
          data: eval(attrData.value),
          borderColor: attrData.borderColor,
          backgroundColor: attrData.backgroundColor,
          fill: true
        }]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    });
  }
};

$(document).on("chl.charty", function () {
  $("[data-charty]").each(function () {
    window.Chart !== undefined && $(this).is(":visible") && Charty[$(this).attr("data-charty")](this);
  });
}).trigger("chl.charty");

var FullScreen = {

  page: function page(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      screenfull.toggle();
    });
  },

  box: function box(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      $(element).toggleClass('fa-window-restore');
      var _target = $(this).parents('.box')[0];
      screenfull.toggle(_target);
    });
  }

};

$(document).on("chl.fullscreen", function () {
  $("[data-fullscreen]").each(function () {
    window.screenfull !== undefined && screenfull.enabled && $(this).is(":visible") && FullScreen[$(this).attr("data-fullscreen")](this);
  });
}).trigger("chl.fullscreen");

var Side = {

  _ps: $('.app-side'),
  _body: $('body'),

  responsive: function responsive() {
    $(window).width() < 768 ? Side._body.removeClass('app-side-mini app-side-opened').addClass('app-side-closed') : Side._body.addClass('app-side-opened').removeClass('app-side-closed');

    if (Side._body.hasClass('page-fixed') & !Side._body.hasClass('app-side-expand-on-hover')) {
      Side._body.removeClass('app-side-mini');
    }
  },

  collapse: function collapse(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('app-side-opened app-side-closed');
      Side._stopMetisMenu();
    });
  },

  mini: function mini(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      Side._body.toggleClass('app-side-mini');
      Side._stopMetisMenu();
    });
  },

  _stopMetisMenu: function _stopMetisMenu() {
    $('.side-nav').find('li').removeClass('active');
    $('.side-nav').find('a').attr('aria-expanded', false);
    $('.side-nav').find('ul.collapse').removeClass('in').attr('aria-expanded', false);
  }

};

$(document).on("chl.side", function () {
  Side.responsive();
  // var _cb;
  // $(window).on('resize', function () {
  //   _cb = setTimeout(Side.responsive, 100);
  // });

  $("[data-side]").each(function () {
    Side[$(this).attr("data-side")](this);
  });
}).trigger("chl.side");

var Box = {

  collapse: function collapse(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      var $toggleButtonImage = $(this).children('i.fa');
      var _box = $(this).closest(".box");
      if (_box.has('.box-body')) {
        _box.children('.box-body').on('show.bs.collapse', function () {
          $(element).removeClass('fa-minus fa-plus').addClass('fa-spinner fa-spin');
        }).on('shown.bs.collapse', function () {
          $(element).removeClass('fa-spinner fa-spin').addClass('fa-minus');
        }).on('hide.bs.collapse', function () {
          $(element).removeClass('fa-minus fa-plus').addClass('fa-spinner fa-spin');
        }).on('hidden.bs.collapse', function () {
          $(element).removeClass('fa-spinner fa-spin').addClass('fa-plus');
        }).collapse('toggle');
      }
    });
  },

  close: function close(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      $(this).closest(".box").hide("slow");
    });
  },

  refresh: function refresh(element) {
    var attrData = $.extend({}, $(element).data());
    var boxBody = $(element).closest(".box").children('.box-body');
    var loaderContainer = $('<div />').addClass('loader hidden');

    var loaderType = attrData.loadersType || 'ball-scale-ripple-multiple';

    var loaders = $('<div />').addClass('loader-inner').addClass(loaderType);
    loaderContainer.append(loaders);
    boxBody.append(loaderContainer);

    $(element).on('click', function (event) {
      event.preventDefault();
      $(element).addClass('fa-spin');
      boxBody.addClass('loaderContainer');
      loaderContainer.removeClass('hidden');
      setTimeout(function () {
        boxBody.removeClass('loaderContainer');
        loaderContainer.addClass('hidden');
        $(element).removeClass('fa-spin');
      }, 2e3);
    });
  }
};

$(document).on("chl.box", function () {
  $("[data-box]").each(function () {
    $(this).is(":visible") && Box[$(this).attr("data-box")](this);
  });
}).trigger("chl.box");

var Pluggin = {
  counterup: function counterup() {
    if ($.fn.counterUp) {
      $('.counterup').counterUp();
    } else {
      throw new Error('First install counterUp plugin! https://github.com/bfintal/Counter-Up');
    }
  },

  flatpickr: function flatpickr(element) {
    if (window.Flatpickr !== undefined) {
      $(element).flatpickr();
    } else {
      throw new Error('First install flatpickr plugin! https://chmln.github.io/flatpickr/');
    }
  },

  autosize: function (_autosize) {
    function autosize(_x) {
      return _autosize.apply(this, arguments);
    }

    autosize.toString = function () {
      return _autosize.toString();
    };

    return autosize;
  }(function (element) {
    if (window.autosize !== undefined) {
      autosize($(element));
    } else {
      throw new Error('First install autosize plugin! http://www.jacklmoore.com/autosize/');
    }
  }),

  tablesorter: function tablesorter(element) {
    if ($.fn.tablesorter) {
      $(element).tablesorter();
    } else {
      throw new Error('Please before install tablesorter plugin! https://mottie.github.io/tablesorter');
    }
  },

  select2: function select2(element) {
    if ($.fn.select2) {
      $(function () {
        $(element).select2({ placeholder: $(element).attr('placeholder') });
      });
    } else {
      throw new Error('First install select2 plugin!  https://select2.github.io/');
    }
  },

  quill: function quill(element) {
    if (window.Quill !== undefined) {
      var attrData = $.extend({}, $(element).data());
      var theme = attrData.theme !== undefined ? attrData.theme : 'snow';
      var editor = new Quill(element, { theme: theme });
    } else {
      throw new Error('First install quill plugin! http://quilljs.com/');
    }
  },

  wysiwyg: function wysiwyg(element) {
    if ($.fn.wysiwyg) {
      $(element).wysiwyg();
    } else {
      throw new Error('First install bootstrap-wysiwyg plugin! https://mindmup.github.io/bootstrap-wysiwyg/');
    }
  },

  summernote: function summernote(element) {
    if ($.fn.summernote) {
      $(element).summernote();
    } else {
      throw new Error('First install summernote plugin! http://summernote.org/');
    }
  },

  knob: function knob(element) {
    if ($.fn.knob) {
      $(element).knob();
    } else {
      throw new Error('First install knob plugin! http://anthonyterrien.com/knob/');
    }
  },

  sparkline: function sparkline(element) {
    if ($.fn.sparkline) {
      $(element).sparkline();
    } else {
      throw new Error('First install sparkline plugin! http://omnipotent.net/jquery.sparkline');
    }
  },

  datatables: function datatables(element) {
    if ($.fn.DataTable) {
      $(element).DataTable();
    } else {
      throw new Error('First install datatable plugin! https://datatables.net/');
    }
  },

  lightgallery: function lightgallery(element) {

    var attrData = $.extend({}, $(element).data());
    if ($.fn.lightGallery) {
      $(element).lightGallery({
        selector: attrData.selector,
        thumbnail: attrData.thumbnail || false
      });
    } else {
      throw new Error('First install lightgallery plugin! https://sachinchoolur.github.io/lightGallery/');
    }
  },

  inview: function inview() {
    if (window.inView !== undefined) {
      inView('.inview').on('enter', function (el) {
        $(el).addClass('animated fadeIn').removeClass('fadeOut');
      }).on('exit', function (el) {
        $(el).addClass('fadeOut').removeClass('fadeIn');
      });
    } else {
      throw new Error('First install in-view plugin! https://camwiegert.github.io/in-view/');
    }
  },

  dragula: function (_dragula) {
    function dragula() {
      return _dragula.apply(this, arguments);
    }

    dragula.toString = function () {
      return _dragula.toString();
    };

    return dragula;
  }(function () {
    var _container = $('.dragula');
    if (window.dragula !== undefined) {
      var _containers = [];
      for (var i = 0; i < _container.length; i++) {
        _containers.push(_container[i]);
      }
      dragula(_containers, {
        moves: function moves(el, container, handle) {
          return handle.classList.contains('draggable');
        }
      });
    } else {
      console.log('First install dragula plugin! https://bevacqua.github.io/dragula/');
    }
  }),

  metismenu: function metismenu(element) {
    if ($.fn.metisMenu) {
      $(element).metisMenu();
    } else {
      throw new Error('First install metisMenu plugin! https://github.com/onokumus/metisMenu');
    }
  },

  navmega: function navmega() {
    $('.nav-mega > li > a').on('click', function (event) {
      event.preventDefault();
      $(this).siblings('.nav-full-item').collapse('toggle');
      $(this).parent('li').siblings('li').children('.nav-full-item').collapse('hide');
    });
  },

  totop: function totop(element) {

    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $(element).fadeIn();
      } else {
        $(element).fadeOut();
      }
    });

    $(element).on('click', function (event) {
      var _body = $('body');
      event.preventDefault();
      _body.hasClass("page-fixed") ? _body.hasClass("main-fixed") ? $(".main-content").animate({
        scrollTop: 0
      }, 600) : $(".app-main").animate({
        scrollTop: 0
      }, 600) : $("body,html").animate({
        scrollTop: 0
      }, 600);
    });
  },

  perfectscrollbar: function perfectscrollbar(element) {
    if ($.fn.perfectScrollbar) {
      $(element).addClass('ps');
      $(element).perfectScrollbar();
      $(element).perfectScrollbar('update');
    }
  },

  insignia: function (_insignia) {
    function insignia(_x2) {
      return _insignia.apply(this, arguments);
    }

    insignia.toString = function () {
      return _insignia.toString();
    };

    return insignia;
  }(function (element) {
    if (window.insignia !== undefined) {
      insignia(element, { deletion: true });
    }
  }),

  todo: function todo(element) {
    $(element).find('.todo-link').on('click', function (event) {
      event.preventDefault();
      $(this).find('.fa').toggleClass('fa-square-o fa-check-square');
      $(this).closest('.todo-item').toggleClass('is-done');
    });
  }
};

$(document).on("chl.plugin", function () {
  if ($('.counterup').length) {
    Pluggin.counterup({
      delay: 10,
      time: 1000
    });
  }

  if ($('.ps').length) {
    Pluggin.perfectscrollbar($('.ps'));
  }

  if ($('.inview').length) {
    Pluggin.inview();
  }
  if ($('.dragula').length) {
    Pluggin.dragula();
  }
  if ($('.nav-mega').length) {
    $('.nav-mega .nav-full-item').addClass('collapse');
    Pluggin.navmega();
  }
  $("[data-plugin]").each(function () {
    Pluggin[$(this).attr("data-plugin")](this);
  });
}).trigger("chl.plugin");

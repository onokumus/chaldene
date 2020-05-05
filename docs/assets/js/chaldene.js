/**
 * chaldene - Bootstrap 3 Based Admin Toolkit
 * @version v0.2.0
 * @author onokumus
 */
'use strict';

if (typeof jQuery === 'undefined') {
  throw new Error('Theme\'s JavaScript requires jQuery');
}

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

$(document).on('elk.side', function () {
  Side.responsive();
  $(window).on('resize', function () {
    setTimeout(Side.responsive, 100);
  });

  $('[data-side]').each(function () {
    Side[$(this).attr('data-side')](this);
  });
}).trigger('elk.side');

var Box = {

  collapse: function collapse(element) {
    $(element).on('click', function (event) {
      event.preventDefault();
      var $toggleButtonImage = $(this).children('i.fa');
      var _box = $(this).closest('.box');
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
      $(this).closest('.box').hide('slow');
    });
  }

};

$(document).on('elk.box', function () {
  $('[data-box]').each(function () {
    $(this).is(':visible') && Box[$(this).attr('data-box')](this);
  });
}).trigger('elk.box');

var Pluggin = {

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
      _body.hasClass('page-fixed') ? _body.hasClass('main-fixed') ? $('.main-content').animate({
        scrollTop: 0
      }, 600) : $('.app-main').animate({
        scrollTop: 0
      }, 600) : $('body,html').animate({
        scrollTop: 0
      }, 600);
    });
  }

};

$(document).on('elk.plugin', function () {

  if ($('.nav-mega').length) {
    $('.nav-mega .nav-full-item').addClass('collapse');
    Pluggin.navmega();
  }
  $('[data-plugin]').each(function () {
    Pluggin[$(this).attr('data-plugin')](this);
  });
}).trigger('elk.plugin');

$('[data-toggle="tooltip"]').tooltip();
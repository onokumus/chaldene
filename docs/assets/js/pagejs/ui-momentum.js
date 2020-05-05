$(document).ready(function () {


  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

  

  var Momentum = {

    clock: function clock(element) {
      var attrData = $.extend({}, $(element).data());
      var format = attrData.format !== undefined
        ? attrData.format
        : 'LTS';
      var locale = attrData.locale !== undefined
        ? attrData.locale
        : 'en';
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
      var time = moment(attrData.time).isValid()
        ? attrData.time
        : moment();
      var locale = attrData.locale !== undefined
        ? attrData.locale
        : 'en';
  
      moment.locale(locale);
      $(element).html(moment(time).fromNow());
    }
  
  };
  
  $(document).on('chl.momentum', function() {
    $('[data-momentum]').each(function() {
      window.moment !== undefined && $(this).is(':visible') && Momentum[$(this).attr('data-momentum')](this);
    });
  }).trigger('chl.momentum');



  $.fn.countdown && $('#countdown1').countdown('2020/10/10', function (event) {
    var $this = $(this).html(event.strftime('' + '<span>%w</span> weeks ' + '<span>%d</span> days ' + '<span>%H</span> hr ' + '<span>%M</span> min ' + '<span class="text-orange f-b animated fadeInUpBig">%S</span> sec'));
  });

});

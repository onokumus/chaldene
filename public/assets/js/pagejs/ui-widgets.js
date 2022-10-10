$(document).ready(function () {

  $.fn.countdown && $('#countdown1').countdown('2020/10/10', function (event) {
    var $this = $(this).html(event.strftime('' + '<span>%w</span> weeks ' + '<span>%d</span> days ' + '<span>%H</span> hr ' + '<span>%M</span> min ' + '<span class="text-orange f-b animated fadeInUpBig">%S</span> sec'));
  });


  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

});

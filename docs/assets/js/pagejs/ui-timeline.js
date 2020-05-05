$(document).ready(function () {

  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

});

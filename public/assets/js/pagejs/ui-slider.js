$(document).ready(function () {


  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

  if ($.fn.ionRangeSlider) {
    $("#range_01").ionRangeSlider();
    $("#range_02").ionRangeSlider({
      min: 100,
      max: 1000,
      from: 550
    });
    $("#range_03").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
    });
    $("#range_04").ionRangeSlider({
      type: "double",
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500
    });

    $("#range_05").ionRangeSlider({
      type: "double",
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500,
      step: 250
    });

    $("#range_06").ionRangeSlider({
      type: "double",
      grid: true,
      min: -12.8,
      max: 12.8,
      from: -3.2,
      to: 3.2,
      step: 0.1
    });
  }

  if ($.fn.slider) {
    $('#ex1').slider({
      formatter: function formatter(value) {
        return 'Current value: ' + value;
      }
    });

    $("#ex2").slider({});

    $("#ex4").slider({
      reversed: true
    });
  }
});

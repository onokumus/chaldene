$(document).ready(function () {



  var clipboard = new Clipboard('.btn', {
    text: function (trigger) {
      return $(trigger).closest('.box').children('.box-body').html();
    }
  });
  clipboard.on('success', function (e) {
    noty({
      text: '<h5>Copied to clipboard</h5>',
      layout: 'topRight',
      type: 'success',
      theme: 'relax',
      timeout: 3000
    });
    e.clearSelection();
  });

  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

});

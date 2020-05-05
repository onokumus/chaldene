$(document).ready(function () {

  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });


  var clipboard = new Clipboard('.btn');
  clipboard.on('success', function(e) {
    noty({
      text: 'Font classes <strong class="text-alizarin">('+e.text+')</strong> copied to clipboard',
      layout: 'topRight',
      type: 'success',
      theme: 'relax',
      timeout: 3000
    });
    e.clearSelection();
  });


  
});

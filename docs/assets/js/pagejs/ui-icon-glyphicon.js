$(document).ready(function () {

  var clipboard = new ClipboardJS('.btn');
  clipboard.on('success', function(e) {
    noty({
      text: 'Font classes <strong class="text-danger">('+e.text+')</strong> copied to clipboard',
      layout: 'topRight',
      type: 'success',
      theme: 'relax',
      timeout: 3000
    });
    e.clearSelection();
  });



});

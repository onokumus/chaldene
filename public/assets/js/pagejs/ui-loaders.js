$(document).ready(function () {
  if (window.inView !== undefined) {
    inView('.box-body').on('enter', function(el) {
      $(el).closest('.box').find('[data-box="refresh"]').click();
    });
  }
});

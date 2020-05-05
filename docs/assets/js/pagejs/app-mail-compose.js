$(document).ready(function () {

  new Quill("#quill", { theme: "snow" });

  new Quill("#exampleTextAreaMessage", { theme: "bubble" });

  if ($.fn.select2) {
    $("#select2").select2({placeholder: $(this).attr('placeholder')});
  } else {
    throw new Error('First install select2 plugin!  https://select2.github.io/');
  }



  if (window.insignia !== undefined) {
    insignia(document.getElementById("insignia"), {deletion: true});
  }


  $('.ps').each(function() {
    $(this).perfectScrollbar();
    $(this).perfectScrollbar('update');
  });


});

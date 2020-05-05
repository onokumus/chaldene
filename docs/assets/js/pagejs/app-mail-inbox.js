$(document).ready(function () {


  new Quill("#exampleTextAreaMessage", {
    theme: "bubble"
  });



  if (window.insignia !== undefined) {
    insignia(document.getElementById("insignia"), {
      deletion: true
    });
  }

  $('.ps').each(function () {
    $(this).perfectScrollbar();
    $(this).perfectScrollbar('update');
  });



});

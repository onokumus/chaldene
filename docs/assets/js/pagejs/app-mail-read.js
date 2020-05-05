$(document).ready(function () {


  $("#lightgallery").lightGallery({
    selector: ".thumbnail",
    thumbnail: true
  });
  
  if (window.insignia !== undefined) {
    insignia(document.getElementById("insignia"), {deletion: true});
  }
  new Quill("#exampleTextAreaMessage", { theme: "bubble" });


  $('.ps').each(function() {
    $(this).perfectScrollbar();
    $(this).perfectScrollbar('update');
  });


  
});

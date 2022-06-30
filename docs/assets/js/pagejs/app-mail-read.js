$(document).ready(function () {

  if (window.insignia !== undefined) {
    insignia(document.getElementById("insignia"), {deletion: true});
  }
  new Quill("#exampleTextAreaMessage", { theme: "bubble" });


});

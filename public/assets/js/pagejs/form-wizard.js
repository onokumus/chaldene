$(document).ready(function () {


  $("#example-basic").steps({

    headerTag: "span",
    bodyTag: "section",
    autoFocus: true
  });

  var form = $("#example-form");

  form.validate({
    errorPlacement: function errorPlacement(error, element) {
      element.before(error);
    },
    rules: {
      confirm: {
        equalTo: "#password"
      }
    }
  });

  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function onFinishing(event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function onFinished(event, currentIndex) {
      noty({
        text: "Submitted!",
        layout: 'topRight',
        type: 'success',
        theme: 'relax',
        timeout: 1000
      });
    }
  });

});

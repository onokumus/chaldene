$(document).ready(function () {

  if ($.fn.select2) {
    $(".select2").select2({placeholder: $(this).attr('placeholder')});
  } else {
    throw new Error('First install select2 plugin!  https://select2.github.io/');
  }


  if (window.insignia !== undefined) {
    insignia(document.getElementById("insignia"), {deletion: true});
  }


  $(".flatpickr").flatpickr();


  if (window.autosize !== undefined) {
    autosize($("#autosize"));
  }



  if (window.Cleave !== undefined) {
    new Cleave('.cleave-phone', {
      phone: true,
      phoneRegionCode: 'US'
    });

    new Cleave('.cleave-date1', {
      date: true,
      datePattern: ['Y', 'm', 'd']
    });

    new Cleave('.cleave-date2', {
      date: true,
      datePattern: ['m', 'd']
    });

    new Cleave('.cleave-num', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    });

    new Cleave('.cleave-ean', {
      blocks: [1, 6, 6],
      numericOnly: true,
      delimiter: ' '
    });

    new Cleave('.cleave-iban', {
      prefix: 'DE',
      delimiter: ' ',
      blocks: [4, 4, 4, 4, 4, 2],
      numericOnly: true
    });

    new Cleave('.cleave-cpr1', {
      blocks: [3, 2],
      delimiter: ',',
      numericOnly: true,
      prefix: '$'
    });
  } else {
    throw new Error('First install cleave.js plugin! http://nosir.github.io/cleave.js/');
  }


  if ($.fn.colorpicker) {
    $(function () {
      $('.color-picker').colorpicker();

      $('#cp6').colorpicker({
        color: "#88cc33",
        horizontal: true
      });

      $('#cp7').colorpicker({
        color: '#ffaa00',
        container: true,
        inline: true
      });
    });
  } else {
    throw new Error('First install bootstrap-colorpicker plugin!  http://mjolnic.com/bootstrap-colorpicker/');
  }

});

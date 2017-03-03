$(function() {

  $('[data-toggle="tooltip"]').tooltip();

  $.fn.countdown && $('#countdown1').countdown('2020/10/10', function(event) {
    var $this = $(this).html(event.strftime('' +
      '<span>%w</span> weeks ' +
      '<span>%d</span> days ' +
      '<span>%H</span> hr ' +
      '<span>%M</span> min ' +
      '<span class="text-orange f-b animated fadeInUpBig">%S</span> sec'));
  });

  if ($.fn.ionRangeSlider) {
    $("#range_01").ionRangeSlider();
    $("#range_02").ionRangeSlider({
      min: 100,
      max: 1000,
      from: 550
    });
    $("#range_03").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
    });
    $("#range_04").ionRangeSlider({
      type: "double",
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500
    });

    $("#range_05").ionRangeSlider({
      type: "double",
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500,
      step: 250
    });

    $("#range_06").ionRangeSlider({
      type: "double",
      grid: true,
      min: -12.8,
      max: 12.8,
      from: -3.2,
      to: 3.2,
      step: 0.1
    });
  }


  if ($.fn.slider) {
    $('#ex1').slider({
      formatter: function(value) {
        return 'Current value: ' + value;
      }
    });

    $("#ex2").slider({});

    $("#ex4").slider({
      reversed: true
    });
  }



  var map1, map2, map3, map4, map5, map6, path, addressMap;

  if ($('#gmaps-basic').length) {
    map1 = new GMaps({
      el: '#gmaps-basic',
      lat: -12.043333,
      lng: -77.028333,
      zoomControl: true,
      zoomControlOpt: {
        style: 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false
    });
  }

  if ($('#gmaps-marker').length) {
    map2 = new GMaps({
      el: '#gmaps-marker',
      lat: -12.043333,
      lng: -77.028333
    });
    map2.addMarker({
      lat: -12.043333,
      lng: -77.03,
      title: 'Lima',
      details: {
        database_id: 42,
        author: 'HPNeo'
      },
      click: function(e) {
        if (console.log)
          console.log(e);
        alert('You clicked in this marker');
      },
      mouseover: function(e) {
        if (console.log)
          console.log(e);
      }
    });
    map2.addMarker({
      lat: -12.042,
      lng: -77.028333,
      title: 'Marker with InfoWindow',
      infoWindow: {
        content: '<p>HTML Content</p>'
      }
    });
  }
  if ($('#gmaps-geolocation').length) {
    map3 = new GMaps({
      el: '#gmaps-geolocation',
      lat: -12.043333,
      lng: -77.028333
    });

    GMaps.geolocate({
      success: function(position) {
        map3.setCenter(position.coords.latitude, position.coords.longitude);
      },
      error: function(error) {
        alert('Geolocation failed: ' + error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        //alert("Done!");
      }
    });
  }

  if ($('#gmaps-polylines').length) {
    map4 = new GMaps({
      el: '#gmaps-polylines',
      lat: -12.043333,
      lng: -77.028333,
      click: function(e) {
        console.log(e);
      }
    });

    path = [
      [-12.044012922866312, -77.02470665341184],
      [-12.05449279282314, -77.03024273281858],
      [-12.055122327623378, -77.03039293652341],
      [-12.075917129727586, -77.02764635449216],
      [-12.07635776902266, -77.02792530422971],
      [-12.076819390363665, -77.02893381481931],
      [-12.088527520066453, -77.0241058385925],
      [-12.090814532191756, -77.02271108990476]
    ];

    map4.drawPolyline({
      path: path,
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6
    });
  }

  if ($('#gmaps-route').length) {
    map5 = new GMaps({
      el: '#gmaps-route',
      lat: -12.043333,
      lng: -77.028333
    });
    map5.drawRoute({
      origin: [-12.044012922866312, -77.02470665341184],
      destination: [-12.090814532191756, -77.02271108990476],
      travelMode: 'driving',
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6
    });
  }

  if ($('#gmaps-geocoding').length) {
    addressMap = new GMaps({
      el: '#gmaps-geocoding',
      lat: -12.043333,
      lng: -77.028333
    });
    $('#geocoding_form').submit(function(e) {
      e.preventDefault();
      GMaps.geocode({
        address: $('#address').val().trim(),
        callback: function(results, status) {
          if (status === 'OK') {
            var latlng = results[0].geometry.location;
            addressMap.setCenter(latlng.lat(), latlng.lng());
            addressMap.addMarker({
              lat: latlng.lat(),
              lng: latlng.lng()
            });
          }
        }
      });
    });
  }

  if ($('#jmap-world').length) {
    $('#jmap-world').vectorMap({
      map: 'world_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
    });
  }

  if ($('#jmap-usa').length) {
    $('#jmap-usa').vectorMap({
      map: 'usa_en',
      backgroundColor: null,
      color: '#ecf0f1',
      enableZoom: true,
      showTooltip: true,
      selectedColor: null,
      hoverColor: "#95a5a6",
      colors: {
        mo: '#2980b9',
        fl: '#1abc9c',
        or: '#f1c40f'
      },
      onRegionClick: function(event, code, region) {
        event.preventDefault();
      }
    });
  }

  if ($('#jmap-europe').length) {
    $('#jmap-europe').vectorMap({
      map: 'europe_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverColor: '#8e44ad',
      enableZoom: false,
      showTooltip: false
    });
  }

  if ($('#jmap-germany').length) {
    $('#jmap-germany').vectorMap({
      map: 'germany_en',
      backgroundColor: null,
      onRegionClick: function(element, code, region) {
        var message = 'You clicked "' +
          region +
          '" which has the code: ' +
          code.toUpperCase();

        noty({
          text: message,
          layout: 'topRight',
          type: 'information',
          theme: 'relax',
          timeout: 3000
        });
      }
    });
  }

});

const Elektron = (() => {
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */


  class Elektron {
    constructor() {}

  }

  return Elektron;
})();


window.Elk = new Elektron();

Elektron.prototype.cleave = function() {
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
};


Elektron.prototype.colorpicker = function() {
  if ($.fn.colorpicker) {
    $(function() {
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
};


Elektron.prototype.wizard = function() {

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
    onStepChanging: function(event, currentIndex, newIndex) {
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function(event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function(event, currentIndex) {
      noty({
        text: "Submitted!",
        layout: 'topRight',
        type: 'success',
        theme: 'relax',
        timeout: 1000
      });
    }
  });

};




Elektron.prototype.Chart = function() {
  // Line chart
  var lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
      spanGaps: false,
    }]
  };
  var myLineChart = new Chart($('#lineChart'), {
    type: 'line',
    data: lineData
  });

  // Bar Chart
  var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40],
    }]
  };

  var myBarChart = new Chart($('#barChart'), {
    type: 'bar',
    data: barData
  });

  // Radar Chart
  var radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    }, {
      label: "My Second dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }]
  };
  var myRadarChart = new Chart($('#radarChart'), {
    type: 'radar',
    data: radarData
  });

  // Polar area chart
  var polarAreaData = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB"
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      "Red",
      "Green",
      "Yellow",
      "Grey",
      "Blue"
    ]
  };
  var myPolarAreaChart = new Chart($('#polarAreaChart'), {
    data: polarAreaData,
    type: 'polarArea'
  });

  // Pie chart
  var pieData = {
    labels: [
      "Red",
      "Blue",
      "Yellow"
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }]
  };
  var myPieChart = new Chart($('#pieChart'), {
    type: 'pie',
    data: pieData
  });

  // Doughnut chart
  var myDoughnutChart = new Chart($('#doughnutChart'), {
    type: 'doughnut',
    data: pieData
  });

  // Bubble chart
  var bubbleData = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: "#FF6384",
      hoverBackgroundColor: "#FF6384",
    }, {
      label: 'Second Dataset',
      data: [{
        x: 10,
        y: 23,
        r: 10
      }, {
        x: 29,
        y: 12,
        r: 13
      }],
      backgroundColor: "#36A2EB",
      hoverBackgroundColor: "#FFCE56",
    }]
  };
  var myBubbleChart = new Chart($('#bubbleChart'), {
    type: 'bubble',
    data: bubbleData
  });

  // Combo chart
  var comboChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      type: 'bar',
      label: 'Dataset 1',
      backgroundColor: "rgba(151,187,205,0.5)",
      data: [10, 20, 13, 24, 30, 10, 29],
      borderColor: 'white',
      borderWidth: 2
    }, {
      type: 'line',
      label: 'Dataset 2',
      backgroundColor: "rgba(151,187,205,0.5)",
      data: [12, 23, 45, 18, 35, 8, 10],
      borderColor: 'white',
      borderWidth: 2
    }, {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: "rgba(220,220,220,0.5)",
      data: [33, 22, 44, 11, 27, 18, 32]
    }, ]
  };
  var myComboChart = new Chart($('#comboChart'), {
    type: 'bar',
    data: comboChartData
  });

}

Elektron.prototype.Morris = function() {
  Morris.Line({
    element: 'lineMorris',
    data: [{
      y: '2006',
      a: 100,
      b: 90
    }, {
      y: '2007',
      a: 75,
      b: 65
    }, {
      y: '2008',
      a: 50,
      b: 40
    }, {
      y: '2009',
      a: 75,
      b: 65
    }, {
      y: '2010',
      a: 50,
      b: 40
    }, {
      y: '2011',
      a: 75,
      b: 65
    }, {
      y: '2012',
      a: 100,
      b: 90
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });

  Morris.Area({
    element: 'areaMorris',
    data: [{
      y: '2006',
      a: 100,
      b: 90
    }, {
      y: '2007',
      a: 75,
      b: 65
    }, {
      y: '2008',
      a: 50,
      b: 40
    }, {
      y: '2009',
      a: 75,
      b: 65
    }, {
      y: '2010',
      a: 50,
      b: 40
    }, {
      y: '2011',
      a: 75,
      b: 65
    }, {
      y: '2012',
      a: 100,
      b: 90
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });

  Morris.Bar({
    element: 'barMorris',
    data: [{
      y: '2006',
      a: 100,
      b: 90
    }, {
      y: '2007',
      a: 75,
      b: 65
    }, {
      y: '2008',
      a: 50,
      b: 40
    }, {
      y: '2009',
      a: 75,
      b: 65
    }, {
      y: '2010',
      a: 50,
      b: 40
    }, {
      y: '2011',
      a: 75,
      b: 65
    }, {
      y: '2012',
      a: 100,
      b: 90
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });

  Morris.Donut({
    element: 'donutMorris',
    data: [{
      label: "Download Sales",
      value: 12
    }, {
      label: "In-Store Sales",
      value: 30
    }, {
      label: "Mail-Order Sales",
      value: 20
    }]
  });
}

Elektron.prototype.Flot = function() {

  var d2 = [
      [0, 3],
      [1, 8],
      [2, 5],
      [3, 13],
      [4, 1]
    ],
    d3 = [
      [0, 12],
      [2, 2],
      [3, 9],
      [4, 4]
    ],
    parabola = [],
    parabola2 = [],
    circle = [],
    heartA = [],
    bernoulliA = [],
    human = $("#humanFlot"),
    eye = $("#eyeFlot"),
    bar = $("#barFlot"),
    heart = $("#heartFlot"),
    bernoilli = $("#bernoilliFlot");

  function lemniscatex(i) {
    return Math.sqrt(2) * Math.cos(i) / (Math.pow(Math.sin(i), 2) + 1);
  }

  function lemniscatey(i) {
    return Math.sqrt(2) * Math.cos(i) * Math.sin(i) / (Math.pow(Math.sin(i), 2) + 1);
  }

  // Human charts
  $.plot(human, [{
    data: d2,
    label: 'MAN'
  }, {
    data: d3,
    label: 'WOMAN'
  }], {
    clickable: true,
    hoverable: true,
    series: {
      lines: {
        show: true,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.5
          }, {
            opacity: 0.15
          }]
        }
      },
      points: {
        show: true
      }
    }
  });

  // EYE charts
  for (var i = -5; i <= 5; i += 0.5) {
    parabola.push([i, Math.pow(i, 2) - 25]);
    parabola2.push([i, -Math.pow(i, 2) + 25]);
  }

  for (var c = -2; c <= 2.1; c += 0.1) {
    circle.push([c, Math.sqrt(400 - c * c * 100)]);
    circle.push([c, -Math.sqrt(400 - c * c * 100)]);
  }

  $.plot(eye, [{
    data: parabola2,
    lines: {
      show: true,
      fill: true
    }
  }, {
    data: parabola,
    lines: {
      show: true,
      fill: true
    }
  }, {
    data: circle,
    lines: {
      show: true
    }
  }]);


  // BAR charts
  $.plot(bar, [{
    data: d2,
    label: 'BAR'
  }], {
    clickable: true,
    hoverable: true,
    series: {
      bars: {
        show: true,
        barWidth: 0.6
      },
      points: {
        show: true
      }
    }
  });


  // HEART charts
  for (i = -2; i <= 5; i += 0.01) {
    heartA.push([16 * Math.pow(Math.sin(i), 3), 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i)]);
  }
  $.plot(heart, [{
    data: heartA,
    label: '<i class="fa fa-fw fa-heart"></i>',
    color: '#9A004D'
  }], {
    series: {
      lines: {
        show: true,
        fill: true
      },
      points: {
        show: false
      }
    },
    yaxis: {
      show: true
    },
    xaxis: {
      show: true
    }
  });
  $('#heartFlot .legendLabel').addClass('animated pulse');
  setInterval(function() {
    $('#heartFlot .legendLabel .fa.fa-heart').toggleClass('fa-2x');
  }, 400);

  // BERNOILLI charts
  for (var k = 0; k <= 2 * Math.PI; k += 0.01) {
    bernoulliA.push([lemniscatex(k), lemniscatey(k)]);
  }
  $.plot(bernoilli, [{
    data: bernoulliA,
    label: 'Lemniscate of Bernoulli',
    lines: {
      show: true,
      fill: true
    }
  }]);

}

Elektron.prototype.inlineChart = function() {

  // required jquery.sparkline.min.js*/

  /* Sparklines can also take their values from the first argument
   passed to the sparkline() function */
  var myvalues = [10, 8, 5, 7, 4, 4, 1];
  $('.dynamicsparkline').sparkline(myvalues, {
    height: '100'
  });

  /* The second argument gives options such as chart type */
  $('.dynamicbar').sparkline(myvalues, {
    type: 'bar',
    barColor: 'green',
    height: '100'
  });

  /* Use 'html' instead of an array of values to pass options
   to a sparkline with data in the tag */
  $('.inlinebar').sparkline('html', {
    type: 'bar',
    barColor: 'red',
    height: '100'
  });


  $(".sparkline.bar_week").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
    type: 'bar',
    height: '100',
    barColor: '#4d6189',
    negBarColor: '#a20051'
  });

  $(".sparkline.line_day").sparkline([5, 6, 7, 9, 9, 5, 4, 6, 6, 4, 6, 7], {
    type: 'line',
    height: '100',
    drawNormalOnTop: false
  });

  $(".sparkline.pie_week").sparkline([1, 1, 2], {
    type: 'pie',
    height: '100'
  });

  $('.sparkline.stacked_month').sparkline(['0:2', '2:4', '4:2', '4:1'], {
    type: 'bar',
    height: '100',
    barColor: '#4d6189',
    negBarColor: '#a20051'
  });
};


Elektron.prototype.FullCalendar = function() {


  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var hdr = {};

  function createEvent() {
    $("#eventModal").modal('hide');

    $("#calendar").fullCalendar('renderEvent', {
      title: $('#title').val(),
      start: $('#start').val(),
      end: $('#end').val(),
      allDay: $('#allDay').prop('checked')
    }, true);
  }

  $('#newEventBtn').on('click', function() {
    $('#title').val('');
    $('#start').val('');
    $('#end').val('');
    $('#allDay').prop('checked', false);

    $('#eventModalLabel').html('Create New Event');

    $('#updateEventBtn').addClass('hidden');
    $('#deleteEventBtn').addClass('hidden');
    $('#createEventBtn').removeClass('hidden');

    // $("#eventModal").modal('show');
  });

  $('#createEventBtn').on('click', function(e) {
    // We don't want this to act as a link so cancel the link action
    e.preventDefault();
    createEvent();
  });

  function updateEvent(event) {

    event.title = $('#title').val();
    event.start = $('#start').val();
    event.end = $('#end').val();
    event.allDay = $('#allDay').prop('checked');
    return event;
  }


  if ($(window).width() <= 767) {
    hdr = {
      left: 'title',
      center: 'month,agendaWeek,agendaDay',
      right: 'prev,today,next'
    };
  } else {
    hdr = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }


  $('#external-events .fc-event').each(function() {

    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
      title: $.trim($(this).text()), // use the element's text as the event title
      className: $.trim($(this).removeClass('external-event').attr('class')), // use the element's children as the event class
      stick: true // maintain when user navigates (see docs on the renderEvent method)
    });

    // make the event draggable using jQuery UI
    $(this).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0 //  original position after the drag
    });

  });

  var calendar = $('#calendar').fullCalendar({

    eventClick: function(calEvent, jsEvent, view) {
      var end = calEvent.end !== null ? moment(calEvent.end).format() : '';
      $('#title').val(calEvent.title);
      $('#start').val(calEvent.start);
      $('#end').val(end);
      $('#allDay').prop('checked', calEvent.allDay);

      $('#eventModalLabel').html('Update Or Delete Event');

      $('#updateEventBtn').removeClass('hidden');
      $('#deleteEventBtn').removeClass('hidden');
      $('#createEventBtn').addClass('hidden');



      $("#eventModal").modal('show');


      $('#updateEventBtn').on('click', function(e) {
        // We don't want this to act as a link so cancel the link action
        //e.preventDefault();
        $("#calendar").fullCalendar('updateEvent', updateEvent(calEvent));
      });
      $('#deleteEventBtn').on('click', function() {
        $("#calendar").fullCalendar('removeEvents', calEvent._id);

        $("#eventModal").modal('hide');
      });
    },
    header: hdr,
    selectable: true,
    selectHelper: true,
    select: function() {
      $('#newEventBtn').click();
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function() {
      // is the "remove after drop" checkbox checked?
      if ($('#drop-remove').prop('checked')) {
        // if so, remove the element from the "Draggable Events" list
        $(this).remove();
      }
    },
    events: [{
      title: 'All Day Event',
      start: new Date(y, m, 1),
      className: 'bg-wisteria',
      allDay: true
    }, {
      title: 'Long Event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2),
      className: 'bg-alizarin'
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d - 3, 16, 0),
      allDay: false,
      className: 'bg-pumpkins'
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d + 4, 16, 0),
      allDay: false,
      className: 'bg-wet-asphalt'
    }, {
      title: 'Meeting',
      start: new Date(y, m, d, 10, 30),
      allDay: false,
      className: 'bg-green-sea'
    }, {
      title: 'Lunch',
      start: new Date(y, m, d, 12, 0),
      end: new Date(y, m, d, 14, 0),
      allDay: false,
      className: 'bg-carrot'
    }, {
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false
    }, {
      title: 'Click for Google',
      start: moment().add(25, 'd'),
      end: moment().add(25, 'd').add(5, 'm'),
      url: 'http://google.com/'
    }]
  });
}

$(document).ready(function () {


  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

  var Charty = {

    pie: function pie(element) {
      var attrData = $.extend({}, $(element).data());
      new Chart(element, {
        type: 'pie',
        data: {
          labels: eval(attrData.labels),
          datasets: [
            {
              data: eval(attrData.value),
              backgroundColor: eval(attrData.backgroundColor)
            }
          ]
        },
        options: {
          legend: {
            display: String(attrData.legend) === 'true',
          }
        }
      });
    },
  
    doughnut: function(element) {
      var attrData = $.extend({}, $(element).data());
      new Chart(element, {
        type: 'doughnut',
        data: {
          labels: eval(attrData.labels),
          datasets: [
            {
              data: eval(attrData.value),
              backgroundColor: eval(attrData.backgroundColor)
            }
          ]
        },
        options: {
          cutoutPercentage: Number(attrData.cutoutPercentage) || 50,
          legend: {
            display: String(attrData.legend) === 'true',
          }
        }
      });
    },
  
    line: function(element) {
      var attrData = $.extend({}, $(element).data());
  
      new Chart(element, {
        type: 'line',
        data: {
          labels: eval(attrData.labels),
          datasets: [
            {
              label: attrData.label,
              data: eval(attrData.value),
              borderColor: attrData.borderColor,
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: String(attrData.legend) === 'true',
          },
          scales: {
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }
      });
    },
  
    area: function(element) {
      var attrData = $.extend({}, $(element).data());
  
      new Chart(element, {
        type: 'line',
        data: {
          labels: eval(attrData.labels),
          datasets: [
            {
              label: attrData.label,
              data: eval(attrData.value),
              borderColor: attrData.borderColor,
              backgroundColor: attrData.backgroundColor,
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: String(attrData.legend) === 'true',
          },
          scales: {
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }
      });
    },
  
    statline: function statline(element) {
      var attrData = $.extend({}, $(element).data());
  
      new Chart(element, {
        type: 'line',
        data: {
          labels: eval(attrData.labels),
          datasets: [
            {
              label: attrData.label,
              data: eval(attrData.value),
              borderColor: attrData.borderColor,
              fill: false
            }
          ]
        },
        options: {
          elements: {
            point: {
              radius: 0
            }
          },
          tooltips: {
            enabled: false
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: false
              }
            ],
            yAxes: [
              {
                display: false,
                stacked: true
              }
            ]
          }
        }
      });
    },
  
    statarea: function statarea(element) {
      var attrData = $.extend({}, $(element).data());
  
      new Chart(element, {
        type: 'line',
        data: {
          labels: eval(attrData.labels),
          datasets: [
            {
              label: attrData.label,
              data: eval(attrData.value),
              borderColor: attrData.borderColor,
              backgroundColor: attrData.backgroundColor,
              fill: true
            }
          ]
        },
        options: {
          elements: {
            point: {
              radius: 0
            }
          },
          tooltips: {
            enabled: false
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: false
              }
            ],
            yAxes: [
              {
                display: false
              }
            ]
          }
        }
      });
    }
  };
  
  $(document).on('elk.charty', function() {
    $('[data-charty]').each(function() {
      window.Chart !== undefined && $(this).is(':visible') && Charty[$(this).attr('data-charty')](this);
    });
  }).trigger('elk.charty');



});

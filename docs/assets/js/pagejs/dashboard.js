$(document).ready(function () {


  $('.ps').each(function() {
    $(this).perfectScrollbar();
    $(this).perfectScrollbar('update');
  });


  $('.counterup').counterUp({
    delay: 10,
    time: 1000
  });


  $(".tablesorter").tablesorter();



  $(".todo-list").find('.todo-link').on('click', function (event) {
    event.preventDefault();
    $(this).find('.fa').toggleClass('fa-square-o fa-check-square');
    $(this).closest('.todo-item').toggleClass('is-done');
  });




  var _container = $('.dragula');
  if (window.dragula !== undefined) {
    var _containers = [];
    for (var i = 0; i < _container.length; i++) {
      _containers.push(_container[i]);
    }
    dragula(_containers, {
      moves: function (el, container, handle) {
        return handle.classList.contains('draggable');
      }
    });
  } else {
    console.log('First install dragula plugin! https://bevacqua.github.io/dragula/');
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
      onRegionClick: function onRegionClick(event, code, region) {
        event.preventDefault();
      }
    });
  }


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

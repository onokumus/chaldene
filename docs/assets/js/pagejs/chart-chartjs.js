$(document).ready(function () {


  $('.inview').each(function () {
    inView('.inview').on('enter', function (el) {
      $(el).addClass('animated fadeIn').removeClass('fadeOut');
    }).on('exit', function (el) {
      $(el).addClass('fadeOut').removeClass('fadeIn');
    });
  });

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
      spanGaps: false
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
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40]
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
      data: [11, 16, 7, 3, 14],
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
      label: 'My dataset' // for legend
    }],
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"]
  };
  var myPolarAreaChart = new Chart($('#polarAreaChart'), {
    data: polarAreaData,
    type: 'polarArea'
  });

  // Pie chart
  var pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
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
      hoverBackgroundColor: "#FF6384"
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
      hoverBackgroundColor: "#FFCE56"
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
    }]
  };
  var myComboChart = new Chart($('#comboChart'), {
    type: 'bar',
    data: comboChartData
  });



});

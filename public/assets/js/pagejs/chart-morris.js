$(document).ready(function () {

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

});

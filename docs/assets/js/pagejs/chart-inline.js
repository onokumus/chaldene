$(document).ready(function () {

  $(".knob").knob();

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



});

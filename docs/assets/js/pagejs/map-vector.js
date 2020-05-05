$(document).ready(function () {
  
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
      onRegionClick: function onRegionClick(event, code, region) {
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
      onRegionClick: function onRegionClick(element, code, region) {
        var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

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

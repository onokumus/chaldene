$(document).ready(function () {
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
      click: function click(e) {
        if (console.log) console.log(e);
        alert('You clicked in this marker');
      },
      mouseover: function mouseover(e) {
        if (console.log) console.log(e);
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
      success: function success(position) {
        map3.setCenter(position.coords.latitude, position.coords.longitude);
      },
      error: function error(_error) {
        alert('Geolocation failed: ' + _error.message);
      },
      not_supported: function not_supported() {
        alert("Your browser does not support geolocation");
      },
      always: function always() {
        //alert("Done!");
      }
    });
  }

  if ($('#gmaps-polylines').length) {
    map4 = new GMaps({
      el: '#gmaps-polylines',
      lat: -12.043333,
      lng: -77.028333,
      click: function click(e) {
        console.log(e);
      }
    });

    path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

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
    $('#geocoding_form').submit(function (e) {
      e.preventDefault();
      GMaps.geocode({
        address: $('#address').val().trim(),
        callback: function callback(results, status) {
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
});

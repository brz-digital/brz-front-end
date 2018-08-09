class MapGetPosition {

  constructor() {
    console.log('>>> mapGetPosition.js ready!');

    // Call methods
    this.init();
  }

  init() {
    let map;

    function initializeMap() {
      var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
      var options = {
        zoom: 4,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };
      map = new google.maps.Map(document.getElementById('map'), options);
      loadPlaces();
    }

    function loadPlaces() {
      $.getJSON('../scripts/places.json', function(data) {
        $.each(data, function(index, mark) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(mark.place[0]),
            map: map,
            title: mark.title,
            icon: {
              path: 'M16.734,0C9.375,0,3.408,5.966,3.408,13.325c0,11.076,13.326,20.143,13.326,20.143S30.06,23.734,30.06,13.324 ' +
              'C30.06,5.965,24.093,0,16.734,0z M16.734,19.676c-3.51,0-6.354-2.844-6.354-6.352c0-3.508,2.844-6.352,6.354-6.352 ' +
              'c3.508-0.001,6.352,2.845,6.352,6.353C23.085,16.833,20.242,19.676,16.734,19.676z',
              fillColor: '#e6055d',
              fillOpacity: 1,
              strokeColor: '#fff',
              size: new google.maps.Size(33, 33),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17,35),
              strokeWeight: 0,
              scale: 1,
            },
          });
        });
      });
    }

    function findMe() {
      // user Marker
      var userMarker = new google.maps.Marker({
        position: new google.maps.LatLng(),
        map: map,
        icon: {
          path: 'M16.734,0C9.375,0,3.408,5.966,3.408,13.325c0,11.076,13.326,20.143,13.326,20.143S30.06,23.734,30.06,13.324 ' +
          'C30.06,5.965,24.093,0,16.734,0z M16.734,19.676c-3.51,0-6.354-2.844-6.354-6.352c0-3.508,2.844-6.352,6.354-6.352 ' +
          'c3.508-0.001,6.352,2.845,6.352,6.353C23.085,16.833,20.242,19.676,16.734,19.676z',
          fillColor: '#e6055d',
          fillOpacity: 1,
          strokeColor: '#fff',
          strokeWeight: 0,
          scale: 1,
        },
      });
      // verifica se o navegador tem suporte a geolocalização
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) { // callback de sucesso
          // ajusta a posição do marker para a localização do usuário e aplica o zoom
          userMarker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          map.panTo(userMarker.position);
          map.setZoom(17);
          $('#findme').show();
          $('#loading').remove();
        },
        function(error){ // callback de erro
          alert('Erro ao obter localização!');
          $('#findme').show();
          $('#loading').remove();
        });
      } else {
        alert('Navegador não suporta Geolocalização!');
        $('#findme').show();
        $('#loading').remove();
      }
    }

    function createLoading() {
      const loading = $('<span id="loading" class="loading"></span>');
      $('.google-map').append(loading);
    }

    $('#findme').on('click', () => {
      $('#findme').hide();
      createLoading();
      setTimeout(() => {
        findMe();
      }, 1500);
    });

    initializeMap();
  }

}

export default MapGetPosition;

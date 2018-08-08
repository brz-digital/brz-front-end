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
        disableDefaultUI: true
      };
      map = new google.maps.Map(document.getElementById("map"), options);
      loadPlaces();
    }

    function loadPlaces() {
      $.getJSON('../scripts/places.json', function(data) {
        $.each(data, function(index, mark) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(mark.place[0]),
            map: map,
            title: mark.title
            // icon: ""
          });
        });
      });
    }

    function findMe() {
      $('#findme').text("buscando...");
      // user Marker
      var userMarker = new google.maps.Marker({
        position: new google.maps.LatLng(),
        map: map
      });
      // verifica se o navegador tem suporte a geolocalização
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){ // callback de sucesso
          // ajusta a posição do marker para a localização do usuário e aplica o zoom
          userMarker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          map.panTo(userMarker.position);
          map.setZoom(17);
          $('#findme').text("encontre-me");
          // $('#findme').hide();
        },
        function(error){ // callback de erro
          alert('Erro ao obter localização!');
          console.log('Erro ao obter localização.', error);
          $('#findme').show();
        });
      } else {
        alert('Navegador não suporta Geolocalização!');
        console.log('Navegador não suporta Geolocalização!');
        $('#findme').text("encontre-me");
      }
    }

    $('#findme').on('click', function(){
      findMe();
    });

    initializeMap();
  }

}

export default MapGetPosition;

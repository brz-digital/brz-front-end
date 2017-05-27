// TODO: comment the code

// inicializing Swiper
$(document).ready(function() {
  var mySwiper = new Swiper ('.swiper-container', {

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'

  })
})


function initMap() {
  // escolhi Brasilia como centro porque ela fica mais no centro do Brasil
  let brasilia = {lat: -15.7801, lng: -47.9292};
  // criei o mapa na div map
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    scrollwheel: false,
    center: brasilia
  });

  $.getJSON('places.json', (data) => {
    let allPlaces = [];
    $.each(data, function(key, val) {
      // adiciono todas places que estão no places.json no array allPlaces
      allPlaces.push(val.place[0]);
    })

    // faço uma iteração no array e para cada elemento eu crio um novo Marker com as lat e lng obtidos
    allPlaces.forEach((element) => {
      new google.maps.Marker({
        position: {lat: element.lat, lng: element.lng},
        map: map,
        icon: '../../images/icons/marker-pink.png'
      });
    });
  });

  /* função para configurar o botão de 'encontre-me', como eu não sabia como criar um elemento "acima" do Google Maps
  eu tive que usar esse código que eu encontrei na documentação do Google Maps. */
  function createFindMeButton(controlDiv, map) {

    // Set CSS for the control border.
    let controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#E1396C';
    controlUI.style.border = '0';
    controlUI.style.borderRadius = '30px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.padding = '10px';
    controlUI.style.marginTop = '10px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Clique para encontrar sua localização';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    let controlText = document.createElement('div');
    controlText.style.color = '#fff';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.innerHTML = '<img src="./images/icons/marker-white.png" width="30" alt="marker"><span style="margin-left: 4px;">encontre-me</span>';
    controlUI.appendChild(controlText);

    // Setup the click event listener, in this is case is to find my location.
    controlUI.addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findMyPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });

  }

  // essas funções são responsáveis por criar o botão, também tirados da documentação
  let centerControlDiv = document.createElement('div');
  let centerControl = new createFindMeButton(centerControlDiv, map);
  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

  // função que encontra minha localização, adiciona a bolinha azul, centraliza o mapa e dá um zoom na posição.
  function findMyPosition(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;

    let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(latitude, longitude),
                    map: map,
                    title: "Current Location",
                    icon: "http://i.imgur.com/S1ooXKy.png"
                });

    map.setCenter(new google.maps.LatLng(latitude, longitude));
    map.setZoom(7);
  }
}

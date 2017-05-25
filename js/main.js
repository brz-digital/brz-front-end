// TODO: put the button inside the map
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
  let brasilia = {lat: -15.7801, lng: -47.9292};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: brasilia
  });
  $.getJSON('places.json', (data) => {
    let allPlaces = [];
    $.each(data, function(key, val) {
      allPlaces.push(val.place[0]);
    })

    allPlaces.forEach((element) => {
      new google.maps.Marker({
        position: {lat: element.lat, lng: element.lng},
        map: map,
        icon: '../../images/icons/marker-pink.png'
      });
    });
  });

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

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });

  }


  let centerControlDiv = document.createElement('div');
  let centerControl = new createFindMeButton(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

  function success(position) {
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

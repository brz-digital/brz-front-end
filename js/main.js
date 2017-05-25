// TODO: put the button inside the map
// TODO: comment the code
//

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

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(latitude, longitude),
                    map: map,
                    title: "Current Location",
                    icon: "http://i.imgur.com/S1ooXKy.png"
                });

    map.setCenter(new google.maps.LatLng(latitude, longitude));
    map.setZoom(7);
  }

  $( "#find-me-btn" ).click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
}

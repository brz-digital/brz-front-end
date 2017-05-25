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
        map: map
      });
    });
  });

}

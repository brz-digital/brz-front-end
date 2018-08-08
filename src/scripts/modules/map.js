class Map {

  constructor() {
    console.log('>>> map.js ready!');
    // Call methods
    this.initializeMap();
  }

  initializeMap() {
    const latlng = {
      lat: -13.0647527,
      lng: -55.9214055,
    };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    });
    const marker = new google.maps.Marker({
      position: latlng,
      map: map,
    });
  }

}

export default Map;

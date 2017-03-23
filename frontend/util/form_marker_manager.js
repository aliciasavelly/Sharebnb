export default class FormMarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];

    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
  }

  updateMarkers(spot) {
    for(let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers.length = 0;
    this._createMarkerFromSpot(spot);
  }

  _createMarkerFromSpot(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id
    });

    this.markers.push(marker);
  }
};

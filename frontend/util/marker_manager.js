export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];

    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
  }

  updateMarkers(spots) {
    this.spots = spots;
    this._spotsToAdd().forEach(this._createMarkerFromSpot);
  }

  _spotsToAdd() {
    const currentSpots = this.markers.map( marker => marker.spotId );
    return this.spots.filter( spot => !currentSpots.includes(spot.id) );
  }

  _createMarkerFromSpot(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id
    });
    //
    //marker.addListener('click', () => this.handleClick(spot));
    //
    this.markers.push(marker);
  }
};

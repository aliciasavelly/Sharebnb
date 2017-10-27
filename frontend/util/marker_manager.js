export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];

    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(spots) {
    this.spots = spots;
    this._markersToRemove().forEach(this._removeMarker);
    this._spotsToAdd().forEach(this._createMarkerFromSpot);
  }

  _spotsToAdd() {
    const currentSpots = this.markers.map( marker => marker.spotId );
    return this.spots.filter( spot => !currentSpots.includes(spot.id) );
  }

  _createMarkerFromSpot(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const icon = {
      url: "https://res.cloudinary.com/sharebnb/image/upload/v1497489602/Entypo_2302_0__512_bpsfhn.png", // url
      scaledSize: new google.maps.Size(30, 30)
    };
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id,
      icon
    });

    this.markers.push(marker);
  }

  _markersToRemove() {
    const spotIds = this.spots.map( spot => spot.id );
    return this.markers.filter( marker => !spotIds.includes(marker.spotId) );
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
};

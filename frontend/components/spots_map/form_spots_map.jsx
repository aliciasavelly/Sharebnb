import React from 'react';
import { withRouter } from 'react-router';
import FormMarkerManager from '../../util/form_marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class FormSpotsMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this._mapOptions = {center: { lat: 39.797586, lng: -96.943742 },zoom: 3};
    this.map = new google.maps.Map(map, this._mapOptions);
    this.FormMarkerManager = new FormMarkerManager(this.map);
    this._registerListeners();
  }

  componentDidUpdate() {
    this.FormMarkerManager.updateMarkers(this.coords);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this.coords = coords;
      this._handleClick(coords);
    });
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "/new-listing",
      query: coords
    });
  }

  render() {
    return(
      <div id="map-container" className="map" ref="map">Map
      </div>
    )
  }
}

export default withRouter(FormSpotsMap);

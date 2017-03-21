import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import MarkerManager from '../../util/marker_manager';



class SpotsMap extends React.Component {
  componentDidMount() {
    const _mapOptions = {
      center: { lat: 37.777072, lng: -122.447774 },
      zoom: 12
    };

    // const map = this.e
    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
}

export default SpotsMap;

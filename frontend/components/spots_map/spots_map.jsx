import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';

class SpotsMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.777072, lng: -122.447774 },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
}

export default SpotsMap;

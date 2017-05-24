import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import MarkerManager from '../../util/marker_manager';

const destinationsList = {"Boston": {center: { lat: 42.357004, lng: -71.062309 }, zoom: 11},
                          "Chicago": {center: { lat: 41.883979, lng: -87.634669 }, zoom: 11},
                          "Detroit": {center: { lat: 42.336985, lng: -83.054480 }, zoom: 10},
                          "New York City": {center: { lat: 40.777878, lng: -73.937499 }, zoom: 10},
                          "San Francisco": {center: { lat: 37.777072, lng: -122.447774 }, zoom: 12},
                          "Seattle": {center: { lat: 47.598559, lng: -122.326300 }, zoom: 10}}

class SpotsMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this._mapOptions = {center: { lat: 39.797586, lng: -96.943742 },zoom: 3};
    this.map = new google.maps.Map(map, this._mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.state = { letters: this.props.filters.letters };

    Object.keys(destinationsList).forEach( key => {
      if (this.state.letters){
        if(key.toLowerCase().includes(this.state.letters.toLowerCase())) {
          this.map.setCenter(destinationsList[key].center);
          this.map.setZoom(destinationsList[key].zoom);
        } else {
        }
      }
    });
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.filters.letters) {
      if (nextProps.filters.letters !== this.props.filters.letters) {
        // debugger;
        this.state = { letters: nextProps.filters.letters };
        let foundLocation = false;
        Object.keys(destinationsList).forEach( key => {
          if(key.toLowerCase().includes(this.state.letters.toLowerCase())) {
            this.map.setCenter(destinationsList[key].center);
            this.map.setZoom(destinationsList[key].zoom);
            foundLocation = true;
          } else {
          }
        });
        if (!foundLocation) {
          this.map.setZoom(2);
        }
        this.MarkerManager.updateMarkers(this.props.spots);
      }
    }
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  // componentDidUpdate(nextProps) {
  //   if(nextProps.filters.letters) {
  //     if (nextProps.filters.letters !== this.props.filters.letters) {
  //       debugger;
  //       this.state = { letters: nextProps.filters.letters };
  //       let foundLocation = false;
  //       Object.keys(destinationsList).forEach( key => {
  //         if(key.toLowerCase().includes(this.state.letters.toLowerCase())) {
  //           this.map.setCenter(destinationsList[key].center);
  //           this.map.setZoom(destinationsList[key].zoom);
  //           foundLocation = true;
  //         } else {
  //         }
  //       });
  //       if (!foundLocation) {
  //         this.map.setZoom(2);
  //       }
  //       this.MarkerManager.updateMarkers(this.props.spots);
  //     }
  //   }
  //   this.MarkerManager.updateMarkers(this.props.spots);
  // }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {
    return(
      <div id="map-container" className="map" ref="map">Map
      </div>
    )
  }
}

export default withRouter(SpotsMap);

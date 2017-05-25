import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotTripItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.currentSpot = "";
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
    // debugger;
    // if (t)
    // this.props.requestSpots();
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.trips.length != nextProps.trips.length) {
      this.props.requestTrips();
      // debugger;
    }
  }

  componentDidMount(nextProps) {
    this.props.requestSpots();
  }

  handleClick() {
    this.props.router.push(`spots/${this.props.trip.spot_id}`)
  }

  deleteTrip() {
    this.props.deleteTrip(this.props.trip.id);
  }

  render() {
    this.props.spots.forEach( spot => {
      if (spot.id === this.props.trip.spot_id) {
        this.currentSpot = spot;
      }
    })

    if (this.currentSpot.image_url) {
      return(
        <div className="trip-item-outer">
          <div className="trip-index-item" onClick={this.handleClick}>
            <div className="image-container">
              <img src={this.currentSpot.image_url} />
            </div>
            <div className="item-details">
              <h1>{this.currentSpot.title}</h1>
              <p>${this.currentSpot.price}</p>
              <div className="dates-container">
                <div className="dates">
                  <p>Check in: </p>
                  {this.props.trip.check_in}
                </div>
                <div className="dates">
                  <p>Check out: </p>
                  {this.props.trip.check_out}
                </div>
              </div>

              <div id="round">
                <img className="host-image" id="host-image" src={this.currentSpot.host.image_url} />
              </div>
            </div>
          </div>
          <div className="delete-button-holder">
            <button onClick={this.deleteTrip}
              className="delete-button">
              Cancel booking
            </button>
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default withRouter(SpotTripItem);

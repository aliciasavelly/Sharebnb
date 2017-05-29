import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotTripItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.currentSpot = "";
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  componentDidMount(nextProps) {
    this.props.requestSpots();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trips.length != nextProps.trips.length) {
      this.props.requestTrips();
    }
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

    const { image_url, title, price, host } = this.currentSpot;
    const trip = this.props.trip;

    if (image_url) {
      return(
        <div className="trip-item-outer">
          <div className="trip-index-item" onClick={this.handleClick}>
            <div className="image-container">
              <img src={image_url} />
            </div>

            <div className="item-details">
              <h1>{title}</h1>
              <p>${price}</p>

              <div className="dates-container">
                <div className="dates">
                  <p>Check in: </p>
                  {trip.check_in}
                </div>
                
                <div className="dates">
                  <p>Check out: </p>
                  {trip.check_out}
                </div>
              </div>

              <div id="round">
                <img className="host-image" id="host-image" src={host.image_url} />
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

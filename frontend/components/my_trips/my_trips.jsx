import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SpotTripItem from './spot_trip_item'

class MyTrips extends React.Component {
  constructor(props) {
    super(props);

    this.renderTrips = this.renderTrips.bind(this);
  }

  componentWillMount() {
    this.props.requestTrips();
    this.props.requestSpots();
  }

  renderTrips() {
    return(
      <div className="trips-index">
        {this.props.trips.map( (trip, idx) => (
          <SpotTripItem requestSpots={ requestSpots } spots={ this.props.spots } trip={ trip } key={`trips-${idx}`} />
        ))}
      </div>
    )
  }

  render() {
    return(
      <div className="my-trips">
        <h1>Trips</h1>

        {this.renderTrips()}
      </div>
    )
  }
}

export default MyTrips;

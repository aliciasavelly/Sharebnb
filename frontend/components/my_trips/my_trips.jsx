import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SpotTripItem from './spot_trip_item'

class MyTrips extends React.Component {
  constructor(props) {
    super(props);

    this.renderTrips = this.renderTrips.bind(this);
  }

  componentDidMount() {
    this.props.requestTrips();
    this.props.requestSpots();
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if(!this.props.loggedIn) {
      this.props.router.push('/main');
    }
  }

  renderTrips() {
    const { deleteTrip, trips, requestTrips, requestSpots, spots } = this.props;

    return(
      <div className="trips-index">
        {this.props.trips.map( (trip, idx) => (
          <SpotTripItem deleteTrip={ deleteTrip }
                        trip={ trip }
                        trips={ trips }
                        requestTrips={ requestTrips }
                        requestSpots={ requestSpots }
                        spots={ spots }
                        key={`trips-${idx}`} />
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

export default withRouter(MyTrips);

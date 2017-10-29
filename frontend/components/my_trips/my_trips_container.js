import { selectAllTrips, selectAllSpots } from '../../reducers/selectors';
import { requestTrips, deleteTrip } from '../../actions/trip_actions';
import { requestSpots } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import MyTrips from './my_trips';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  trips: selectAllTrips(state),
  spots: selectAllSpots(state)
});

const mapDispatchToProps = dispatch => ({
  requestTrips: () => dispatch(requestTrips()),
  deleteTrip: tripId => dispatch(deleteTrip(tripId)),
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTrips);

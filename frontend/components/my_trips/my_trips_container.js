import { connect } from 'react-redux';
import MyTrips from './my_trips';
import { requestTrips, deleteTrip } from '../../actions/trip_actions';
import { selectAllTrips, selectAllSpots } from '../../reducers/selectors';
import { requestSpots } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser,
  trips: selectAllTrips(state),
  spots: selectAllSpots(state)
});

const mapDispatchToProps = dispatch => ({
  requestTrips: () => dispatch(requestTrips()),
  requestSpots: () => dispatch(requestSpots()),
  deleteTrip: (tripId) => dispatch(deleteTrip(tripId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTrips);

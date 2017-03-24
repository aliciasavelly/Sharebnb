import { connect } from 'react-redux';
import MyTrips from './my_trips';
import { requestTrips } from '../../actions/trip_actions';
import { selectAllTrips, asArray } from '../../reducers/selectors';
import { requestSpots } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser,
  trips: selectAllTrips(state),
  spots: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  requestTrips: () => dispatch(requestTrips()),
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTrips);

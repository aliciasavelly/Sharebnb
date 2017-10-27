import { selectAllDestinations } from '../../reducers/selectors';
import { requestSingleSpot } from '../../actions/spot_actions';
import { requestDestinations } from '../../actions/destination_actions';
import { createTrip } from '../../actions/trip_actions';
import { connect } from 'react-redux';
import SpotShow from './spot_show';

const mapStateToProps = (state, { params }) => {
  const spotId = parseInt(params.spotId);
  const spot = state.spotDetail;

  return {
    spotId,
    spot,
    destinations: selectAllDestinations(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleSpot: id => dispatch(requestSingleSpot(id)),
  requestDestinations: () => dispatch(requestDestinations()),
  createTrip: trip => dispatch(createTrip(trip))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);

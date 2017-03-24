import { connect } from 'react-redux';
import SpotUpdateForm from './spot_update_form';
import { createSpot, updateSpot, deleteSpot } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';
import { requestDestinations } from '../../actions/destination_actions';
import { selectAllDestinations } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return({
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser,
    filters: state.filters,
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng,
    destinations: selectAllDestinations(state),
    spot: state.spots[ownProps.location.pathname.slice(14)]
  })
};

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestDestinations: () => dispatch(requestDestinations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotUpdateForm);

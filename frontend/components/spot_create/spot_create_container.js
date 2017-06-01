import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot, updateSpot, deleteSpot } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';
import { requestDestinations } from '../../actions/destination_actions';
import { selectAllDestinations, selectAllListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng,
    destinations: selectAllDestinations(state),
    // spotDetail: state.spotDetail,
    listings: selectAllListings(state)
});

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestDestinations: () => dispatch(requestDestinations()),
  requestListings: () => dispatch(requestListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);

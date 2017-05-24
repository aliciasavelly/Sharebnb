import { connect } from 'react-redux';
import MyListings from './my_listings';
import { selectAllListings } from '../../reducers/selectors';
import { createSpot, updateSpot, deleteSpot, requestSingleSpot } from '../../actions/spot_actions';
import { requestListings } from '../../actions/listings_actions';
// import { selectSpot } from '../../reducers/selectors';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser,
  listings: selectAllListings(state),
  spotDetail: state.spotDetail
});

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
  requestSingleSpot: (spotId) => dispatch(requestSingleSpot(spotId)),
  requestListings: () => dispatch(requestListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyListings);

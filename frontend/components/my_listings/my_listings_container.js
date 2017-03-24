import { connect } from 'react-redux';
import MyListings from './my_listings';
import { createSpot, updateSpot, deleteSpot } from '../../actions/spot_actions';
import { requestListings } from '../../actions/listings_actions';
import { selectAllListings } from '../../reducers/selectors';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser,
  listings: selectAllListings(state),
  listingsss: state.listings
});

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
  requestListings: () => dispatch(requestListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyListings);

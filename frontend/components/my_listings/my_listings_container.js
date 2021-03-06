import { selectAllListings } from '../../reducers/selectors';
import { deleteSpot, requestSingleSpot } from '../../actions/spot_actions';
import { requestListings } from '../../actions/listings_actions';
import { connect } from 'react-redux';
import MyListings from './my_listings';

const mapStateToProps = state => ({
  listings: selectAllListings(state),
  loggedIn: !!state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteSpot: spotId => dispatch(deleteSpot(spotId)),
  requestSingleSpot: spotId => dispatch(requestSingleSpot(spotId)),
  requestListings: () => dispatch(requestListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyListings);

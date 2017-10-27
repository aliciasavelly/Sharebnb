import { selectAllDestinations, selectAllListings } from '../../reducers/selectors';
import { createSpot } from '../../actions/spot_actions';
import { requestDestinations } from '../../actions/destination_actions';
import { requestListings } from '../../actions/listings_actions';
import { connect } from 'react-redux';
import SpotForm from './spot_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng,
    destinations: selectAllDestinations(state),
    // TODO
    // spotDetail: state.spotDetail,
    listings: selectAllListings(state)
});

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  requestDestinations: () => dispatch(requestDestinations()),
  requestListings: () => dispatch(requestListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);

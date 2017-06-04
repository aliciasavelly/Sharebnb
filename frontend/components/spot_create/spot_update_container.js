import { connect } from 'react-redux';
import SpotUpdateForm from './spot_update_form';
import { updateSpot } from '../../actions/spot_actions';
import { requestDestinations } from '../../actions/destination_actions';
import { selectAllDestinations } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    destinations: selectAllDestinations(state),
    hosted_spots: state.session.currentUser.hosted_spots,
    url_id: ownProps.location.pathname.slice(14)
});

const mapDispatchToProps = dispatch => ({
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  requestDestinations: () => dispatch(requestDestinations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotUpdateForm);

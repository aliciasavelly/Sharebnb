import { connect } from 'react-redux';
import { requestSingleSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import { requestDestinations } from '../../actions/destination_actions';
import { selectAllDestinations } from '../../reducers/selectors';

import SpotShow from './spot_show';

const mapStateToProps = (state, { params }) => {
  const spotId = parseInt(params.spotId);
  const spot = state.spotDetail;
  return {
    spotId,
    spot,
    destinations: selectAllDestinations(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleSpot: id => dispatch(requestSingleSpot(id)),
  requestSpots: () => dispatch(requestSpots()),
  requestDestinations: () => dispatch(requestDestinations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);

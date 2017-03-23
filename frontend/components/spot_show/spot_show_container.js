import { connect } from 'react-redux';
import { requestSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';

import SpotShow from './spot_show';

const mapStateToProps = (state, { params }) => {
  const spotId = parseInt(params.spotId);
  const spot = selectSpot(state, spotId);
  return {
    spotId,
    spot
  };
};

const mapDispatchToProps = dispatch => ({
  requestSpot: id => dispatch(requestSpot(id)),
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);

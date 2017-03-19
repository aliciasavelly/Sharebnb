import { connect } from 'react-redux';
import SpotsIndex from './spots_index';

const mapStateToProps = state => ({
  benches: state.spots
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSpots: () => dispatch(requestSpots())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotsIndex);

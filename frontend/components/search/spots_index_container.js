import { connect } from 'react-redux';
import SpotsIndex from './spots_index';
import { requestSpots } from '../../actions/spot_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  spots: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

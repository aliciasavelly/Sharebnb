import { connect } from 'react-redux';
// import SpotsIndex from './spots_index';
// import { requestSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  spots: asArray(state),
  destination: state.filters.destination
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

import { connect } from 'react-redux';
// import SpotsIndex from './spots_index';
// import { requestSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';
import { requestSpots } from '../../actions/spot_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  spots: asArray(state),
  destination: state.filters.destination,
  filters: state.filters,
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

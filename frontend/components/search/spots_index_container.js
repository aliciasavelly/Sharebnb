import { selectAllSpots } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { requestSpots } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  spots: selectAllSpots(state),
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

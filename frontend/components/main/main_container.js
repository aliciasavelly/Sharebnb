import { connect } from 'react-redux';
import MainPage from './main';
import { selectAllDestinations } from '../../reducers/selectors';
import { requestDestinations } from '../../actions/destination_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  destinations: selectAllDestinations(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDestinations: () => dispatch(requestDestinations()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

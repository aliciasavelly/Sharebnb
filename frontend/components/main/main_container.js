import { connect } from 'react-redux';
import MainPage from './main';
import { requestDestinations } from '../../actions/destination_actions';
import { selectAllDestinations } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser,
  destinations: selectAllDestinations(state)
});
// TODO remove loggedin, currentUser

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDestinations: () => dispatch(requestDestinations()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

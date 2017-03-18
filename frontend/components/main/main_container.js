import { connect } from 'react-redux';
import MainPage from './main';
import { requestDestinations } from '../../actions/destination_actions';
import { selectAllDestinations } from '../../reducers/selectors';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser,
  destinations: selectAllDestinations(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestDestinations: () => dispatch(requestDestinations())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

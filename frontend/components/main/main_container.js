import { connect } from 'react-redux';
import MainPage from './main';
import { requestLogout } from '../../actions/session_actions';
import { updateUser } from '../../actions/users_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestLogout: () => dispatch(requestLogout()),
    updateUser: () => dispatch(updateUser())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

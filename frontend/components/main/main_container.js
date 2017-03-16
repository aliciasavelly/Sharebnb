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
    updateUser: (currentUserId, image_url) => dispatch(updateUser(currentUserId, image_url))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

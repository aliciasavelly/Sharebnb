import { connect } from 'react-redux';
import AppPage from './app_page';
import { requestLogout, updateUser } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestLogout: () => dispatch(requestLogout()),
    updateUser: (currentUserId, image_url) => dispatch(updateUser(currentUserId, image_url)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPage);

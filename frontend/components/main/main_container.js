import { connect } from 'react-redux';
import MainPage from './main';
import { requestLogout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // debugger;
  // const formType = ownProps.location.pathname.slice(1);
  return({
    requestLogout: () => dispatch(requestLogout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

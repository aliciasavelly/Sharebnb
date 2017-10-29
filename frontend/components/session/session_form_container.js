import { requestLogin, requestSignup, requestGuestUser, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? requestLogin : requestSignup;
  return ({
    processForm: user => dispatch(processForm(user)),
    formType,
    requestGuestUser: () => dispatch(requestGuestUser()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

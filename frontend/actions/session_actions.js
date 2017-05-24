import * as APIUtil from '../util/session_api_util';
import * as UsersAPIUtil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLogoutSuccess = () => ({
  type: RECEIVE_LOGOUT_SUCCESS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestLogin = user => dispatch => (
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

export const requestLogout = () => dispatch => (
  APIUtil.logout().then(
    user => dispatch(receiveCurrentUser(null))
  )
);

export const requestSignup = user => dispatch => (
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

export const requestGuestUser = () => dispatch => (
  APIUtil.loginGuestUser().then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

// TODO make sure this works, added it from other file
export const updateUser = (currentUserId, data) => dispatch => (
  UsersAPIUtil.updateUser(currentUserId, data).then(
    user => dispatch(receiveCurrentUser(user))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

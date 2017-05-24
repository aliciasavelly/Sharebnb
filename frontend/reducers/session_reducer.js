import { RECEIVE_CURRENT_USER, RECEIVE_LOGOUT_SUCCESS, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {currentUser: null, errors: []};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_LOGOUT_SUCCESS:
      return merge({}, state);
    case RECEIVE_ERRORS:
    // TODO changed this
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default SessionReducer;

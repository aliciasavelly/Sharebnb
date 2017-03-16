import * as APIUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';

export const updateUser = (currentUserId, data) => dispatch => (
  APIUtil.updateUser(currentUserId, data).then(
    user => dispatch(receiveCurrentUser(user))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

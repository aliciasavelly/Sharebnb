import { RECEIVE_SINGLE_SPOT, RECEIVE_SPOT_ERRORS, CLEAR_SPOT_ERRORS } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SingleSpotReducer = (state = {errors: []}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_SPOT:
      const spot = action.spot;
      return merge({}, state, spot);
    case RECEIVE_SPOT_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_SPOT_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default SingleSpotReducer;

import { RECEIVE_SINGLE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SingleSpotReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_SPOT:
      return action.spot;
    default:
      return state;
  }
};

export default SingleSpotReducer;

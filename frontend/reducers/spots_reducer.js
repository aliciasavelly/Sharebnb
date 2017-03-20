import { RECEIVE_SPOTS, RECEIVE_SINGLE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SPOTS:
      // debugger;
      let spots = action.spots;
      return merge({}, state, spots);
    default:
      return state;
  }
};

export default SpotsReducer;

import { RECEIVE_SPOTS, DESTROY_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SPOTS:
      // debugger;
      //TODO remove extras from here
      let spots = action.spots;
      return merge({}, state, spots);
    case DESTROY_SPOT:
      let nextState = merge({}, state);
      delete nextState[action.spot.id];
      return nextState;
    default:
      return state;
  }
};

export default SpotsReducer;

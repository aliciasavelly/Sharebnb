import { RECEIVE_SPOTS } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SPOTS:
      return action.spots;
    default:
      return state;
  }
};

export default SpotsReducer;

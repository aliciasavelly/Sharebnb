import { RECEIVE_DESTINATIONS } from '../actions/destination_actions';
import merge from 'lodash/merge';

const DestinationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_DESTINATIONS:
      const destinations = action.destinations;
      return merge({}, state, destinations);
    default:
      return state;
  }
};

export default DestinationsReducer;

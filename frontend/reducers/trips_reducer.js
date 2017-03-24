import { RECEIVE_TRIPS } from '../actions/trip_actions';
import merge from 'lodash/merge';

const TripsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRIPS:
      return action.trips;
    default:
      return state;
  }
}

export default TripsReducer;

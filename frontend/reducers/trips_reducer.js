import { RECEIVE_TRIPS, RECEIVE_SINGLE_TRIP } from '../actions/trip_actions';
import merge from 'lodash/merge';

const TripsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRIPS:
      return action.trips;
    case RECEIVE_SINGLE_TRIP:
      let trip = action.trip;
      return merge({}, state, { trip });
    default:
      return state;
  }
}

export default TripsReducer;

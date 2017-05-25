import { RECEIVE_TRIPS, RECEIVE_SINGLE_TRIP, DESTROY_TRIP } from '../actions/trip_actions';
import merge from 'lodash/merge';

const TripsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRIPS:
      return action.trips;
    case RECEIVE_SINGLE_TRIP:
      const trip = action.trip;
      return merge({}, state, { trip });
    case DESTROY_TRIP:
      let nextState = merge({}, state);
      delete nextState[action.tripId];
      return nextState;
    default:
      return state;
  }
}

export default TripsReducer;

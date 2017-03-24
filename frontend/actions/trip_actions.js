import * as APIUtil from '../util/trip_api_util';

export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_SINGLE_TRIP = "RECEIVE_SINGLE_TRIP";

export const receiveTrips = (trips) => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveSingleTrip = (trip) => ({
  type: RECEIVE_SINGLE_TRIP,
  trip
});

export const requestTrips = () => dispatch => (
  APIUtil.fetchTrips().then(
    trips => dispatch(receiveTrips(trips))
  )
);

export const createTrip = trip => dispatch => (
  APIUtil.createTrip(trip).then(
    trip => dispatch(receiveSingleTrip(trip))
  )
);

import * as APIUtil from '../util/trip_api_util';

export const RECEIVE_TRIPS = "RECEIVE_TRIPS";

export const receiveTrips = (trips) => ({
  type: RECEIVE_TRIPS,
  trips
});

export const requestTrips = () => dispatch => (
  APIUtil.fetchTrips().then(
    trips => dispatch(receiveTrips(trips))
  )
);

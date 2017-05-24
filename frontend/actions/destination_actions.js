import * as APIUtil from '../util/destination_api_util';

export const RECEIVE_DESTINATIONS = "RECEIVE_DESTINATIONS";

export const receiveDestinations = destinations => ({
  type: RECEIVE_DESTINATIONS,
  destinations
});

export const requestDestinations = () => dispatch => (
  APIUtil.fetchDestinations().then(
    destinations => dispatch(receiveDestinations(destinations))
  )
);

import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SINGLE_SPOT = "RECEIVE_SINGLE_SPOT";

export const receiveSpots = (spots) => ({
  type: RECEIVE_SPOTS,
  spots
});

export const receiveSingleSpot = (spot) => ({
  type: RECEIVE_SINGLE_SPOT,
  spot
})

export const requestSpots = () => dispatch => (
  APIUtil.fetchSpots().then(
    spots => dispatch(receiveSpots(spots))
  )
);

export const requestSingleSpot = (spotId) => dispatch => (
  APIUtil.fetchSingleSpot(spotId).then(
    spot => dispatch(receiveSingleSpot(spot))
  )
);

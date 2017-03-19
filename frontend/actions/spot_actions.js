import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";

export const receiveSpots = (spots) => ({
  type: RECEIVE_SPOTS,
  spots
});

export const requestSpots = () => dispatch => (
  APIUtil.fetchSpots().then(
    spots => dispatch(receiveSpots(spots))
  )
);

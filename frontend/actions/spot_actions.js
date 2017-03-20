import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SINGLE_SPOT = "RECEIVE_SINGLE_SPOT";
export const DESTROY_SPOT = "DESTROY_SPOT";
export const UPDATE_FILTER = "UPDATE_FILTER";

export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const receiveSingleSpot = spot => ({
  type: RECEIVE_SINGLE_SPOT,
  spot
});

export const destroySpot = spot => ({
  type: DESTROY_SPOT,
  spot
});

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

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

export const createSpot = spot => dispatch => (
  APIUtil.createSpot(spot).then(
    spot => dispatch(receiveSingleSpot(spot))
  )
);

export const updateSpot = (spotId, data) => dispatch => (
  APIUtil.updateSpot(spotId, data).then(
    spot => dispatch(receiveSingleSpot(spot))
  )
);

export const deleteSpot = spotId => dispatch => (
  APIUtil.deleteSpot(spotId).then(
    spot => dispatch(destroySpot(spot))
  )
);

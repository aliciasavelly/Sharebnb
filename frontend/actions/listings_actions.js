import * as APIUtil from '../util/listings_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const requestListings = () => dispatch => (
  APIUtil.fetchHostedSpots().then(
    listings => dispatch(receiveListings(listings))
  )
);

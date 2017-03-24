import { values } from 'lodash';

export const selectAllDestinations = ({ destinations }) => values(destinations);

export const asArray = ({ spots }) => values(spots);

export const selectSpot = ({ spots }, id) => {
  const spot = spots[id] || {};
  return spot;
};

export const selectAllListings = ({ listings }) => values(listings);

export const selectAllTrips = ({ trips }) => values(trips);

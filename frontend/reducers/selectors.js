import { values } from 'lodash';

export const selectAllDestinations = ({ destinations }) => values(destinations);
export const selectAllListings = ({ listings }) => values(listings);
export const selectAllTrips = ({ trips }) => values(trips);
export const selectAllSpots = ({ spots }) => values(spots);

export const selectSpot = ({ spots }, id) => {
  const spot = spots[id] || {};
  return spot;
};

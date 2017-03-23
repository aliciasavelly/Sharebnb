import { values } from 'lodash';

export const selectAllDestinations = ({ destinations }) => values(destinations);

export const asArray = ({ spots }) => values(spots);

export const selectSpot = ({ spots }, id) => {
  const spot = spots[id] || {};
  return spot;
};

import { values } from 'lodash';

export const selectAllDestinations = ({ destinations }) => values(destinations);

export const asArray = ({ spots }) => values(spots);

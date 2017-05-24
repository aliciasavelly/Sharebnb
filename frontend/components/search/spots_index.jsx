import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SpotIndexItem from './spot_index_item';

const SpotsIndex = ({ spots }) => (
  <div className="spots-index">
    <h2 id="no-results-found">Whoops! There are no listings where you've searched. Try looking in San Francisco or Boston!</h2>
    {spots.map( spot => (
      <SpotIndexItem spot={spot} key={spot.id} />
    ))}
  </div>
)

export default SpotsIndex;

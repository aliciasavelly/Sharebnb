import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SpotIndexItem from './spot_index_item';

const SpotsIndex = ({ spots }) => (
  <div className="spots-index">
    {spots.map( spot => (
      <SpotIndexItem spot={spot} key={spot.id} />
    ))}
  </div>
)

export default SpotsIndex;

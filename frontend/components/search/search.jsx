import React from 'react';
import SpotsIndex from './spots_index';
import SpotsMap from '../spots_map/spots_map';
//TODO
// import SpotMap from './../spot_map/spot_map';
// import FilterForm from './filter_form';

const Search = ({ spots, requestSpots }) => (
  <div className="spots-index-container">
    <div className="spots-index-left">
      <div className="spots-index-filters">
        insert here
      </div>
      <SpotsIndex spots={ spots } requestSpots={ requestSpots } />
    </div>

    <div className="spots-index-right">
      <SpotsMap />
    </div>
  </div>
);

export default Search;

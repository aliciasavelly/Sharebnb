import React from 'react';
import SpotsIndex from './spots_index';
//TODO
// import SpotMap from './../spot_map/spot_map';
// import FilterForm from './filter_form';

const Search = ({ spots, requestSpots }) => (
  <div className="user-pane">
    <div className="left">
      <SpotsIndex spots={ spots } requestSpots={ requestSpots } />
    </div>

    <div className="right">

    </div>
  </div>
);

export default Search;

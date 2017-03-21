import React from 'react';
import SpotsIndex from './spots_index';
import SpotsMap from '../spots_map/spots_map';
// import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';

//TODO
// import FilterForm from './filter_form';

const Search = ({ spots, updateFilter }) => {
  return (
  <div className="spots-index-container">
    <div className="spots-index-left">
      <div className="spots-index-filters">
        price filter here
      </div>
      <SpotsIndex spots={ spots } />
    </div>

    <div className="spots-index-right">
      <div className="fixed">
        <SpotsMap spots={spots} updateFilter={ updateFilter } />
      </div>
    </div>
  </div>
  )
};

export default Search;

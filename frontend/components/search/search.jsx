import React from 'react';
import SpotsIndex from './spots_index';
import SpotsMap from '../spots_map/spots_map';
import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';

//TODO
// import SpotMap from './../spot_map/spot_map';
// import FilterForm from './filter_form';

const Search = ({ spots, requestSpots }) => {
  return (
  <div className="spots-index-container">
    <div className="spots-index-left">
      <div className="spots-index-filters">
        price filter here
        <Slider className="slider" orientation="vertical" defaultValue={20} step={ 5 } />
      </div>
      <SpotsIndex spots={ spots } requestSpots={ requestSpots } />
    </div>

    <div className="spots-index-right">
      <div className="fixed">
        <SpotsMap />
      </div>
    </div>
  </div>
  )
};

export default Search;

import React from 'react';
import { Link } from 'react-router';

//TODO
//add children here?
const SpotShow = ({ spot, spotId, requestSpot, requestSpots, children }) => {
  const spots = {
    [spotId]: spot
  };

  requestSpots();
  // debugger;
  // debugger;
  // console.log(children);
  // console.log(spot.host);

  return(
    <div className="spot-show">
      <div className="spot-image-cover">
        <div className="spot-image">
          <img src={spot.image_url} />
        </div>
      </div>

      <div id="overview">
      </div>
    </div>
  )
};

export default SpotShow;

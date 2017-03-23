import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
// import ReviewShow from './review_show.jsx';
//
// const reviewList = (reviews = []) => (
//   reviews.map(review => (
//     <ReviewShow detail={ review.detail } key={review.id} />
//   ))
// );

const SpotDetail = ({ spot }) => {
  if (spot.host) {
    return(
      <div className="spot-detail">
        <div className="overview">
          <img className="host-image" src={spot.host.image_url} />
          <h2>{spot.title}</h2>
        </div>

        <div className="about-this-listing">
          <h2>About this listing</h2>
          <p>{spot.description}</p>
          <h3>Price</h3>
          <p>{spot.price}</p>
        </div>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default SpotDetail;

import React from 'react';

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
          <div className="round">
            <img
              className="host-image"
              id="host-image"
              src={spot.host.image_url}
              alt="Host Image"
            />
          </div>
          <div className="detail">
            <h2>{spot.title}</h2>
            <p>${spot.price}</p>
          </div>
        </div>

        <div className="about-this-listing">
          <h2>About this listing</h2>
          <p>{spot.description}</p>
        </div>
      </div>
    )
  } else {
    return (<div />);
  }
}

export default SpotDetail;

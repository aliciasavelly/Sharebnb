import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
import SpotDetail from './spot_detail';
// import ReviewButton from './review_button';

//TODO
//add children here?
class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.spot = this.props.spot;
  }
  // const spots = {
  //   [spotId]: spot
  // };

  // ({ spot, spotId, requestSingleSpot, requestSpots, children })

  // requestSpots();
  // debugger;
  // debugger;
  // console.log(children);
  // console.log(spot.host);
  componentDidMount() {

    debugger;
    this.props.requestSingleSpot(this.props.params.spotId);
    // this.props.fetchListing(this.props.params.listingId);

  }

  render () {
    if (this.spot) {
      return(
        <div className="spot-show">
          <div className="spot-image-cover">
            <div className="spot-image">
              <img src={this.spot.image_url} />
            </div>
          </div>

          <div id="spot-show-detail">
            <SpotDetail spot={ this.spot } />
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
};

export default SpotShow;

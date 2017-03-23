import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
import SpotDetail from './spot_detail';
// import ReviewButton from './review_button';

//TODO
//add children here?
class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }
  // const spots = {
  //   [spotId]: spot
  // };

  // ({ spot, spotId, requestSingleSpot, requestSpots, children })
  componentDidMount() {
    this.props.requestSingleSpot(this.props.params.spotId);
  }

  render () {
    if (this.props.spot) {
      return(
        <div className="spot-show">
          <div className="spot-image-cover">
            <div className="spot-image">
              <img src={this.props.spot.image_url} />
            </div>
          </div>

          <div id="spot-show-detail">
            <SpotDetail spot={ this.props.spot } />
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

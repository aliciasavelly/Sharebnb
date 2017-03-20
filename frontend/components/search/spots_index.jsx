import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SpotsIndexContainer from './spots_index_container';
import SpotIndexItem from './spot_index_item';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSpots();
  }

  render() {
    // debugger;
    if (this.props.spots.length > 0) {
      return(
        <div className="spots-index">
          <div className="spots-index-left">
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>Spots: </h1>
            {this.props.spots.map(spot => (
              <SpotIndexItem spot={spot} key={spot.id} />
            ))}
          </div>
          <div className="spots-index-right">
            <img src="http://www.drodd.com/images15/maps10.jpg" />

          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
          <div>nope</div>
        </div>

      )
    }
  }
}

export default SpotsIndex;

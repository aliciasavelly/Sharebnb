import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotTripItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.currentSpot = "";
  }

  componentWillReceiveProps() {
    this.props.requestSpots();
  }

  handleClick() {
    this.props.router.push(`spots/${this.props.trip.spot_id}`)
  }

  render() {
    // debugger;
    // console.log(this.props.spots[0]);
    // console.log(this.currentSpot.id);
    this.props.spots.forEach( spot => {
      if (spot.id === this.props.trip.spot_id) {
        this.currentSpot = spot;
      }
    })

    // {this.props.trip.spot_id}
    return(
      <div className="trip-index-item" onClick={this.handleClick}>
        <img src={this.currentSpot.image_url} />
        {this.currentSpot.title}
        {this.currentSpot.price}

      </div>
    )
  }
}


export default withRouter(SpotTripItem);

import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.spot = this.props.spot;
  }

  handleClick() {
    const spotId = this.spot.id;
    this.props.router.push(`spots/${spotId}`);
  }

  render() {
    const { title, price, image_url } = this.props.spot;

    return(
      <div className="spot-index-item"
           onClick={this.handleClick}>
        <div className="spot-index-item-detail">
          <img src={this.spot.image_url} />
          <p>${this.spot.price}.00</p>
          <p>{this.spot.title}</p>
        </div>
      </div>
    )
  }
};

export default withRouter(SpotIndexItem);

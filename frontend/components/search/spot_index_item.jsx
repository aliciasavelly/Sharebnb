import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.spot = this.props.spot;
  }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`);
  }

  render() {
    const { title, price, image_url } = this.props.spot;

    return(
      <div className="spot-index-item"
           onClick={this.handleClick}>
          <div className="img-container">
            <img src={this.props.spot.image_url} />
          </div>
        <div className="spot-index-item-detail">
          <p>${this.props.spot.price}</p>
          <p>{this.props.spot.title}</p>
        </div>
      </div>
    )
  }
};

export default withRouter(SpotIndexItem);

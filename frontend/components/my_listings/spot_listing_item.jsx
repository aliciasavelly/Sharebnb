import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotListingItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`)
  }

  render() {
    const { id,
            title,
            price,
            image_url,
            destination_id,
            host_id,
            description,
            lat,
            lng } = this.props.spot;

    return(
      <div className="spot-listing-item"
           onClick={this.handleClick}>
          <div className="img-container">
            <img src={this.props.spot.image_url} />
          </div>

          <div className="spot-listing-item-detail">
            <p>{price}</p>
            <h3>{title}</h3>
          </div>
      </div>
    )
  }
}

export default SpotListingItem;

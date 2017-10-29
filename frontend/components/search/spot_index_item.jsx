import React from 'react';
import { withRouter } from 'react-router';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`);
  }

  render() {
    const { title, price, image_url } = this.props.spot;

    return (
      <div className="spot-index-item" onClick={this.handleClick}>
        <div className="img-container">
          <img src={image_url} alt={`Home Image: ${title}`} />
        </div>

        <div className="spot-index-item-detail">
          <p>${price}</p>
          <p>{title}</p>
        </div>
      </div>
    );
  }
};

export default withRouter(SpotIndexItem);

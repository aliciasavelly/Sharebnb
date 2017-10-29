import React from 'react';
import { withRouter } from 'react-router';

class SpotListingItem extends React.Component {
  constructor(props) {
    super(props);
    this.spotId = this.props.spot.id;

    this.handleClick = this.handleClick.bind(this);
    this.updateSpot = this.updateSpot.bind(this);
    this.deleteSpot = this.deleteSpot.bind(this);
  }

  handleClick() {
    this.props.router.push(`spots/${this.spotId}`)
  }

  updateSpot() {
    this.props.router.push(`/edit-listing/${this.spotId}`);
  }

  deleteSpot() {
    this.props.deleteSpot(this.spotId);
  }

  render() {
    const { title, price, image_url } = this.props.spot;

    return (
      <div className="spot-listing-item-outer">
        <div className="spot-listing-item" onClick={this.handleClick}>
          <div className="img-container">
            <img src={image_url} alt="Home Image" />
          </div>

          <div className="spot-listing-item-detail">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>
        <div className="delete-button-holder">
          <button onClick={this.deleteSpot} className="delete-button">
            Delete this listing
          </button>
          <button
            onClick={this.updateSpot}
            className="delete-button"
            id="update-button">
            Update this listing
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotListingItem);

import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SpotListingItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { hosted_spots: this.props.spots };

    this.handleClick = this.handleClick.bind(this);
    this.deleteSpot = this.deleteSpot.bind(this);
  }

  // shouldComponentUpdate() {
  //
  // }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`)
  }

  deleteSpot() {
    // debugger;
    this.props.deleteSpot(this.props.spot.id);
    // this.props.requestListings();
    // this.setState({
    //   [hosted_spots]:
    // })
    // this.props.router.push('/my-page');
    // this.props.router.push('/my-listings');
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
      <div className="spot-listing-item-outer">
        <div className="spot-listing-item"
             onClick={this.handleClick}>
          <div className="img-container">
            <img src={this.props.spot.image_url} />
          </div>

          <div className="spot-listing-item-detail">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>
        <div className="delete-button-holder">
          <button onClick={this.deleteSpot}
                  className="delete-button">
                  Delete this listing
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(SpotListingItem);

import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MyListingsContainer from './my_listings_container';
import SpotListingItem from './spot_listing_item';

class MyListings extends React.Component {
  constructor(props) {
    super(props);

    this.renderListings = this.renderListings.bind(this);
  }

  renderListings() {
    return(
      <div className="listings-index">
      {this.props.currentUser.hosted_spots.map( spot => (
        <SpotListingItem deleteSpot={ deleteSpot } spot={ spot } key={ spot.id } />
      ))}
    </div>
    )
  }

  render() {
    return(
      <div className="my-listings">
        <div>filler</div><div>filler</div><div>filler</div><div>filler</div><div>filler</div><div>filler</div>
        <h1>Listings</h1>

        {this.renderListings()}

        <Link to="/new-listing">Add New Listings</Link>
      </div>

    )
  }
}

export default MyListings;

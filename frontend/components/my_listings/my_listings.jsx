import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MyListingsContainer from './my_listings_container';
import SpotListingItem from './spot_listing_item';

class MyListings extends React.Component {
  constructor(props) {
    super(props);

    this.renderListings = this.renderListings.bind(this);
  }

  componentWillMount() {
    this.props.requestListings();
  }

  componentWillUpdate(nextProps) {
    this.props.requestListings();
  }

  renderListings() {
    return(
      <div className="listings-index">
      {this.props.listings.map( (spot, idx) => (
        <SpotListingItem requestSingleSpot={ requestSingleSpot } deleteSpot={ this.props.deleteSpot } spot={ spot } key={`listings-${idx}`} />
      ))}
    </div>
    )
  }

  render() {
    return(
      <div className="my-listings">
        <h1>Listings</h1>
        <Link to="/new-listing" className="button">Add New Listings</Link>

        {this.renderListings()}

      </div>

    )
  }
}

export default MyListings;

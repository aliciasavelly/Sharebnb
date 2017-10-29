import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import SpotListingItem from './spot_listing_item';

class MyListings extends Component {
  constructor(props) {
    super(props);
    this.count = 0;

    this.renderListings = this.renderListings.bind(this);
  }

  componentDidMount() {
    this.props.requestListings();
  }

  componentWillUpdate(nextProps) {
    if (this.props.listings != nextProps.listings && this.count == 0) {
      this.count += 1;
      this.props.requestListings();
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if (!this.props.loggedIn && this.props.location.pathname != "/main") {
      this.props.router.push('/main');
    }
  }

  renderListings() {
    const { requestSingleSpot, deleteSpot } = this.props;

    return (
      <div className="listings-index">
        {this.props.listings.map( (spot, idx) => (
          <SpotListingItem
            deleteSpot={deleteSpot}
            spot={spot}
            key={`listings-${idx}`}
          /> ))}
      </div>
    );
  }

  render() {
    return (
      <div className="my-listings">
        <h1>Listings</h1>
        <Link to="/new-listing" className="button">Add New Listings</Link>
        {this.renderListings()}
      </div>
    );
  }
}

export default withRouter(MyListings);

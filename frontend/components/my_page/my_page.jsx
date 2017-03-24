import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
// import MyListingsContainer from './my_listings_container';
// import SpotListingItem from './spot_listing_item';

class MyPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="my-page">
        <h1>User page</h1>
        <Link to="/my-listings">View your listings</Link>
      </div>

    )
  }
}

export default MyPage;

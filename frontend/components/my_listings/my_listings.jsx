import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MyListingsContainer from './my_listings_container';

class MyListings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="my-listings">
        <div>filler</div><div>filler</div><div>filler</div><div>filler</div><div>filler</div><div>filler</div>
        <h1>Listings</h1>
        <Link to="/new-listing">Add New Listings</Link>
      </div>

    )
  }
}

export default MyListings;

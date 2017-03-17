import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import AppContainer from './app_container';

class AppPage extends React.Component {
  constructor(props) {
    super(props);

    // debugger;
    this.logoutUser = this.logoutUser.bind(this);
    this.rightNav = this.rightNav.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  logoutUser() {
    // debugger;
    this.props.requestLogout();
  }

  handleCloudinary(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        // debugger;
        this.props.updateUser(this.props.currentUser.id, { image_url: results[0].secure_url });
      }
    });
  }

  rightNav() {
    if (this.props.loggedIn) {
      return (
      <div className="right">

        <h3 className="nav-redirect">Host</h3>
        <h3 className="nav-redirect">Trips</h3>
        <div className="outer-round">
          <div className="round">
            <img className="index-image" src={this.props.currentUser.image_url} />
          </div>
        </div>

        <div className="hidden">

          <button className="new-user-icon"
            onClick={this.handleCloudinary}>Add user icon
          </button>
          <hr />
          <form className="nav-link-form" onSubmit={this.logoutUser}>
            <input className="nav-link" type="submit" value="Log out" />
            <hr />
          </form>
        </div>

      </div>)
    } else {
      return (
      <div className="right">
        <Link to="/login" className="nav-link">Log in</Link>
          <br />
        <Link to="/signup" className="nav-link">Sign up</Link>
      </div>)

    }
  }

  handleSearch() {

    // return(
    //
    // )
  }

  render() {
    return(
      <div className="main">
        <div className="navbar">
          <div className="left">
            <Link to='/main'>Airbnburrow</Link>
              <div className="search-div">
                <form className="search-form" onSubmit={this.handleSearch}>
                  <i className="fa fa-search" aria-hidden="true"></i>

                  <input className="search-input" type="text" placeholder="Where to?" />
                  <label>
                    Check In
                    <input className="search-input-checkin" type="date" placeholder="Check In" />
                  </label>

                  <label>
                    Check Out
                    <input className="search-input-checkout" type="date" placeholder="Check In" />
                  </label>
                  <select name="search-input-guest">
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guests</option>
                    <option value="8">8 guests</option>
                    <option value="9">9 guests</option>
                    <option value="10">10 guests</option>
                    <option value="11">11 guests</option>
                    <option value="12">12 guests</option>
                  </select>
                </form>
              </div>
          </div>

          {this.rightNav()}
        </div>
      </div>
    )
  }
}

export default withRouter(AppPage);

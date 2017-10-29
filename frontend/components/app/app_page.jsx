import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import AppContainer from './app_container';
import Datetime from 'react-datetime';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "", loggedIn: this.props.loggedIn };

    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.update = this.update.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.goToLink = this.goToLink.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.hiddenDropdown = this.hiddenDropdown.bind(this);
    this.leftNav = this.leftNav.bind(this);
    this.rightNav = this.rightNav.bind(this);
  }

  handleCloudinary(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        this.props.updateUser(this.props.currentUser.id, { image_url: results[0].secure_url });
      }
    });
  }

  handleDateChange(e) {
    this.setState({ filters: {check_in: e._d.toJSON().slice(0,10) }})
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
      this.props.router.replace('/spots-search');
      this.props.updateFilter("letters", e.currentTarget.value);
    };
  }

  clearFilters() {
    this.props.updateFilter("letters", "");
    this.setState({ city: "" });
  }

  goToLink(location) {
    this.props.router.push(location);
    window.scrollTo(0, 0);
  }

  logoutUser() {
    this.props.requestLogout();
    this.state.loggedIn = false;
  }

  hiddenDropdown() {
    if (this.state.loggedIn || this.props.loggedIn) {
      return(
        <ul>
          <li onClick={ () => (this.goToLink('/my-listings')) }>Host</li>
          <hr/>
          <li onClick={ () => (this.goToLink('/my-trips')) }>Trips</li>
          <hr/>
          <li onClick={this.handleCloudinary}>Add user icon</li>
          <hr/>
          <li onClick={this.logoutUser}>Log out</li>
          <hr/>
        </ul>
      )
    } else {
      return(
        <ul>
          <li onClick={ () => (this.goToLink('/login')) }>Log in</li>
          <hr/>
          <li onClick={ () => (this.goToLink('/signup')) }>Sign up</li>
          <hr/>
        </ul>
      )
    }
  }

  createGuestOptions() {
    let items = [];

    for (let i = 2; i <= 12; i++) {
      items.push(<option value={`${i} guests`} key={i}>{`${i} guests`}</option>);
    }

    return items;
  }

  leftNav() {
    return (
      <div id="left" className="left">
        <div id="title-carot">
          <Link to='/main' onClick={this.clearFilters}>Sharebnb</Link>

          <div className="carot" id="carot">
            <img
              className="img-carot"
              src="https://res.cloudinary.com/sharebnb/image/upload/v1495754937/down-carot_rkc0ch.png"
              alt="Hover For Options"
            />
          </div>

          <div className="hidden">
            {this.hiddenDropdown()}
          </div>
        </div>

        <div className="search-div">
          <form className="search-form" >
            <i className="fa fa-search" aria-hidden="true"></i>

            <input
              className="search-input"
              value={this.state.city}
              placeholder="Where to?"
              onChange={this.update("city")}
              type="text"
            />

            <label className="first-label">
              <Datetime
                className="datetime"
                defaultValue="Check In"
                timeFormat={false}
                onChange={this.handleDateChange}
              />
            </label>
            <p></p>
            <label className="second-label">
              <Datetime
                className="datetime"
                defaultValue="Check Out"
                timeFormat={false}
              />
            </label>
            <select className="search-input-guest">
              <option value="1">1 guest</option>
              {this.createGuestOptions()}
            </select>
          </form>
        </div>
      </div>
    );
  }

  rightNav() {
    if (this.state.loggedIn || this.props.loggedIn) {
      return (
        <div className="right">

          <h3 className="nav-redirect" onClick={ () => (this.goToLink('/my-listings')) }>Host</h3>
          <h3 className="nav-redirect" onClick={ () => (this.goToLink('/my-trips')) }>Trips</h3>
          <div className="outer-round">
            <div className="round">
              <img
                className="index-image"
                src={this.props.currentUser.image_url}
                alt="User Icon"
              />
            </div>
          </div>

          <div className="hidden">

            <button
              className="new-user-icon"
              onClick={this.handleCloudinary}>Add user icon
            </button>
            <hr />
            <form className="nav-link-form" onSubmit={this.logoutUser}>
              <input className="nav-link" type="submit" value="Log out" />
              <hr />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="right">
          <Link to="/login" className="nav-link-show">Log in</Link>
            <br />
          <Link to="/signup" className="nav-link-show">Sign up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="main">
        <div className="navbar">
          {this.leftNav()}
          {this.rightNav()}
        </div>
      </div>
    );
  }
}

export default withRouter(AppPage);

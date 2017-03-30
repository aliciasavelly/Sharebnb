import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import AppContainer from './app_container';
// require('react-datetime');
import Datetime from 'react-datetime';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };

    this.logoutUser = this.logoutUser.bind(this);
    this.leftNav = this.leftNav.bind(this);
    this.rightNav = this.rightNav.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.update = this.update.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.goToHost = this.goToHost.bind(this);
    this.goToTrips = this.goToTrips.bind(this);
  }

  logoutUser() {
    this.props.requestLogout();
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


  leftNav() {
    return(
      <div id="left" className="left">
        <Link to='/main' onClick={this.clearFilters}>Sharebnb</Link>
        <div className="search-div">
          <form className="search-form" >
            <i className="fa fa-search" aria-hidden="true"></i>

            <input className="search-input"
                   value={this.state.city}
                   placeholder="Where to?"
                   onChange={this.update("city")}
                   type="text" ></input>

            <label className="first-label">
              <Datetime className="datetime"
                defaultValue="Check In"
                timeFormat={false}
                onChange={this.handleDateChange}/>
            </label>
            <p></p>
            <label className="second-label">
              <Datetime className="datetime"
                defaultValue="Check Out"
                timeFormat={false}/>
            </label>
            <select className="search-input-guest">
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
    )
  }

  goToHost() {
    this.props.router.push('/my-listings');
  }

  goToTrips() {
    this.props.router.push('/my-trips');
  }

  rightNav() {
    if (this.props.loggedIn) {
      return (
      <div className="right">

        <h3 className="nav-redirect" onClick={this.goToHost}>Host</h3>
        <h3 className="nav-redirect" onClick={this.goToTrips}>Trips</h3>
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
        <Link to="/login" className="nav-link-show">Log in</Link>
          <br />
        <Link to="/signup" className="nav-link-show">Sign up</Link>
      </div>)
    }
  }

  render() {
    return(
      <div className="main">
        <div className="navbar">
          {this.leftNav()}
          {this.rightNav()}
        </div>
      </div>
    )
  }
}

export default withRouter(AppPage);

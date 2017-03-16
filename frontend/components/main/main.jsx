import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainContainer from './main_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    // debugger;
    this.logoutUser = this.logoutUser.bind(this);
    this.rightNav = this.rightNav.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);

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
        this.props.updateUser(results[0].secure_url);
      }
    });
  }

  rightNav() {
    if (this.props.loggedIn) {
      return (
      <div className="right">
        <form onSubmit={this.logoutUser}>
          <input className="nav-link" type="submit" value="Log out" />
        </form>

        <button className="new_user_icon"
                onClick={this.handleCloudinary}>
                Add user icon
        </button>
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

  render() {
    return(
      <div className="main">
        <div className="navbar">
          <div className="left">
            <h2>Sharebnb</h2>
          </div>

          {this.rightNav()}
          <img className="index-image" src={this.props.currentUser.image_url} />
        </div>
      </div>
    )
  }
}

export default withRouter(MainPage);

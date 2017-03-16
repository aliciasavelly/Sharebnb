import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainContainer from './main_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    // debugger;
    this.props.requestLogout();
  }

  render() {
    return(
      <div className="main">
        <div className="navbar">
          <Link to="/login">Log in</Link>
          <br />
          <Link to="/signup">Sign up</Link>
          <br />
          <form onSubmit={this.logoutUser}>
            <input className="button" type="submit" value="Log out" />
          </form>
        </div>

      </div>
    )
  }
}

export default withRouter(MainPage);

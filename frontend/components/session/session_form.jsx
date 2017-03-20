import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';
import FacebookLogin from 'react-facebook-login';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      first_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuestUser = this.loginGuestUser.bind(this);
    this.firstNameInput = this.firstNameInput.bind(this);
    this.handleFacebookSubmit = this.handleFacebookSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
    // if (this.props.formType !== newProps.formType) {
    // this.props.removeErrors();
    // }
  }

  // componentWillMount() {
  //   this.props.clearErrors;
  // }

  // componentWillReceiveProps(newProps) {
  //
  // }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push('/main');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.clearErrors();
  }

  handleFacebookSubmit() {
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  redirectLink() {
    if (this.props.formType === "login") {
      return (
      <div className="redirect" id="bottom">
        <p>Don't have a Sharebnb account?</p>
        <Link to="/signup">Sign up</Link>
      </div>)
    } else {
      return (
      <div className="redirect" id="bottom">
        <p>Already have a Sharebnb account?</p>
        <Link to="/login">Log in</Link>
      </div>)
    }
  }

  renderErrors() {
    let errors = this.props.errors;
    if (errors === undefined || errors.length < 1) {
      return "";
    } else {
      return(
        <ul className="errors">
          {errors.map( (error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}

        </ul>
      )
    }
  }

  loginGuestUser(e) {
    e.preventDefault();
    this.props.requestGuestUser();
  }

  topSection() {
    if (this.props.formType === "login") {
      return(
        <div></div>
      )
    } else {
      return(
        <p className="signup-top">Sign up to join Sharebnb's trusted community of millions and have your own unique experience.</p>
      )
    }
  }

  firstNameInput() {
    if (this.props.formType === "login") {
      return "";
    } else {
      return(
        <div>
          <input type="text"
                 placeholder="First name"
                 value={this.state.first_name}
                 onChange={this.update("first_name")} />
          <i className="fa fa-user-o" aria-hidden="true"></i>
        </div>
      )
    }
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    let formType = this.props.formType;
    let title = (formType === "login") ? "Log In" : "Sign up";

    return(
      <div className="login-signup-form-container">
        <div className="padding"></div>
        <div className="login-signup-header">
          <h2>{title}</h2>
          <Link to='/main' className="main-redirect-x">

            <i className="fa fa-times main-redirect-x" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="login-signup-form-box">
          <div className="top-section">
            {this.topSection()}

            <form onSubmit={this.loginGuestUser}>
              <input className="button" type="submit" value="Log in with guest account" />
            </form>

          </div>

          <h4 className="small"><hr className="left" />or<hr className="right" /></h4>

          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-signup-form">
              <div className="username-input">
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update("username")} />
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>

              <div className="first-name-input">
                {this.firstNameInput()}

              </div>

              <div className="password-input">
                <input type="password"
                  placeholder="Create a password"
                  value={this.state.password}
                  onChange={this.update("password")} />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <input id="button" className="button here" type="submit" value={title} />
            </div>
            <hr></hr>
          </form>
          {this.redirectLink()}
        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);

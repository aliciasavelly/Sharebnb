import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';

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
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  redirectLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign up</Link>
    } else {
      return <Link to="/login">Log in</Link>
    }
  }

  renderErrors() {
    let errors = this.props.errors;
    if (errors === undefined || errors.length < 1) {
      return "";
    } else {
      return(
        <ul>
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
    console.log(this.props);
    // this.props.router.push('/');
  }

  topSection() {
    if (this.props.formType === "login") {
      return(
        <form onSubmit={this.loginGuestUser}>
          <input type="submit" value="Log in with guest account" />
        </form>
      )
    } else {
      return(
        <p>Sign up to join Sharebnb's trusted community of millions and have your own unique experience.</p>
      )
    }
  }

  render() {
    let formType = this.props.formType;
    let title = (formType === "login") ? "Log in" : "Sign up";

    return(
      <div className="login-signup-form-container">
        <h2>{title}</h2>
        {this.topSection()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-signup-form">
            <input type="text"
                   placeholder="Username"
                   value={this.state.username}
                   onChange={this.update("username")} />
            <input type="text"
                   placeholder="First name"
                   value={this.state.first_name}
                   onChange={this.update("first_name")} />
            <input type="password"
                   placeholder="Create a password"
                   value={this.state.password}
                   onChange={this.update("password")} />
            <input type="submit" value={title} />

          </div>
        </form>

      </div>
    )
  }
}

export default withRouter(SessionForm);

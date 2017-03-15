import React from 'react';
import { Link, withRouter } from 'react-router';
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
    this.guestUser = this.guestUser.bind(this);
  }

  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }

  // redirectIfLoggedIn() {
  //   if(this.props.loggedIn) {
  //     this.props.router.push('/');
  //   }
  // }

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

  guestUser() {
    console.log(this);
    this.setState({
      username: "aliciacodes",
      first_name: "Alicia",
      password: "codingissupercool"
    })
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  topSection() {
    if (this.props.formType === "login") {
      return(
        <form onSubmit={this.guestUser}>
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

        </form>

      </div>
    )
  }
}

export default SessionForm;

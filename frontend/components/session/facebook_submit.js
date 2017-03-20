//doesn't work because it doesn't provide a password
<FacebookLogin
  appId="1112255432252971"
  autoLoad={true}
  fields="name,email,picture"
  onClick={this.handleFacebookSubmit}
  callback={this.responseFacebook} />

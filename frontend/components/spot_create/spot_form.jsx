import React from 'react';
// import SpotCreateContainer from './spot_create_container';
import FormSpotsMap from '../spots_map/form_spots_map';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = {lat: "", lng: ""};
    this.state = {
      title: "",
      price: 0,
      image_url: "",
      description: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListings = this.navigateToListings.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToListings() {
    this.props.router.push("/my_listings");
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
      if(error){
        console.log(error);
      } else {
        this.setState({ image_url: results[0].secure_url });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const spot = Object.assign({}, this.state, this.coords);
    this.props.createSpot({ spot });
    this.navigateToListings();
  }

  render() {
    // debugger;
    const { title, price, image_url, description } = this.state;
    const { lat, lng } = this.coords;

    return(
      <div className="spot-form-container">
        <h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2>
        <div className="new-spot-form">
          <h2 className="new-spot-header">Hi, {this.props.currentUser.first_name}! Let's get you ready to become a host.</h2>
          <h3 className="new-spot-question">Where's your place located?</h3>
          <div className="map-container">
            <FormSpotsMap />
          </div>
        </div>
      </div>
    )
  }
}

export default SpotForm;

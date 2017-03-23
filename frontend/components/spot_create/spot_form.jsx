import React from 'react';
// import SpotCreateContainer from './spot_create_container';
import FormSpotsMap from '../spots_map/form_spots_map';
import { withRouter } from 'react-router';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = {lat: 82, lng: -122};
    this.state = {
      title: "",
      price: 0,
      image_url: "",
      description: "",
      host_id: this.props.currentUser.id,
      destination_id: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListings = this.navigateToListings.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.updateCoords = this.updateCoords.bind(this);

  }

  componentDidMount() {
    this.props.requestDestinations();
  }

  navigateToListings() {
    this.props.router.push("/my-listings");
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  updateCoords() {
    this.coords = {lat: this.props.lat, lng: this.props.lng};
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

    this.updateCoords();
    const spot = Object.assign({}, this.state, this.coords);
    // debugger
    this.props.createSpot( spot );
    this.navigateToListings();
  }

  render() {
    // this.props.requestDestinations();
    // this.props.lat, this.props.lng
    debugger;
    const { title, description, price, image_url } = this.state;
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

          <form onSubmit={this.handleSubmit}>
            <label className="title">Title</label>
            <input className="title-field"
                   type="text"
                   value={title}
                   onChange={this.update("title")} />

            <label className="description">Description</label>
            <textarea className="description-field"
                      rows="7" cols="70"
                      value={description}
                      onChange={this.update("description")} />

            <label className="price">Price</label>
            <input className="price-field"
                   type="number"
                   value={price}
                   onChange={this.update("price")} />

            <div className="image-button">
              <button
                  onClick={this.handleCloudinary}
                  className="spot-image-button" >
                  Add image
              </button>
            </div>

            <div className="submit-button">
              <input type="submit" value="Create listing" className="new-spot-button" />
            </div>
          </form>

          <div className="listings-button-holder">
            <button
                onClick={this.navigateToListings}
                className="listings-button">
                Back to your listings
            </button>
          </div>
        </div>

        <img src={image_url} />
      </div>
    )
  }
}

export default withRouter(SpotForm);

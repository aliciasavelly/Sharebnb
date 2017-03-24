import React from 'react';
import FormSpotsMap from '../spots_map/form_spots_map';
import { withRouter } from 'react-router';

class SpotUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = {lat: this.props.spot.lat, lng: this.props.spot.lng};
    this.state = {
      title: this.props.spot.title,
      price: this.props.spot.price,
      image_url: this.props.spot.image_url,
      description: this.props.spot.description,
      host_id: this.props.currentUser.id,
      destination_id: this.props.spot.destination_id
    };

    // debugger;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListings = this.navigateToListings.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
    this.updateDestination = this.updateDestination.bind(this);
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

  updateDestination(e) {
    let destinationId = 1;
    this.props.destinations.forEach( destination => {
      if (destination.city === e.currentTarget.value) {
        destinationId = destination.id;
      }
    });
    let field = "destination_id";
    this.setState({
      [field]: destinationId
    })
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
    this.props.createSpot( spot );
    this.navigateToListings();
  }

  render() {
    debugger;
    const { title, description, price, image_url } = this.state;
    const { lat, lng } = this.coords;

    return(
      <div className="spot-form-container">
        <div className="header">
          <h2 className="new-spot-header">Hi, {this.props.currentUser.first_name}! Let's get you ready to </h2><h2 className="green">become a host.</h2>
        </div>
        <div className="new-spot-form">

          <form onSubmit={this.handleSubmit} className="form">
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

            <label className="destination">City</label>
            <select onChange={this.updateDestination} defaultValue="select">
              <option value="select" disabled>Select city</option>
              <option value="other">Other</option>
              <option value="Boston">Boston</option>
              <option value="San Francisco">San Francisco</option>
              <option value="New York City">New York City</option>
              <option value="Seattle">Seattle</option>
              <option value="Chicago">Chicago</option>
              <option value="Detroit">Detroit</option>
            </select>

            <div className="image-container">
              <div className="image-button" onClick={this.handleCloudinary}>
                <button
                  onClick={this.handleCloudinary}
                  className="spot-image-button" >
                  Add image
                </button>
              </div>

              <div className="image">
                <img src={image_url} />
              </div>
            </div>

            <div className="submit-button">
              <input type="submit" value="Create listing" className="new-spot-button" />
            </div>
          </form>

          <div className="map-holder">
            <h3 className="new-spot-question">Where's your place located?</h3>
            <div className="map-container">
              <FormSpotsMap />
            </div>
          </div>
        </div>

        <div className="listings-button-holder">
          <button
              onClick={this.navigateToListings}
              className="listings-button">
              Back to your listings
          </button>
        </div>

      </div>
    )
  }
}

export default withRouter(SpotUpdateForm);

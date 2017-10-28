import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SpotUpdateForm extends Component {
  constructor(props) {
    super(props);

    this.spot = "";
    this.props.hosted_spots.forEach( spot => {
      if(spot.id === parseInt(this.props.url_id)) {
        this.spot = spot;
      }
    });

    this.coords = {lat: this.spot.lat, lng: this.spot.lng};
    this.state = {
      title: this.spot.title,
      price: this.spot.price,
      image_url: this.spot.image_url,
      description: this.spot.description,
      destination_id: this.spot.destination_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListings = this.navigateToListings.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
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

  handleCloudinary(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
      if (error){
        console.log(error);
      } else {
        this.setState({ image_url: results[0].secure_url });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const spot = Object.assign({}, this.state, this.coords);
    this.props.updateSpot( this.spot.id, spot );
    this.navigateToListings();
  }

  render() {
    const { title, description, price, image_url } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div className="spot-form-container">
        <div className="header">
          <h2 className="new-spot-header">Hi, {this.props.currentUser.first_name}! Let's </h2><h2 className="green">update your listing.</h2>
        </div>
        <div className="new-spot-form">

          <form onSubmit={this.handleSubmit} className="form">
            <label className="title">Title</label>
            <input
              className="title-field"
              type="text"
              value={title}
              onChange={this.update("title")}
            />

            <label className="description">Description</label>
            <textarea
              className="description-field"
              rows="7" cols="70"
              value={description}
              onChange={this.update("description")}
            />

            <label className="price">Price</label>
            <input
              className="price-field"
              type="number"
              value={price}
              onChange={this.update("price")}
            />

            <div className="image-container">
              <div className="image-button" onClick={this.handleCloudinary}>
                <button
                  onClick={this.handleCloudinary}
                  className="spot-image-button" >
                  Add image
                </button>
              </div>

              <div className="image">
                <img src={image_url} alt="Home Image" />
              </div>
            </div>

            <div id="update-button" className="submit-button">
              <input type="submit" value="Update listing" className="new-spot-button" />
            </div>
          </form>
        </div>

        <div className="listings-button-holder">
          <button
            onClick={this.navigateToListings}
            className="listings-button">
            Back to your listings
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotUpdateForm);

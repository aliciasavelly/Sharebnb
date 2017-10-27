import React from 'react';
import FormSpotsMap from '../spots_map/form_spots_map';
import { withRouter } from 'react-router';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.coords = {lat: 82, lng: -122};
    this.state = {
      title: "",
      price: 0,
      image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1494639317/no-propertyfound_pu5vkf.png",
      description: "",
      host_id: this.props.currentUser.id,
      destination_id: 1,
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListings = this.navigateToListings.bind(this);
    this.navigateToSpotShow = this.navigateToSpotShow.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
    this.updateDestination = this.updateDestination.bind(this);
    this.renderImage = this.renderImage.bind(this);
    // this.setId = this.setId.bind(this);
  }

  componentDidMount() {
    this.props.requestDestinations();
    this.props.requestListings();
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.listings.length != nextProps.listings.length ) {
      let lastListing = nextProps.listings[nextProps.listings.length - 1];
      this.navigateToSpotShow(lastListing.id);
    }
  };

  // TODO
  // setId() {
  //   let lastListingId = this.props.listings[this.props.listings.length - 1].id;
  //   let userId = this.props.currentUser.id;
  //   let newId;
  //   if (String(lastListingId).slice(0, 3) === String(userId)) {
  //     newId = lastListingId + 1;
  //   } else {
  //     newId = Number(String(userId) + '001')
  //   }
  //   this.state.id = newId;
  // }

  navigateToListings() {
    this.props.router.push("/my-listings");
  }

  navigateToSpotShow(id) {
    // TODO
    // this.props.router.push(`/spots/${this.state.id}`);
    this.props.router.push(`/spots/${id}`);
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

    // this.setId();

    this.updateCoords();
    const spot = Object.assign({}, this.state, this.coords);
    this.newSpot = this.props.createSpot( spot );

    this.props.requestListings();
    this.props.requestListings();
    this.props.requestListings();

    // TODO
    // this.navigateToSpotShow();

    // if (this.props.spotDetail.errors.length == 0) {
    //   // this.navigateToListings();
    // } else {
    //   this.setState({ errors: this.props.spotDetail.errors })
    // }
  }

  renderErrors() {
    let errors = this.state.errors;
    if (errors.length > 0) {
      return(
        <ul className="spot-errors">
          {errors.map( (error, idx) => (
            <li key={`spot-error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  renderImage() {
    if (this.state.image_url.length > 0) {
      return(
        <img src={this.state.image_url} />
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  render() {
    const { title, description, price, image_url } = this.state;
    const { lat, lng } = this.coords;
    // debugger

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
                {this.renderImage()}
              </div>
            </div>

            <div className="submit-button">
              <input type="submit" value="Create listing" className="new-spot-button" />
            </div>
          </form>

          {this.renderErrors()}

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

export default withRouter(SpotForm);

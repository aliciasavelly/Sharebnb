import React from 'react';
// import SpotCreateContainer from './spot_create_container';

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
    // this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
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



  render() {
    return(
      <div className="spot-form-container">
        <h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2><h2>filler</h2>
      </div>
    )
  }
}

export default SpotForm;

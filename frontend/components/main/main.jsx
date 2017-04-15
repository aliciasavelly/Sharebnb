import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainContainer from './main_container';
// import { GenericScrollBox, ScrollBox, ScrollAxes, FastTrack } from 'react-scroll-box';
// var Slider = require('react-slick');
import Slider from 'react-slick';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { city: "" };
    this.renderDestinations = this.renderDestinations.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.requestDestinations();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push('/spots-search');
    this.props.updateFilter("letters", e.currentTarget.textContent);
  }

  renderDestinations() {
    return(
      <div className="destinations-items" id="destinations-items">
        {this.props.destinations.map( (destination, idx) => (
          <div className="cursor-responsive" key={`destination-${idx}`} value={destination.city} onClick={this.handleClick} >
            <img className="city-image" src={destination.image_url} value={destination.city} />
            <p className="city-name">{destination.city}</p>
          </div>
        ))}
      </div>
    )
  }

  render() {
    if (this.props.destinations.length > 0) {
      return(
        <div className="outer-main-div">
          <p className="top-title"><strong>Where to?</strong> Start your next adventure on Sharebnb.</p>
          <div className="destinations-index-outer">
            <div className="destinations-index">
              {this.renderDestinations()}
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default withRouter(MainPage);

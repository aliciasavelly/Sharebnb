import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import MainContainer from './main_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderDestinations = this.renderDestinations.bind(this);
  }

  componentWillMount() {
    this.props.requestDestinations();
  }

  renderDestinations() {
    // debugger;
    return(

      <div className="destinations-items">
        {this.props.destinations.map( (destination, idx) => (
          <div className="cursor-responsive" key={`destination-${idx}`}>
            <img className="city-image" src={destination.image_url} />
            <p className="city-name">{destination.city}</p>
          </div>
        )
        )}
      </div>

    )
  }

  render() {
    if (this.props.destinations.length > 0) {
      return(
        <div className="outer-main-div">
          <p className="top-title"><strong>Where to?</strong> Start your next adventure on Sharebnb.</p>
          <div className="destinations-index">
            <h3>Destinations</h3>
            {this.renderDestinations()}
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

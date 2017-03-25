import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
import SpotDetail from './spot_detail';
import Datetime from 'react-datetime';

// import ReviewButton from './review_button';

//TODO
//add children here?
class SpotShow extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.currentUser)
      this.state = {
        user_id: this.props.currentUser.id,
        check_in: "",
        check_out: "",
        num_guests: 1
      }
    else {

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckInDateChange = this.handleCheckInDateChange.bind(this);
    this.handleCheckOutDateChange = this.handleCheckOutDateChange.bind(this);
  }
  // const spots = {
  //   [spotId]: spot
  // };

  // ({ spot, spotId, requestSingleSpot, requestSpots, children })
  componentDidMount() {
    this.props.requestSingleSpot(this.props.params.spotId);
    this.props.requestDestinations();
  }

  updateGuests(e) {
    return e => {
      this.setState({
        [num_guests]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let spot = { spot_id: this.props.spot.id };
    const booking = Object.assign({}, this.state, spot);
    this.props.createTrip( booking ).then(hashHistory.push("/my-trips"));
  }

  handleCheckInDateChange(e) {
    this.state.check_in = e._d.toJSON().slice(0,10)
  }

  handleCheckOutDateChange(e) {
    this.state.check_out = e._d.toJSON().slice(0,10)
  }

  render () {
    if (this.props.spot && this.props.currentUser) {
      return(
        <div className="spot-show">
          <div className="spot-image-cover">
            <div className="spot-image">
              <img src={this.props.spot.image_url} />
            </div>
          </div>

          <div id="spot-show-detail">
            <SpotDetail destinations={ this.props.destinations } spot={ this.props.spot } />
          </div>

          <div className="booking-section">
            <p>${this.props.spot.price} per night</p>

            <div className="bookings-form">
              <form onSubmit={this.handleSubmit} className="form">
                <div className="dates">
                  <div className="check-in-out">
                    <Datetime className="check-field"
                      defaultValue="Check In"
                      timeFormat={false}
                      onChange={this.handleCheckInDateChange}/>
                  </div>
                  <div className="check-in-out">
                    <Datetime className="check-field"
                      defaultValue="Check Out"
                      timeFormat={false}
                      onChange={this.handleCheckOutDateChange}/>
                  </div>
                </div>

                <select onChange={this.updateGuests} defaultValue="1 guest">
                  <option value="1 guest">1 guest</option>
                  <option value="2 guests">2 guests</option>
                  <option value="3 guests">3 guests</option>
                  <option value="4 guests">4 guests</option>
                  <option value="5 guests">5 guests</option>
                  <option value="6 guests">6 guests</option>
                  <option value="7 guests">7 guests</option>
                  <option value="8 guests">8 guests</option>
                  <option value="9 guests">9 guests</option>
                  <option value="10 guests">10 guests</option>
                  <option value="11 guests">11 guests</option>
                  <option value="12 guests">12 guests</option>
                </select>

                <div id="special" className="submit-button">
                  <input type="submit" value="Book" className="book-button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    } else if (this.props.spot) {
      return(
        <div className="spot-show">
          <div className="spot-image-cover">
            <div className="spot-image">
              <img src={this.props.spot.image_url} />
            </div>
          </div>

          <div id="spot-show-detail">
            <SpotDetail destinations={ this.props.destinations } spot={ this.props.spot } />
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
};

export default withRouter(SpotShow);

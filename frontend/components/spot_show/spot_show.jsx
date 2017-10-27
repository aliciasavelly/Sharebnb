import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import SpotDetail from './spot_detail';
import Datetime from 'react-datetime';

// TODO add reviews
// import ReviewButton from './review_button';

class SpotShow extends Component {
  constructor(props) {
    super(props);

    if (this.props.currentUser) {
      this.state = {
        user_id: this.props.currentUser.id,
        check_in: "",
        check_out: "",
        num_guests: 1
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckInDateChange = this.handleCheckInDateChange.bind(this);
    this.handleCheckOutDateChange = this.handleCheckOutDateChange.bind(this);
    this.spotShowStandard = this.spotShowStandard.bind(this);
  }

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

  createGuestOptions() {
    let items = [];

    for (let i = 2; i <= 12; i++) {
      items.push(<option value={`${i} guests`} key={i}>{`${i} guests`}</option>);
    }

    return items;
  }

  spotShowStandard() {
    const { spot, destinations } = this.props;

    return (
      <div>
        <div className="spot-image-cover">
          <div className="spot-image">
            <img src={spot.image_url} alt="Image of Home for Rent" />
          </div>
        </div>

        <div id="spot-show-detail">
          <SpotDetail destinations={destinations} spot={spot} />
        </div>
      </div>
    );
  }

  render() {
    const { spot, currentUser, destinations } = this.props;

    if (spot && currentUser) {
      return (
        <div className="spot-show">
          {this.spotShowStandard()}

          <div className="booking-section">
            <p>${spot.price} per night</p>

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
                  <option value="1 guest" key="1">1 guest</option>
                  {this.createGuestOptions()}
                </select>

                <div id="special" className="submit-button">
                  <input type="submit" value="Book" className="book-button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (spot) {
      return (
        <div className="spot-show">{this.spotShowStandard()}</div>
      );
    } else {
      return (<div />);
    }
  }
};

export default SpotShow;

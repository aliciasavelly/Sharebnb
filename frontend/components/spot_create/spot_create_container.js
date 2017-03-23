import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot, updateSpot, deleteSpot } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) => {
  // if(ownProps.location.query.lat) {
    return({
      loggedIn: !!state.session.currentUser,
      currentUser: state.session.currentUser,
      filters: state.filters,
      lat: ownProps.location.query.lat,
      lng: ownProps.location.query.lng
    })
  // } else {
  //   return({
  //     loggedIn: !!state.session.currentUser,
  //     currentUser: state.session.currentUser,
  //     filters: state.filters,
  //     lat: 39.797586,
  //     lng: -96.943742
  //   })
  // }
};

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);

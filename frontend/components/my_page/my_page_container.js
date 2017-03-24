import { connect } from 'react-redux';
import MyPage from './my_page';
import { createSpot, updateSpot, deleteSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createSpot: (spot) => dispatch(createSpot(spot)),
  updateSpot: (spotId, data) => dispatch(updateSpot(spotId, data)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPage);

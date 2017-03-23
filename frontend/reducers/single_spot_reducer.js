import { RECEIVE_SINGLE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SingleSpotReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_SPOT:
      // debugger;
      let spot = action.spot;
      // let spotDetail = {[spot.id]: {id: spot.id, host_id: spot.host_id, description: spot.description, reviews: spot.reviews}};
      // console.log(spot);
      // return merge({}, spotDetail);
      return spot;
    default:
      return state;
  }
};

export default SingleSpotReducer;

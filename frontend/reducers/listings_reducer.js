import { RECEIVE_LISTINGS } from '../actions/listings_actions';
import { DESTROY_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LISTINGS:
    debugger;
      return merge({}, state, action.listings);
    case DESTROY_SPOT:
      let nextState = merge({}, state);
      delete nextState[action.spot.id];
      return nextState;
    default:
      return state;
  }
}

export default ListingsReducer;

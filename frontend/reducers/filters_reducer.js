import { CHANGE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {},
  minPrice: 0,
  maxPrice: 1000
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);

  if (action.type === CHANGE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;

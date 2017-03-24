import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import DestinationsReducer from './destinations_reducer';
import SpotsReducer from './spots_reducer';
import SingleSpotReducer from './single_spot_reducer';
import FiltersReducer from './filters_reducer';
import ListingsReducer from './listings_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  destinations: DestinationsReducer,
  spots: SpotsReducer,
  spotDetail: SingleSpotReducer,
  filters: FiltersReducer,
  listings: ListingsReducer
});

export default RootReducer;

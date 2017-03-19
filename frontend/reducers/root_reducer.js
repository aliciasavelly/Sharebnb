import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import DestinationsReducer from './destinations_reducer';
import SpotsReducer from './spots_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  destinations: DestinationsReducer,
  spots: SpotsReducer
});

export default RootReducer;

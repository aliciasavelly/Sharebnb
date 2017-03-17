import { combineReducers } from 'redux';
import DestinationsReducer from './destinations_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  destinations: DestinationsReducer,
  session: SessionReducer
});

export default RootReducer;

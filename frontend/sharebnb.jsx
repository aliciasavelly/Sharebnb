import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { requestLogin, requestLogout, requestSignup } from './actions/session_actions';
// window.login = requestLogin;
// window.logout = requestLogout;
// window.signup = requestSignup;
import { requestDestinations } from './actions/destination_actions';
window.requestDestinations = requestDestinations;
import { fetchSpots, fetchSingleSpot } from './util/spot_api_util';
// window.fetchSpots = fetchSpots;
window.fetchSingleSpot = fetchSingleSpot;
import { requestSpots, requestSingleSpot, createSpot, updateSpot, deleteSpot } from './actions/spot_actions';
window.requestSpots = requestSpots;
window.requestSingleSpot = requestSingleSpot;
window.createSpot = createSpot;
window.updateSpot = updateSpot;
window.deleteSpot = deleteSpot;
import { fetchDestinations } from './util/destination_api_util';
window.fetchDestinations = fetchDestinations;
// const windowFunctions = { requestLogin, requestLogout, requestSignup }
// Object.assign(window, windowFunctions);

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});

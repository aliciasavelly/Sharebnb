import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { requestLogin, requestLogout, requestSignup } from './actions/session_actions';
window.login = requestLogin;
window.logout = requestLogout;
window.signup = requestSignup;

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

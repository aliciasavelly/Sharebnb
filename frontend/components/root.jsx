import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Router path='/' component={ App } >
          <Route path='/login' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Router path='/signup' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        </Router>
      </Router>
    </Provider>
  )
};



export default Root;
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import MainContainer from './main/main_container';
import SessionFormContainer from './session/session_form_container';
import { clearErrors } from '../actions/session_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;

    store.dispatch(clearErrors());
    if (currentUser) {
      replace('/main');
    }
  }

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Router path='/' component={ App } >
          <IndexRoute component={ MainContainer }/>
          <Route path='/main' component={ MainContainer } />
          <Route path='/login' component={ SessionFormContainer }
                               onEnter={_redirectIfLoggedIn} />
          <Route path='/signup' component={ SessionFormContainer }
                                 onEnter={_redirectIfLoggedIn} />
        </Router>
      </Router>
    </Provider>
  )
};



export default Root;

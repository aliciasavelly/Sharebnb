import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import MainContainer from './main/main_container';
import SessionFormContainer from './session/session_form_container';
import { clearErrors } from '../actions/session_actions';
import SpotsIndexContainer from './search/spots_index_container';
import SpotShowContainer from './spot_show/spot_show_container';
import SpotCreateContainer from './spot_create/spot_create_container';
// import MyTripsContainer from './my_trips/my_trips_container';
import MyListingsContainer from './my_listings/my_listings_container';

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
          <Route path='/spots-search' component={ SpotsIndexContainer } />
          <Route path='/spots/:spotId' component={ SpotShowContainer } >
            <Route path='/reviews' component={ SpotShowContainer } />
          </Route>
          <Route path='/new-listing' component={ SpotCreateContainer } />
          <Route path='/my-trips' component={ MainContainer } />
          <Route path='/my-listings' component={ MyListingsContainer } />
    </Router>
      </Router>
    </Provider>
  )
};



export default Root;

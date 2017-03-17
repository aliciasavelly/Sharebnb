import React from 'react';
import AppContainer from './app/app_container';

const App = ({ children }) => (
  <div>
    <AppContainer />
    { children }
  </div>
);

export default App;

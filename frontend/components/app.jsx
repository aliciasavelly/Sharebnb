import React from 'react';
import AppContainer from './app/app_container';

const App = ({ children, params }) => (
  <div>
    <AppContainer params={params}/>
    { children }
  </div>
);

export default App;

import React from 'react';

const App = ({ children }) => {
  return (
  <div>
    <h1>Sharebnb</h1>
    <p>Hi, {currentUser.first_name}! Your username is {currentUser.username}.</p>
    { children }
  </div>
)};

export default App;

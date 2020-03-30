import React from 'react';

import './global.css';

import Routes from "./routes";

function App() {

  return (
    // Passando título como props
    // <Header title="Semana Omnistack" />

    // Passando titulo como children
    <div>
      <Routes />
    </div>
  );
}

export default App;

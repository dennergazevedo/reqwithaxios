import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

// HISTORY
import history from './services/history';

// STYLES
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;

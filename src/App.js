import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes/index';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Home/>
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;

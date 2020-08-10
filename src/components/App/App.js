import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import NotFound from '../../components/NotFound/NotFound'
import About from '../../pages/About/About'
import Portfolio from '../../pages/Portfolio/Portfolio'

import './App.css';

function App() {
  return (
    <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
  );
}

export default App;

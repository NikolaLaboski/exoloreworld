import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path='/explore' exact component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </HashRouter>
      
    </>
  );
}

export default App;

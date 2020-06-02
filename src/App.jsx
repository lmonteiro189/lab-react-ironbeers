import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import Home from './views/Home';
import BeerDetail from './views/BeerDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/beers" component={Beers} />
          <Route path="/random" component={RandomBeer} />
          <Route path="/new" component={NewBeer} />
          <Route path="/beers/:id" component={BeerDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

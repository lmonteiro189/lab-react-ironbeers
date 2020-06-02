import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Beers />
          <NewBeer />
          <RandomBeer />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

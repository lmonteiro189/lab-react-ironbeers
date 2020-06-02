import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';

function Home() {
  return (
    <div>
      <div>
        <img src="./image1.png" alt="image1" />
        <Link to="/beers">
          <h1>Beers</h1>
        </Link>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab
          necessitatibus, eligendi tenetur
        </span>
      </div>
      <div>
        <img src="./image2.png" alt="image2" />
        <Link to="/random">
          <h1>Random Beer</h1>
        </Link>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab
          necessitatibus, eligendi tenetur
        </span>
      </div>
      <div>
        <img src="./image3.png" alt="image3" />
        <Link to="/new">
          <h1>New Beer</h1>
        </Link>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab
          necessitatibus, eligendi tenetur
        </span>
      </div>
    </div>
  );
}

export default Home;

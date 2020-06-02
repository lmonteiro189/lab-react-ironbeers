import React from 'react';
import { Route } from 'react-router-dom';

function Beers() {
  return (
    <div>
      <img src="./image1.png" alt="image1" />
      <h1>
        <Route path="/" component={Beers} />
      </h1>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab
        necessitatibus, eligendi tenetur
      </span>
    </div>
  );
}

export default Beers;

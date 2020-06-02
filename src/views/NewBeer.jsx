import React from 'react';
import { Route } from 'react-router-dom';

function NewBeer() {
  return (
    <div>
      <img src="./image3.png" alt="image3" />
      <h1>
        New Beer
        <Route path="/beers" component={NewBeer} />
      </h1>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab
        necessitatibus, eligendi tenetur
      </span>
    </div>
  );
}

export default NewBeer;

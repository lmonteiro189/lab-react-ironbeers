import React from 'react';
import { Route } from 'react-router-dom';

function RandomBeer() {
  return (
    <div>
      <img src="./image2.png" alt="image2" />
      <h1>
        Random Beer
        <Route path="/:id" component={RandomBeer} />
      </h1>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab
        necessitatibus, eligendi tenetur
      </span>
    </div>
  );
}

export default RandomBeer;

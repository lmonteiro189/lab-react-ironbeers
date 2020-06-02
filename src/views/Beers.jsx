import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Beers() {
  const [viewReady, setViewReady] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setData(response.data);
        setTimeout(() => setViewReady(true), 1200);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <span>
        {!viewReady ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {data.map((beers) => {
              return (
                <div key={beers._id} className="box">
                  <div>
                    <img src={beers.image_url} alt="image" width="20%" />
                  </div>
                  <div>
                    <h1>{beers.name}</h1>
                    <h3>{beers.tagline}</h3>
                    <small>{beers.contributed_by}</small>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </span>
    </div>
  );
}

export default Beers;

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <img className="navbar" src="./navbar.png" alt="navbar" />
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link to="/">Counter</Link>
        <Link to="/modal">Modal</Link>
      </div>
    </nav>
  );
}

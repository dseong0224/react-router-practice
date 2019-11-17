import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = ()=> {

  const noUnderline = {
    'textDecoration': 'none'
  };

  return (
    <nav>
      <h3>Games</h3>
      <ul className="nav-link">
        <Link to='/'>
          <li className="nav-style" style={noUnderline}>Home</li>
        </Link>
        <Link to='/games'>
          <li className="nav-style" style={noUnderline}>Games</li>
        </Link>
        <Link to='/about'>
          <li className="nav-style" style={noUnderline}>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

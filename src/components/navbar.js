import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contacts'>Contact</Link></li>
      </ul>
    </nav>
    <Outlet/>
    </>

  );
};

export default Navbar;

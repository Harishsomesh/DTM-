// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Dropdownmenu from './Dropdownmenu';
import './Navbar.css'; // Optional for custom styles
import x1 from"../images/x5.jpeg";


const Navbar=({setShow})=> {
  return (
      
      <div className='Navbar-1'>
      <nav>
        <div className='top-left' >
        <Link to="/"><img src={x1} alt='wassup' className='home'></img></Link> 
        <Link className='menu-buttons' to="/discover">discover</Link>
        </div>
        <div className='dropdownmenu'>
        <Dropdownmenu className='drop-1'/>
        </div>
      </nav>
      </div>

  );
};

export default Navbar;

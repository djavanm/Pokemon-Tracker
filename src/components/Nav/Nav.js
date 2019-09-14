import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <h1><span className='pokemon-title'>Poké</span><span className='tracker-title'>Tracker</span></h1>
      <div className='routes' >
        <NavLink to='myPC' ><button className="nav-btn" >myPC</button></NavLink>
      </div>
    </nav>
  )
};

export default Nav;

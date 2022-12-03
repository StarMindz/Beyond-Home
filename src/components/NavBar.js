import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  const nav = (
    <div className="navBar">
      <div className="navBarHead">
        <h1 className="companyName">Beyond Home</h1>
      </div>
      <div className="navBarMenu">
        <NavLink exact activeClassName="active" className="home" to="/">HOME</NavLink>
        <NavLink activeClassName="active" className="apodLink" to="/apod">APOD</NavLink>
      </div>
    </div>
  );
  return nav;
};

export default NavBar;

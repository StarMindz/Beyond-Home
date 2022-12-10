import { NavLink } from 'react-router-dom';
import React from 'react';
import companiesLogo from '../images/BEYOND.png';

const NavBar = () => {
  const nav = (
    <div className="navBar">
      <div className="navBarHead">
        <img className="companyName" src={companiesLogo} alt="Companies Logo" />
      </div>
      <div className="navBarMenu">
        <NavLink exact activeClassName="active" className="homePage" to="/">HOME</NavLink>
        <NavLink activeClassName="active" className="home" to="/library">LIBRARY</NavLink>
        <NavLink activeClassName="active" className="apodLink" to="/apod">APOD</NavLink>
      </div>
    </div>
  );
  return nav;
};

export default NavBar;

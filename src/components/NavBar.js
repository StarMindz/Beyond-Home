/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import companiesLogo from '../images/BEYOND.png';

const NavBar = () => {
  const [state, setState] = useState({ toggle: true });

  const pullMenu = () => {
    setState((state) => ({ toggle: !state.toggle }));
  };

  const nav = (
    <div className="navBar">
      <div className="navBarHead">
        <img className="companyName" src={companiesLogo} alt="Companies Logo" />
      </div>
      <div className={state.toggle ? 'navBarMenu' : 'navBarMenu active'}>
        <NavLink onClick={pullMenu} exact activeClassName="active" className="homePage" to="/">HOME</NavLink>
        <NavLink onClick={pullMenu} activeClassName="active" className="home" to="/library">LIBRARY</NavLink>
        <NavLink onClick={pullMenu} activeClassName="active" className="apodLink" to="/apod">APOD</NavLink>
      </div>
      <div className={state.toggle ? 'hamburger' : 'hamburger active'} onClick={pullMenu}>
        <span className="horizontal" />
        <span className="horizontal" />
        <span className="horizontal" />
      </div>
    </div>
  );
  return nav;
};

export default NavBar;

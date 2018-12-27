import React from 'react';
import PropTypes from 'prop-types';
import Search from './search';

const Nav = ({ index_page }) => {
  var nav_class = '';
  if (!index_page) {
    nav_class = 'HeaderWhite LandingPage';
  }
  return (
    <section className={`slice_Header_T ActivateFixedPosition ${nav_class}`}>
      <div className="SlickNav_Wrapper">
        <Search />
      </div>
      <div className="nav-menu">
        <ul className="root_menu">
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/newtochurch/">
              New to Church
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/nextsteps/">
              Next Steps
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/outreach/">
              Outreach
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/resources/">
              Resources
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/giving/">
              Giving
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-container">
        <span className="logo-icon">
          <a href="/">
            <img
              alt=""
              className="LogoWhite"
              src="/Images/Content/4/Templates/49141/images/LogoWhite.png"
            />{' '}
            <img
              alt=""
              className="LogoGrey"
              src="/Images/Content/4/Templates/49141/images/LogoGrey.png"
            />{' '}
          </a>{' '}
        </span>
      </div>
      <div className="logo-MyC3">
        <a href="/MyC3">
          <img
            alt=""
            className="LogoMyC3White"
            src="/Images/Content/4/Templates/49141/images/LogoMyC3White.png"
          />{' '}
          <img
            alt=""
            className="LogoMyC3Grey"
            src="/Images/Content/4/Templates/49141/images/LogoMyC3Grey.png"
          />{' '}
          <img
            alt=""
            className="LogoMyC3Red"
            src="/Images/Content/4/Templates/49141/images/LogoMyC3Red.png"
          />{' '}
        </a>
      </div>
    </section>
  );
};

export default Nav;

Nav.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

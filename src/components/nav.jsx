import React from 'react';
import { Link } from 'gatsby';
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
            <Link className="menu_link" to="/newtochurch/">
              New to Church
            </Link>
          </li>
          <li className="menu_item menu_item_level_1">
            <Link className="menu_link" to="/nextsteps/">
              Next Steps
            </Link>
          </li>
          <li className="menu_item menu_item_level_1">
            <Link className="menu_link" to="/outreach/">
              Outreach
            </Link>
          </li>
          <li className="menu_item menu_item_level_1">
            <Link className="menu_link" to="/resources/">
              Resources
            </Link>
          </li>
          <li className="menu_item menu_item_level_1">
            <Link className="menu_link" to="/giving/">
              Giving
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo-container">
        <span className="logo-icon">
          <Link to="/">
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
          </Link>{' '}
        </span>
      </div>
      <div className="logo-MyC3">
        <Link to="/MyC3">
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
        </Link>
      </div>
    </section>
  );
};

export default Nav;

Nav.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

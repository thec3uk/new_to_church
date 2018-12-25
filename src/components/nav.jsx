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
            <a className="menu_link" href="/Groups/298265/New_to_Church.aspx">
              New to Church
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/Groups/292792/Next_Steps.aspx">
              Next Steps
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/Groups/293961/Outreach.aspx">
              Outreach
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/Groups/296428/Resources.aspx">
              Resources
            </a>
          </li>
          <li className="menu_item menu_item_level_1">
            <a className="menu_link" href="/Groups/296427/Giving.aspx">
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

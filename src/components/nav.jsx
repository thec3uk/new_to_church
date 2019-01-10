import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Search from './search';

const MenuItem = ({ menuItem }) => {
  const { title, slug } = menuItem;
  return (
    <li className="menu_item menu_item_level_1">
      <Link className="menu_link" to={slug}>
        {title}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

const Nav = ({ index_page }) => {
  var nav_class = '';
  if (!index_page) {
    nav_class = 'HeaderWhite LandingPage';
  }
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              topNav {
                title
                slug
              }
            }
          }
        }
      `}
      render={data => {
        const topNav = data.site.siteMetadata.topNav;
        return (
          <section
            className={`slice_Header_T ActivateFixedPosition ${nav_class}`}
          >
            <div className="SlickNav_Wrapper">
              <Search />
            </div>
            <div className="nav-menu">
              <ul className="root_menu">
                {topNav.map(menuItem => {
                  return <MenuItem key={menuItem.slug} menuItem={menuItem} />;
                })}
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
          </section>
        );
      }}
    />
  );
};

export default Nav;

Nav.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

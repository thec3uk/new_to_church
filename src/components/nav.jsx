import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './nav.module.css';
import NotificationBar from 'react-notification-bar';

const MenuItem = ({ menuItem, ...props }) => {
  const { title, slug } = menuItem;
  return (
    <li className={styles.menu_item} {...props}>
      {slug ? (
        <Link className={styles.menu_link} to={slug}>
          {title}
        </Link>
      ) : (
        <span className={styles.menu_link}>{title}</span>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }),
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.index_page = props.index_page;
    var mobileNav = { open: false, splitIdx: 5 };
    this.state = {
      squashNav: false,
      mobileNav: mobileNav,
      nav_class: new Set(),
    };
    this._onScrollHandler = this._onScrollHandler.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  componentDidMount() {
    if (!this._frameId) {
      this._frameId = requestAnimationFrame(this.squashNav);
    }
    window.addEventListener('scroll', this._onScrollHandler);
    window.addEventListener('resize', this._onResizeHandler);
    this._onResizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScrollHandler);
    window.removeEventListener('resize', this._onResizeHandler);
    window.cancelAnimationFrame(this._frameId);
  }

  _onScrollHandler = () => {
    this.setState({
      squashNav: window.scrollY > 200,
    });
    this._frameId = requestAnimationFrame(this.squashNav);
  };

  _onResizeHandler = () => {
    var splitIdx = this.splitTopNav();
    this.setState(prevState => ({
      mobileNav: {
        ...prevState.mobileNav,
        splitIdx: splitIdx,
      },
    }));
  };

  splitTopNav = () => {
    if (window.innerWidth < 467) {
      return 1;
    } else if (window.innerWidth < 667) {
      return 2;
    } else if (window.innerWidth < 768) {
      return 3;
    } else if (window.innerWidth < 992) {
      return 4;
    }
    return 5;
  };

  squashNav = () => {
    var navClass = this.state.nav_class;
    if (this.state.squashNav) {
      navClass.add('HeaderSmall');
      if (this.index_page) {
        navClass.add(styles.HeaderWhite);
      }
    } else {
      navClass = new Set();
      if (!this.index_page) {
        navClass = new Set([styles.HeaderWhite]);
      }
    }
    this.setState({ nav_class: navClass });
    if (!this._frameId) {
      this._frameId = requestAnimationFrame(this.squashNav);
    }
  };

  handleMoreClick = () => {
    this.setState(prevState => ({
      mobileNav: {
        ...prevState.mobileNav,
        open: !prevState.mobileNav.open,
      },
    }));
  };

  render() {
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
            prismicNotificationBanner {
              id
              data {
                content
                active
                url {
                  link_type
                  url
                  target
                }
              }
            }
          }
        `}
        render={data => {
          const nav = data.site.siteMetadata.topNav;
          const notification = data.prismicNotificationBanner.data;
          const topNav = nav.slice(0, this.state.mobileNav.splitIdx);
          const verticalNav = nav.slice(
            this.state.mobileNav.splitIdx,
            nav.length
          );
          return (
            <section
              className={`slice_Header_T ActivateFixedPosition ${Array.from(
                this.state.nav_class
              ).join(' ')}`}
              ref={c => (this.nav = c)}
            >
              {typeof window !== 'undefined' &&
                NotificationBar &&
                notification.active === 'yes' && (
                  <NotificationBar
                    closeIconStyles={{
                      width: 12,
                      height: 12,
                    }}
                    sound={false}
                    message={`<a href=${notification.url.url} target=${
                      notification.url.target
                    }>${notification.content}</a>`}
                  >
                    <div />
                  </NotificationBar>
                )}
              <div className={styles.nav_menu}>
                <div className="logo-container">
                  <span className="logo-icon">
                    <Link className={styles.logo_link} to="/">
                      {this.state.nav_class.has(styles.HeaderWhite) ? (
                        <img alt="" src="/images/LogoGrey.png" />
                      ) : (
                        <img alt="" src="/images/LogoWhite.png" />
                      )}
                    </Link>{' '}
                  </span>
                </div>
                <ul className={styles.root_menu}>
                  {topNav.map(menuItem => {
                    return <MenuItem key={menuItem.slug} menuItem={menuItem} />;
                  })}
                  <MenuItem
                    className={
                      !this.state.mobileNav.open
                        ? styles.more_menu_item
                        : [styles.more_menu_item, styles.active].join(' ')
                    }
                    key={'more'}
                    menuItem={{ title: 'More' }}
                    onClick={this.handleMoreClick}
                  />
                </ul>

                {this.state.mobileNav.open && (
                  <ul className={styles.vertical_root_menu}>
                    {verticalNav.map(menuItem => {
                      return (
                        <MenuItem
                          className={styles.vertical_menu_item}
                          key={menuItem.slug}
                          menuItem={menuItem}
                        />
                      );
                    })}
                  </ul>
                )}
              </div>
            </section>
          );
        }}
      />
    );
  }
}

export default Nav;

Nav.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

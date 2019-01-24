import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Search from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFacebookf } from '@fortawesome/free-solid-svg-icons';

const SideLinks = ({ index_page }) => (
  <Fragment>
    <section className="slice_FixedSideLinks">
      <div className="fixed-link-wrapper">
        {!index_page ? (
          <Fragment>
            <a
              href="https://www.facebook.com/thec3uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookf} />
            </a>
            <a
              href="https://twitter.com/the_c3church/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icomoon-icon-twitter">&thinsp;</i>
            </a>
            <a
              href="https://www.instagram.com/the_c3church/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icomoon-icon-instagram">&thinsp;</i>
            </a>
            <a className="search-link">
              <FontAwesomeIcon icon={faSearch} size="lg" fixedWidth />
            </a>
          </Fragment>
        ) : (
          <a className="search-link">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        )}
      </div>
    </section>

    <section className="slice_FixedSideLinks slice_FixedSideLinksMobile">
      <div className="fixed-link-wrapper">
        {index_page ? (
          <div>&nbsp;</div>
        ) : (
          <Fragment>
            <a
              href="https://www.facebook.com/thec3uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icomoon-icon-facebook">&thinsp;</i>
            </a>
            <a
              href="https://twitter.com/the_c3church/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icomoon-icon-twitter">&thinsp;</i>
            </a>
            <a
              href="https://www.instagram.com/the_c3church/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icomoon-icon-instagram">&thinsp;</i>
            </a>
          </Fragment>
        )}
      </div>
    </section>
  </Fragment>
);

export default SideLinks;

SideLinks.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

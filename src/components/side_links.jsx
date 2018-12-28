import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Search from './search';

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
            <a className="search-link">
              &thinsp;
              <i className="journey-icon-search">&thinsp;</i>
            </a>
          </Fragment>
        ) : (
          <a className="search-link">
            {' '}
            <i className="journey-icon-search">&thinsp;</i>
          </a>
        )}

        <div className="search-overlay_fixed-link">
          <span className="search-close_fixed-link">&nbsp;</span>
          <div>
            <label
              className="search_title"
              htmlFor="ctl00_ctl00_cphBody_ctl02_searchSite"
            >
              Site Search
            </label>
            <div
              className="search_div"
              // onKeyDown="if(event.keyCode==13){document.getElementById('ctl00_ctl00_cphBody_ctl02_searchSiteGo').click();return false}else{return true}"
            >
              <input
                type="text"
                id="ctl00_ctl00_cphBody_ctl02_searchSite"
                name="searchSite"
                size="22"
                defaultValue="Search the Site"
                // onBlur="if(this.value==''){this.value='Search the Site';}"
                // onFocus="if(this.value=='Search the Site'){this.value='';}"
                className="text"
              />
            </div>
            <input
              type="button"
              id="ctl00_ctl00_cphBody_ctl02_searchSiteGo"
              value="Go"
              className="button"
              // onClick="doSiteSearch(this.id,'Search the Site',false,null,null);"
            />
          </div>
        </div>
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

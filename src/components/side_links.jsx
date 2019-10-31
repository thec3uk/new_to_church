import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const SideLinks = ({ index_page }) => (
  <StaticQuery
    query={graphql`
      query SideLinkQuery {
        prismicSiteConfig {
          data {
            facebook {
              target
              url
              link_type
            }
            instagram {
              target
              url
              link_type
            }
            twitter {
              target
              url
              link_type
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <section className="slice_FixedSideLinks">
          <div className="fixed-link-wrapper">
            {!index_page ? (
              <Fragment>
                <a
                  href={data.prismicSiteConfig.data.facebook.url}
                  target={data.prismicSiteConfig.data.facebook.target}
                  rel="noopener noreferrer"
                >
                  <i className="icomoon-icon-facebook">&thinsp;</i>
                </a>
                <a
                  href={data.prismicSiteConfig.data.twitter.url}
                  target={data.prismicSiteConfig.data.twitter.target}
                  rel="noopener noreferrer"
                >
                  <i className="icomoon-icon-twitter">&thinsp;</i>
                </a>
                <a
                  href={data.prismicSiteConfig.data.instagram.url}
                  target={data.prismicSiteConfig.data.instagram.target}
                  rel="noopener noreferrer"
                >
                  <i className="icomoon-icon-instagram">&thinsp;</i>
                </a>
                {/*  <a className="search-link">
              &thinsp;
              <i className="journey-icon-search">&thinsp;</i>
            </a>*/}
              </Fragment>
            ) : (
              <span />
              /*<a className="search-link">
            <i className="journey-icon-search">&thinsp;</i>
          </a>*/
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
                  href={data.prismicSiteConfig.data.facebook.url}
                  target={data.prismicSiteConfig.data.facebook.target}
                  rel="noopener noreferrer"
                >
                  <i className="icomoon-icon-facebook">&thinsp;</i>
                </a>
                <a
                  href={data.prismicSiteConfig.data.twitter.url}
                  target={data.prismicSiteConfig.data.twitter.target}
                  rel="noopener noreferrer"
                >
                  <i className="icomoon-icon-twitter">&thinsp;</i>
                </a>
                <a
                  href={data.prismicSiteConfig.data.instagram.url}
                  target={data.prismicSiteConfig.data.instagram.target}
                  rel="noopener noreferrer"
                >
                  <i className="icomoon-icon-instagram">&thinsp;</i>
                </a>
              </Fragment>
            )}
          </div>
        </section>
      </Fragment>
    )}
  />
);

export default SideLinks;

SideLinks.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

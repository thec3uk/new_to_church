import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            footerLinks {
              title
              slug
              id
            }
            facebook_slug
            instagram_slug
            twitter_slug
            phoneNumber
            emailContact
          }
        }
      }
    `}
    render={data => (
      <footer>
        <section className="NewsLetterFooter">
          <div className="container">
            <div className="NFooterWrapper">
              <div>
                C3 Centre, Coldhams Lane,
                <br />
                Cambridge, CB1 3HR, UK
                <div className="PhoneNumber">
                  <a
                    style={{ color: '#fff' }}
                    href={'tel:' + data.site.siteMetadata.phoneNumber}
                  >
                    Tel: {data.site.siteMetadata.phoneNumber}
                  </a>
                </div>
                <div className="Email">
                  Email: {data.site.siteMetadata.emailContact}
                </div>
              </div>

              <div className="NewsLetterSignUp">
                <img
                  src="/Images/Content/4/Templates/49141/images/IconMail.png"
                  alt="Newsletter Signup"
                />
                <div>Sign up to the C3 Newsletter</div>
                <Link
                  className="NewsLetterGO"
                  to="/Groups/308211/NewsLetterSignUp.aspx"
                >
                  {' '}
                  GO
                </Link>
              </div>

              <div className="footer-column footer-column-1">
                <div className="ArticleBody">
                  <a
                    className="footer_icon_block facebook"
                    href={
                      'https://www.facebook.com/' +
                      data.site.siteMetadata.facebook_slug
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icomoon-icon-facebook">&nbsp;</i>{' '}
                  </a>{' '}
                  <a
                    className="footer_icon_block twitter"
                    href={
                      'https://twitter.com/' +
                      data.site.siteMetadata.twitter_slug
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <i className="icomoon-icon-twitter">&nbsp;</i>{' '}
                  </a>{' '}
                  <a
                    className="footer_icon_block instagram"
                    href={
                      'https://www.instagram.com/' +
                      data.site.siteMetadata.instagram_slug
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <i className="icomoon-icon-instagram">&nbsp;</i>{' '}
                  </a>
                </div>
                <img
                  src="/Images/Content/4/Templates/49141/images/FR_Logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="slice_Footer_D">
          <div className="container">
            <div className="footerbar">
              <a
                className="footer"
                href="http://www.churchinsight.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a <strong>Church</strong>
                Insight site
              </a>
              {data.site.siteMetadata.footerLinks.map(item => (
                <Link
                  id={item.id}
                  key={item.slug}
                  to={item.slug}
                  title={item.title}
                >
                  {item.title}
                </Link>
              ))}

              <span id="footer_charity">Registered Charity 1132699</span>
            </div>
          </div>
        </section>
      </footer>
    )}
  />
);

export default Footer;

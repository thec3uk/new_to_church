import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import NewsLetterSignUp from './signup_form';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        prismicSiteConfig {
          data {
            footer_navigation {
              footer_link {
                url
                id
                document {
                  ... on PrismicContentPage {
                    data {
                      card_title
                      footer_id
                    }
                  }
                  ... on PrismicTextPage {
                    data {
                      card_title
                      footer_id
                    }
                  }
                }
              }
            }
            facebook {
              url
              target
            }
            instagram {
              url
              target
            }
            twitter {
              url
              target
            }
            phone_number
            contact_email
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
                    href={'tel:' + data.prismicSiteConfig.data.phone_number}
                  >
                    Tel: {data.prismicSiteConfig.data.phone_number}
                  </a>
                </div>
                <div className="Email">
                  Email: {data.prismicSiteConfig.data.contact_email}
                </div>
                <br />
                <span id="footer_charity">Registered Charity 1132699</span>
                <br />
                <span style={{ fontSize: '10pt', fontWeight: 'lighter' }}>
                  Triodos Bank 16-58-10 20439032
                </span>
              </div>

              <NewsLetterSignUp />

              <div className="footer-column footer-column-1">
                <div className="ArticleBody">
                  <a
                    className="footer_icon_block facebook"
                    href={data.prismicSiteConfig.data.facebook.url}
                    target={data.prismicSiteConfig.data.facebook.target}
                    rel="noopener noreferrer"
                  >
                    <i className="icomoon-icon-facebook">&nbsp;</i>{' '}
                  </a>{' '}
                  <a
                    className="footer_icon_block twitter"
                    href={data.prismicSiteConfig.data.twitter.url}
                    target={data.prismicSiteConfig.data.twitter.target}
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <i className="icomoon-icon-twitter">&nbsp;</i>{' '}
                  </a>{' '}
                  <a
                    className="footer_icon_block instagram"
                    href={data.prismicSiteConfig.data.instagram.url}
                    target={data.prismicSiteConfig.data.instagram.target}
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <i className="icomoon-icon-instagram">&nbsp;</i>{' '}
                  </a>
                </div>
                <img src="/images/FR_Logo.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="slice_Footer_D">
          <div className="container">
            <div className="footerbar">
              {data.prismicSiteConfig.data.footer_navigation.map(
                ({ footer_link }) => {
                  const page_data = footer_link.document.data;
                  return (
                    <Link
                      id={page_data.footer_id}
                      key={footer_link.id}
                      to={footer_link.url}
                      title={page_data.card_title}
                    >
                      {page_data.card_title}
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </footer>
    )}
  />
);

export default Footer;

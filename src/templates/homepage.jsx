import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, SideLinks } from '../components';
import { Layout } from '../layouts';
import Sections from './sections';

const HomePage = ({ data }) => (
  <Layout title="The C3 Church">
    <Head />
    <header>
      <section
        className="slice_VideoWrapper"
        style={{
          height: '100vh',
        }}
      >
        <div className="video-overlay">
          <Nav index_page={true} />
          <div className="top-fold">
            <div id="watchlive" className="half-screen">
              <div>
                <h2>
                  <span
                    style={{
                      fontWeight: '100',
                    }}
                  >
                    Watch
                  </span>{' '}
                  live{' '}
                  <span
                    style={{
                      fontWeight: '100',
                    }}
                  >
                    Sunday
                  </span>
                </h2>
                <hr />
                <div className="links">
                  <h3>
                    <Link to={data.prismicHomepage.data._9_30_service.url}>
                      09:30
                    </Link>
                  </h3>
                  <h3>
                    <Link to={data.prismicHomepage.data._11_30_service.url}>
                      11:30
                    </Link>
                  </h3>
                  <h3>
                    <Link to={data.prismicHomepage.data._14_30_service.url}>
                      14:30
                    </Link>
                  </h3>
                  <h3>
                    <Link to={data.prismicHomepage.data._17_30_service.url}>
                      17:30
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div id="love-your-neighbour" className="half-screen">
              <div>
                <h2>
                  love <span style={{ fontWeight: '100' }}>your</span> neighbour
                </h2>
                <hr />
                <div className="links">
                  <h3>
                    <Link to="/get-help">Need Help</Link>
                  </h3>
                  <h3>
                    <Link to="/give-help">Give help</Link>
                  </h3>
                  <h3>
                    <Link to="/love-your-neighbour">Donate</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SideLinks index_page={true} />
    </header>
    <Sections data={data.prismicHomepage.data} />
  </Layout>
);

export default HomePage;

HomePage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    prismicHomepage(uid: { eq: $slug }) {
      uid
      data {
        _9_30_service {
          url
        }
        _11_30_service {
          url
        }
        _14_30_service {
          url
        }
        _17_30_service {
          url
        }
        page_title
        body {
          ... on PrismicHomepageBodyText1 {
            slice_type
            id
            primary {
              css_classes
              title_of_section {
                text
              }
              text {
                text
              }
              banner_image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageBodyListOfArticles {
            slice_type
            id
            primary {
              css_classes
              title_of_section {
                text
              }
            }
            items {
              articles_to_link {
                uid
                url
                document {
                  ...cardContent
                }
              }
            }
          }

          ... on PrismicHomepageBodyRawHtml {
            slice_type
            id
            primary {
              title_of_section {
                text
              }
              css_classes
              section_title_icon
              html {
                text
              }
            }
          }
        }
      }
    }
  }
`;

// ... on PrismicHomepageBodyTextAndArticleList {
//   slice_type
//   id
//   primary {
//     title_of_section {
//       text
//     }
//     css_classes
//     preamble {
//       text
//     }
//   }
//   items {
//     articles_to_link {
//       uid
//       url
//       document {
//         ...cardContent
//       }
//     }
//   }
// }

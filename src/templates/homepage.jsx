import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, SideLinks } from '../components';
import { Layout } from '../layouts';
import Sections from './sections';

import ReactImageVideoLightbox from 'react-image-video-lightbox';

const HomePage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => setIsOpen(true);

  return (
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
                      <span style={{
                        fontSize: '5rem',
                      }}>Oh what</span><br/> Wonder
                  </h2>
                  <hr />
                  <div className="links">
                    <h3 className="col-1 row-1">20th December</h3>
                    <h4 className="col-1 row-2"><Link to="/ohwhatwondercambridge">Cambridge: 10am, 12pm</Link></h4>
                    <h4 className="col-1 row-3"><Link to="/ohwhatwonderbury">Bury St Edmunds: 10am</Link></h4>
                    <h4 className="col-1 row-4">
                      <button href="#" onClick={clickHandler}>
                      Online: 10am, 12pm, 5pm, 8pm
                      </button>
                    </h4>

                    <h3 className="col-2 row-1">Christmas Day</h3>
                    <h4 className="col-2 row-2"><Link to="/c3christmasday">Cambridge: 10am</Link></h4>
                    <h4 className="col-2 row-3"><button href="#" onClick={clickHandler}>Online: 10am</button></h4>
                  </div>
                  {/* <div className="links">
                    <h3>
                      10:00:{` `}
                      <button href="#" onClick={clickHandler}>
                        ONLINE
                      </button>
                      ,{` `}
                      <Link to="/cambridge-sunday-services">
                        Cambridge
                      </Link>, <Link to="/bury-sunday-services">Bury</Link>
                    </h3>

                    <h3>
                      Noon:{' '}
                      <Link to="/cambridge-sunday-services">Cambridge</Link>
                    </h3>
                  </div> */}
                  {isOpen && (
                    <div id="lightbox">
                      <ReactImageVideoLightbox
                        data={[
                          {
                            url:
                              'https://embed.restream.io/player/index.html?token=9c8cfe650f8b4462016f9c026b724346',
                            type: 'video',
                            altTag: 'The C3 Church Live Stream',
                          },
                        ]}
                        startIndex={0}
                        showResourceCount={false}
                        onCloseCallback={() => setIsOpen(false)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div id="love-your-neighbour" className="half-screen">
                <div>
                  <h2>
                    <span style={{
                        fontSize: '5rem',
                      }}
                    >
                      Share the
                    </span>{' '}
                    <br />
                    Wonder
                  </h2>
                  <hr />
                  <div className="links">
                    <h3>Share the wonder this Christmas!</h3>
                  </div>
                  <div className="links">
                    <h3>
                      <Link to="/store">Sponsor a hamper</Link>
                    </h3>
                    <h3 className="slash">/</h3>
                    <h3>
                      <Link to="/sharethewonder">help pack</Link>
                    </h3>
                    <h3 className="slash">/</h3>
                    <h3>
                      <Link to="/sharethewonder">help deliver</Link>
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
};

export default HomePage;

HomePage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    prismicHomepage(uid: { eq: $slug }) {
      uid
      data {
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
                fluid {
                  srcSet
                  sizes
                }
              }
            }
          }
          ... on PrismicHomepageBodyListOfArticles {
            slice_type
            id
            primary {
              css_classes
            }
            items {
              articles_to_link {
                uid
                url
                ...cardContent
              }
            }
          }
          ... on PrismicHomepageBodyTextAndArticleList {
            slice_type
            id
            primary {
              title_of_section {
                text
              }
              css_classes
              preamble {
                text
              }
            }
            items {
              articles_to_link {
                uid
                url
                ...cardContent
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

// title_of_section {
//   text
// }

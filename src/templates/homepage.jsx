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
              <div className="full-screen" id="breathe">
                <div>
                  <h2 style={{fontSize: '9rem', textTransform: 'uppercase'}}>Cross = Heart</h2>
                  <div className="links">
                    <h3>
                      Good Friday - 2nd April - Colchester <br/>
                      Easter Sunday - 4th April - Online, Bury St Edmunds, Cambridge
                    </h3>
                  </div>
                  <h2>Save the Date</h2>
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

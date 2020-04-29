import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, SideLinks } from '../components';
import { Layout } from '../layouts';
import Sections from './sections';

const HomePage = ({ data }) => (
  <Layout title="The C3 Church">
    <Head />
    <header>
      <section className="slice_VideoWrapper">
        <div>
          <video
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            playinline="playinline"
            poster="/images/867706.jpg"
          >
            <source
              type="video/mp4"
              src="https://thec3-public-media.s3.eu-west-2.amazonaws.com/9d4cc8be-ba5f-483d-b41a-a285e1866a4c.mp4"
            />
            <track default kind="captions" />
            <track kind="descriptions" />
          </video>
        </div>
        <div className="video-overlay">
          <Nav index_page={true} />
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

// // title_of_section {
// //   text
// }
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

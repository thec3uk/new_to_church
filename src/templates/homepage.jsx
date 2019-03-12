import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, SideLinks, SideGallery } from '../components';
import { Layout } from '../layouts';
import Sections from './sections';

const shapeSlideshowData = slideshow => {
  return slideshow.map(({ slide }) => ({
    id: slide.id,
    url: slide.document[0].data.slide_image.url,
    slug: slide.uid,
    title: slide.document[0].data.slide_title,
  }));
};

const HomePage = ({ data }) => (
  <Layout title="The C3 Church">
    <Head index_page={true} />
    <header>
      <section className="slice_VideoWrapper">
        <div>
          <video
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            playinline="playinline"
            poster="/Images/Content/4/867706.jpg"
          >
            <source
              type="video/mp4"
              src="https://s3.amazonaws.com/media.cthree.org/9d4cc8be-ba5f-483d-b41a-a285e1866a4c.mp4"
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

      <section className="slice_WelcomeSlides_L">
        <div className="bannerSlides">
          <SideGallery
            images={shapeSlideshowData(data.prismicHomepage.data.slideshow)}
          />
        </div>
      </section>
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
        slideshow {
          slide {
            id
            uid
            document {
              data {
                slide_title
                slide_image {
                  alt
                  url
                  # localFile {
                  #   childImageSharp {
                  #     fluid {
                  #       sizes
                  #       srcSetWebp
                  #     }
                  #   }
                  # }
                }
              }
            }
          }
        }
        body {
          ... on PrismicHomepageBodyText1 {
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
                      srcSetWebp
                      sizes
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageBodyListOfArticles {
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
                document {
                  data {
                    card_title
                    card_cta
                    card_description
                    card_image {
                      alt
                      copyright
                      localFile {
                        childImageSharp {
                          fluid {
                            srcSetWebp
                            sizes
                            presentationWidth
                            presentationHeight
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageBodyTextAndArticleList {
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
                document {
                  ... on PrismicContentPage {
                    data {
                      card_title
                      card_cta
                      card_description
                      card_image {
                        alt
                        copyright
                        localFile {
                          childImageSharp {
                            fluid {
                              srcSetWebp
                              sizes
                              presentationWidth
                              presentationHeight
                            }
                          }
                        }
                      }
                    }
                  }
                  ... on PrismicLandingPage {
                    data {
                      card_title
                      card_cta
                      card_description
                      card_image {
                        alt
                        copyright
                        localFile {
                          childImageSharp {
                            fluid {
                              srcSetWebp
                              sizes
                              presentationWidth
                              presentationHeight
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageBodyRawHtml {
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

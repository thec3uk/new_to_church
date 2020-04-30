import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SideNav, SideGallery, ContactForm } from '../components';
import { HeroLayout, Content } from '../layouts';

const shapeGalleryData = gallery_list => {
  return gallery_list.map(({ gallery_node }) => ({
    id: gallery_node.id,
    url: gallery_node.document[0].data.gallery_image.url,
    slug: gallery_node.uid,
    title: gallery_node.document[0].data.gallery_image.alt,
  }));
};

const shapeNavItem = item => {
  return {
    slug: item.uid,
    title: item.document[0].data.page_title,
  };
};

const shapeSiblingData = child_pages => {
  return child_pages
    .filter(({ child_page }) => child_page !== null)
    .map(({ child_page }) => shapeNavItem(child_page));
};

const ContentPage = ({ data }) => {
  const page = data.prismicContentPage.data;
  const uid = data.prismicContentPage.uid;
  return (
    <HeroLayout title={page.page_title} heroImage={page.heroimage.url}>
      <section className="slice_content_page">
        <div className="container">
          <div className="main-content">
            <Content className="ArticleBody" input={page.body} />
            {page.contact_form === 'yes' && (
              <ContactForm
                title={page.page_title}
                toEmail={page.contact_form_to_email_address}
              />
            )}
          </div>

          <aside className="sidebar">
            <nav>
              <SideNav
                currentSlug={uid}
                parent={shapeNavItem(page.parent_page)}
                siblings={
                  page.parent_page.document[0].data.child_pages &&
                  shapeSiblingData(
                    page.parent_page.document[0].data.child_pages
                  )
                }
              >
                {page.data}
              </SideNav>
            </nav>
            <SideGallery images={shapeGalleryData(page.gallery_list)} />
          </aside>
        </div>
      </section>
    </HeroLayout>
  );
};

export default ContentPage;

ContentPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    prismicContentPage(uid: { eq: $slug }) {
      uid
      data {
        page_title
        contact_form
        contact_form_to_email_address
        heroimage {
          alt
          copyright
          url
        }
        gallery_list {
          gallery_node {
            uid
            id
            document {
              ... on PrismicContentPage {
                data {
                  gallery_image {
                    url
                    alt
                  }
                }
              }
              ... on PrismicLandingPage {
                data {
                  gallery_image {
                    url
                    alt
                  }
                }
              }
            }
          }
        }
        parent_page {
          uid
          document {
            ... on PrismicLandingPage {
              data {
                page_title
                child_pages {
                  child_page {
                    uid
                    document {
                      ... on PrismicContentPage {
                        data {
                          page_title
                        }
                      }
                      ... on PrismicLandingPage {
                        data {
                          page_title
                        }
                      }
                      ... on PrismicRedirect {
                        data {
                          page_title
                        }
                      }
                      ... on PrismicAcademyPage {
                        data {
                          page_title
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on PrismicHomepage {
              data {
                page_title
                child_pages {
                  child_page {
                    uid
                    document {
                      ... on PrismicContentPage {
                        data {
                          page_title
                        }
                      }
                      ... on PrismicLandingPage {
                        data {
                          page_title
                        }
                      }
                      ... on PrismicRedirect {
                        data {
                          page_title
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on PrismicRedirect {
              data {
                page_title
                child_pages {
                  child_page {
                    uid
                    document {
                      ... on PrismicContentPage {
                        data {
                          page_title
                        }
                      }
                      ... on PrismicLandingPage {
                        data {
                          page_title
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        body {
          ... on PrismicContentPageBodyText {
            primary {
              text {
                html
                text
              }
            }
            slice_type
            id
          }
          ... on PrismicContentPageBodyTable {
            primary {
              column_header_1 {
                text
              }
              column_header_2 {
                text
              }
            }
            items {
              column_1 {
                text
              }
              column_2 {
                text
              }
            }
            slice_type
            id
          }
        }
      }
    }
  }
`;

// This is a part of the query that was under parent_page
// ... on PrismicContentPage {
//   data {
//     page_title
//     child_pages {
//       child_page {
//         uid
//         document {
//           ... on PrismicContentPage {
//             data {
//               page_title
//             }
//           }
//         }
//       }
//     }
//   }
// }

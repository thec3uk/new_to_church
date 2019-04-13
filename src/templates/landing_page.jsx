import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Card, ContactForm } from '../components';
import { HeroLayout, Content } from '../layouts';

const LandingPage = ({ data }) => {
  const page = data.prismicLandingPage.data;
  const cardWidth = cardList => {
    // This function should be purely in CSS!
    switch (cardList.length) {
      case 1:
        return '97%';
      case 2:
        return '47%';
      case 3:
      case 5:
      case 6:
        return '30.5%';
      case 4:
      case 7:
      case 8:
      case 9:
      case 10:
      default:
        return '';
    }
  };
  return (
    <HeroLayout title={page.page_title} heroImage={page.hero_image.url}>
      <section className="slice_LandingMainArticle">
        <div className="container">
          <Content
            className="ArticleBody"
            input={page.body[0].primary.text.html}
          />
          {page.contact_form.active === 'yes' && (
            <ContactForm
              title={page.page_title}
              toEmail={page.contact_form_to_email_address}
            />
          )}
        </div>
      </section>

      <section className="slice_LandingArticles">
        <div className="container">
          <div className="article_cards">
            {page.child_pages &&
              page.child_pages.map(({ child_page }) => {
                if (child_page === null) {
                  return;
                }
                const { uid, document } = child_page;
                const doc = document[0];
                return (
                  <Card
                    key={uid}
                    title={doc.data.card_title}
                    description={doc.data.card_description}
                    slug={uid}
                    image={doc.data.card_image}
                    cta={doc.data.card_cta}
                    width={cardWidth(page.child_pages)}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </HeroLayout>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    prismicLandingPage(uid: { eq: $slug }) {
      uid
      data {
        page_title
        contact_form
        contact_form_to_email_address
        hero_image {
          alt
          copyright
          url
        }
        child_pages {
          child_page {
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
        body {
          primary {
            text {
              html
            }
          }
        }
      }
    }
  }
`;

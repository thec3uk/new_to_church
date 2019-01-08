import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Card } from '../components';
import { HeroLayout, Content } from '../layouts';

const LandingPage = ({ data }) => {
  const page = data.markdownRemark;
  const cardWidth = cardList => {
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
    <HeroLayout
      title={page.frontmatter.title}
      heroImage={page.frontmatter.heroImage}
    >
      <section className="slice_LandingMainArticle">
        <div className="container">
          <div className="ArticleBody">
            <Content input={page.html} />
          </div>
        </div>
      </section>

      <section className="slice_LandingArticles">
        <div className="container">
          <div className="article_cards">
            {page.fields.cardNodeList &&
              page.fields.cardNodeList.map(card => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  slug={card.slug}
                  image={card.image}
                  cta={card.cta}
                  width={cardWidth(page.fields.cardNodeList)}
                />
              ))}
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
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "landing" } }
    ) {
      html
      frontmatter {
        title
        heroImage
      }
      fields {
        cardNodeList {
          slug
          image
          title
          description
          cta
          id
        }
      }
    }
  }
`;

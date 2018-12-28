import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Card } from '../components';
import { HeroLayout, Content } from '../layouts';

const LandingPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <HeroLayout
      title={page.frontmatter.title}
      heroImage={page.frontmatter.heroImage}
    >
      <section className="slice_LandingMainArticle">
        <div className="container">
          <Content className="ArticleBody" input={page.html} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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

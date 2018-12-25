import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Head, SEO, Nav, SideLinks, Footer, Hero, Card } from '../components';

const LandingPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <Fragment>
      <SEO title={page.frontmatter.title} />
      <Head />
      <header className="NonHomePage">
        <Nav index_page={false} />
      </header>
      <SideLinks index_page={false} />

      <Hero
        title={page.frontmatter.title}
        imageUrl={page.frontmatter.heroImage}
      />

      <section className="slice_LandingMainArticle">
        <div className="container">
          <div
            className="ArticleBody"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
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

      <Footer />
    </Fragment>
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

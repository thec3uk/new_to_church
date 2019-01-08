import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Content } from '../layouts';
import { Card } from '../components';

const Section = ({ data }) => {
  const section = data;
  const hideTitle = section.frontmatter.hideTitle || false;
  return (
    <section className={section.frontmatter.cssClasses.join(' ')}>
      <div className="container">
        {!hideTitle ? (
          <h1 className="section-title">
            {section.frontmatter.titleIconClassesBefore !== null ? (
              <Fragment>
                <i
                  className={section.frontmatter.titleIconClassesBefore.join(
                    ' '
                  )}
                >
                  &nbsp;
                </i>
                &nbsp;
              </Fragment>
            ) : (
              ''
            )}
            {section.frontmatter.title}
          </h1>
        ) : (
          ''
        )}
        {/* banner image */}
        {section.frontmatter.bannerImage && (
          <img
            src={section.frontmatter.bannerImage.url}
            alt={section.frontmatter.bannerImage.title}
          />
        )}
        <Content className="ArticleBody" input={section.html} />
        {/* card list */}
        <div className="article_cards">
          {section.fields.cardNodeList &&
            section.fields.cardNodeList.map(card => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                slug={card.slug}
                image={card.image}
                cta={card.cta}
                width={'30.5%'}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  data: PropTypes.object,
};

const Sections = ({ data }) => (
  <Fragment>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Section key={node.id} data={node} />
    ))}
  </Fragment>
);

export default Sections;

Sections.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  fragment sectionsQuery on Query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: {
        frontmatter: { template: { eq: "section" } }
        fields: { slug: { in: $sections } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            cssClasses
            bannerImage {
              url
              title
            }
            hideTitle
            titleIconClassesBefore
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
    }
  }
`;

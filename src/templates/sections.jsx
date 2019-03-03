import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Content } from '../layouts';
import { Card } from '../components';

const Section = ({ data }) => {
  const section = data;
  const showTitle = Boolean(section.primary.title_of_section.text) || false;
  return (
    <section className={section.primary.css_classes}>
      <div className="container">
        {showTitle ? (
          <h1 className="section-title">
            {section.primary.section_title_icon !== null ? (
              <Fragment>
                <i className={section.primary.section_title_icon}>&nbsp;</i>
                &nbsp;
              </Fragment>
            ) : (
              ''
            )}
            {section.primary.title_of_section.text}
          </h1>
        ) : (
          ''
        )}
        {/* banner image */}
        {/*section.frontmatter.bannerImage && (
          <img
            src={section.frontmatter.bannerImage.url}
            alt={section.frontmatter.bannerImage.title}
          />
        )*/}
        {section.primary.html && (
          <Content className="ArticleBody" input={section.primary.html.text} />
        )}
        {section.primary.preamble && (
          <Content
            className="ArticleBody"
            input={section.primary.preamble.text}
          />
        )}
        {/* article list */}
        {
          <div className="article_cards">
            {section.items &&
              section.items.map(({ articles_to_link }) => {
                const { document, uid } = articles_to_link;
                const doc = document[0];
                return (
                  <Card
                    key={uid}
                    title={doc.data.card_title}
                    description={doc.data.card_description}
                    slug={uid}
                    image={doc.data.card_image}
                    cta={doc.data.card_cta}
                    width={'30.5%'}
                  />
                );
              })}
          </div>
        }
      </div>
    </section>
  );
};

Section.propTypes = {
  data: PropTypes.object,
};

const Sections = ({ data }) => (
  <Fragment>
    {console.log(data)}
    {data && data.body.map(node => <Section key={node.id} data={node} />)}
  </Fragment>
);

export default Sections;

Sections.propTypes = {
  data: PropTypes.object,
};

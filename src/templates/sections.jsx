import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../layouts';
import { Card } from '../components';

const Section = ({ data }) => {
  const section = data;
  const showTitle =
    (section.primary.title_of_section &&
      Boolean(section.primary.title_of_section.text)) ||
    false;
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
        {section.primary.banner_image && (
          <img
            srcSet={
              section.primary.banner_image.fluid.srcSet
            }
            sizes={
              section.primary.banner_image.fluid.sizes
            }
            alt={section.primary.banner_image.alt}
          />
        )}
        {section.primary.text && (
          <Content className="ArticleBody" input={[section]} />
        )}
        {section.primary.html && (
          <Content className="ArticleBody" input={[section]} />
        )}
        {section.primary.preamble && (
          <Content className="ArticleBody" input={[section]} />
        )}
        {/* article list */}
        {
          <div className="article_cards">
            {section.items &&
              section.items.map(({ articles_to_link }) => {
                const { document, uid, url } = articles_to_link;
                return (
                  <Card
                    key={uid}
                    title={document.data.card_title}
                    description={document.data.card_description}
                    slug={url}
                    image={document.data.card_image}
                    cta={document.data.card_cta}
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
    {data && data.body.map(node => <Section key={node.id} data={node} />)}
  </Fragment>
);

export default Sections;

Sections.propTypes = {
  data: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, slug, image, cta }) => (
  <div>
    <div className="articleListImage">
      <a href={slug}>
        <img src={image} alt={title} />
      </a>
    </div>
    <div className="articleListTitle">
      <a href={slug}>{title}</a>
    </div>
    <div className="articleListSummary">
      <span>{description}</span>
    </div>
    <div className="articleListLink">
      <a href={slug}>{cta}</a>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Card = ({ title, description, slug, image, cta }) => (
  <div>
    <div className="articleListImage">
      <Link to={slug}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="articleListTitle">
      <Link to={slug}>{title}</Link>
    </div>
    <div className="articleListSummary">
      <span>{description}</span>
    </div>
    <div className="articleListLink">
      <Link to={slug}>{cta}</Link>
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

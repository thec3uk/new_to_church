import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Card = ({ title, description, slug, image, cta, width }) => (
  <div style={width ? { width: width } : {}}>
    <div className="articleListImage">
      <Link to={slug}>
        <Img fluid={image} alt={title} />
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
  width: PropTypes.string,
};

export const fluidCardImage = graphql`
  fragment fluidCardImage on Query {
    cardImage: file(relativePath: { eq: $imageFile }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

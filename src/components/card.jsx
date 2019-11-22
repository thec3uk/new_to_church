import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Card = ({ title, description, slug, image, cta, width }) => (
  <div style={width ? { width: width } : {}}>
    <div className="articleListImage">
      <Link to={`/${slug}`}>
        <img
          srcSet={image.localFile.childImageSharp.fluid.srcSet}
          sizes={image.localFile.childImageSharp.fluid.sizes}
          alt={image.alt}
        />
      </Link>
    </div>
    <div className="articleListTitle">
      <Link to={`/${slug}`}>{title}</Link>
    </div>
    <div className="articleListSummary">
      <span>{description}</span>
    </div>
    <div className="articleListLink">
      <Link to={`/${slug}`}>{cta}</Link>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  cta: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export const query = graphql`
  fragment cardContent on PrismicContentPagePrismicLandingPagePrismicRedirectUnion {
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
              fluid(maxWidth: 500, maxHeight: 300) {
                srcSet
                sizes
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
              fluid(maxWidth: 500, maxHeight: 300) {
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
    ... on PrismicRedirect {
      data {
        card_title
        card_cta
        card_description
        card_image {
          alt
          copyright
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 300) {
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  }
`;

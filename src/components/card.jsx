import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Card = ({ title, description, slug, image, cta, width }) => {
  const url = slug.startsWith('/') ? slug : `/${slug}`
  return (
  <div style={width ? { width: width } : {}}>
    <div className="articleListImage">
      <Link to={`${url}`}>
        <img
          srcSet={image.localFile.childImageSharp.fluid.srcSet}
          sizes={image.localFile.childImageSharp.fluid.sizes}
          alt={image.alt}
        />
      </Link>
    </div>
    <div className="articleListTitle">
      <Link to={`${url}`}>{title}</Link>
    </div>
    <div className="articleListSummary">
      <span>{description}</span>
    </div>
    <div className="articleListLink">
      <Link to={`${url}`}>{cta}</Link>
    </div>
  </div>
)};

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
fragment cardContent on PrismicLinkType {
  document {
    ... on PrismicContentPage {
      data {
        __typename
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
        __typename
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
    ... on PrismicAcademyPage {
      data {
        __typename
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
        __typename
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
}
`;

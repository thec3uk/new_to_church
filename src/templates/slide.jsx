import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Slide = ({ title, slideImage, url }) => (
  <li className="gallery_li">
    <Link to={url}>
      <img src={slideImage} alt={title} title={title} />
    </Link>
  </li>
);

export default Slide;

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  slideImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

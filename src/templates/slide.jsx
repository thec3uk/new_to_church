import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ title, slideImage, url }) => (
  <li className="gallery_li">
    <a href={url} target="_self">
      <img src={slideImage} alt={title} title={title} />
    </a>
  </li>
);

export default Slide;

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  slideImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

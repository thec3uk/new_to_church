import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, imageUrl }) => (
  <section
    className="slice_BannerImage"
    style={{
      backgroundPosition: 'center top',
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    <div className="container">
      <h1>{title}</h1>
    </div>
  </section>
);

export default Hero;

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

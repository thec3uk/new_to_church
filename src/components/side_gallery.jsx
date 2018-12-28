import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const GalleryImage = ({ image, url }) => (
  <li className="gallery_li">
    <Link to={url}>
      <img src={image} alt="" title="" />
    </Link>
  </li>
);

GalleryImage.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const SideGallery = ({ images }) => {
  images = images || [];
  return (
    <ul className="gallery_ul">
      {images.map(({ id, url, slug }) => (
        <GalleryImage key={id} image={url} url={slug} />
      ))}
    </ul>
  );
};

export default SideGallery;

SideGallery.propTypes = {
  images: PropTypes.array,
};

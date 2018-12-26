import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ image, url }) => (
  <li className="gallery_li">
    <a href={url} target="_self">
      <img src={image} alt="" title="" />
    </a>
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

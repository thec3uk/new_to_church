import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ input, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
};

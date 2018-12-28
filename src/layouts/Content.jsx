import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ input }) => (
  <div dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};

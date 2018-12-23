import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({ index_page }) => (
  <>
    {index_page ? (
      <Helmet>
        <link
          type="text/css"
          rel="stylesheet"
          href="/Images/Content/4/Templates/49141/css/bxslider.V4.2.5.css"
        />
        <script src="https://lightwidget.com/widgets/lightwidget.js" />
        <script src="/Images/Content/4/Templates/49141/js/bxslider.V4.2.5.js" />
      </Helmet>
    ) : (
      <div />
    )}
    <Helmet>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
      <link
        type="text/css"
        rel="stylesheet"
        href="/Images/Content/4/Templates/49141/css/normalize.V5.0.0.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="/Images/Content/4/Templates/49141/css/font-icons.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="/Images/Content/4/Templates/49141/css/style.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="/Images/Content/4/Templates/49141/css/SideLinks.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="/Images/Content/4/Templates/49141/css/styleOverRide.css?V=28Jun2018"
      />

      <script src="/Images/Content/4/Templates/49141/js/slicknav.V1.0.10.js" />
      <script defer src="/Images/Content/4/Templates/49141/js/script.js" />
    </Helmet>
  </>
);

export default Head;

Head.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

Head.defaultProps = {
  index_page: false,
};

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({ index_page }) => (
  <Fragment>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="/Common/Styles/base.min.css?SV=V113T"
      />
      <script src="/jquery-and-plugins.min.js" />
      <script
        type="text/javascript"
        src="/Common/Scripts/system.min.js?SV=V113T"
      />
      <script src="/Common/ThirdParty/swfobject.js" type="text/javascript" />
      <link
        href="/Common/ThirdParty/lightbox/css/lightbox.css"
        rel="stylesheet"
        type="text/css"
        media="screen"
      />
      <script type="text/javascript">
        {'$(document).ready(ClearQSTokens);'}
      </script>
      <script
        type="text/javascript"
        src="/Modules/FrontPage/Search/SearchFunctions.js?SV=V113T"
      />
      <script type="text/javascript">{`
          var strValidEmailRegex = "^[A-Za-z0-9!#$%&'*+/=?^_\`{|}~-]+(\\.[A-Za-z0-9!#$%&'*+/=?^_\`{|}~-]+)*\\@[\\w\\-]+(\\.[\\w\\-]+)*\\.[a-zA-Z]{2,}$";
          var intMobileGroupID = 0;
      `}</script>
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
      {/* Facebook Pixel Code */}
      <script type="text/javascript">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '452523168485459');
      fbq('track', 'PageView');`}
      </script>
      <noscript>
        {`<img
          height="1"
          width="1"
          alt="fb pixel"
          src="https://www.facebook.com/tr?id=452523168485459&ev=PageView&noscript=1"
        />`}
      </noscript>
      {/* End Facebook Pixel Code */}
      <noscript>
        {
          '<h1>Hi!</h1><p>This site requires javascript to operate fully, please enable javascript in your settings</p>'
        }
      </noscript>
    </Helmet>
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
  </Fragment>
);

export default Head;

Head.propTypes = {
  index_page: PropTypes.bool.isRequired,
};

Head.defaultProps = {
  index_page: false,
};

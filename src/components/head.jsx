import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    <link rel="stylesheet" type="text/css" href="/prismic-styles.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="/Common/Styles/base.min.css?SV=V113T"
    />
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
    <script src="https://lightwidget.com/widgets/lightwidget.js" />
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
);

export default Head;

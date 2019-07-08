import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    <script>
      {`window.prismic = {
      endpoint: 'https://thec3.cdn.prismic.io/api/v2'
    };`}
    </script>
    <script
      type="text/javascript"
      src="https://static.cdn.prismic.io/prismic.min.js"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
    />
    <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" />
    <script>
      {`window.addEventListener("load", function()
      {window.cookieconsent.initialise({
        palette: {
          popup: {
            background: '#393643',
            text: '#ffffff',
          },
          button: {
            background: '#f05356',
            text: '#ffffff',
          },
        },
        position: 'bottom-right',
        content: {
          href: 'www.thec3.uk/privacy',
        },
      })}
      );`}
    </script>
    <link rel="stylesheet" type="text/css" href="/css/prismic-styles.css" />
    <link type="text/css" rel="stylesheet" href="/css/normalize.V5.0.0.css" />
    <link type="text/css" rel="stylesheet" href="/css/font-icons.css" />
    <link type="text/css" rel="stylesheet" href="/css/style.css" />
    <link type="text/css" rel="stylesheet" href="/css/SideLinks.css" />
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

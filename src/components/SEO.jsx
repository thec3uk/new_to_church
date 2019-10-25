import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ title, desc, banner, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: { siteUrl, pathPrefix },
      },
      prismicSiteConfig: {
        data: {
          defaultTitle,
          author,
          alt_title,
          short_title,
          logo,
          defaultDescription,
          defaultBanner,
          twitter_username,
        },
        lang,
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: defaultDescription || desc,
        image: `${defaultBanner.url}`,
        url: `${siteUrl}${pathname || '/'}`,
      };
      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: alt_title || '',
        },
      ];
      if (article) {
        schemaOrgJSONLD = [
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            '@id': seo.url,
            url: seo.url,
            name: title,
            alternateName: alt_title || '',
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            description: seo.description,
            datePublished: buildTime,
            dateModified: buildTime,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: author,
              logo: {
                '@type': 'ImageObject',
                url: logo.url,
              },
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl,
            },
          },
        ];
      }
      return (
        <Helmet title={defaultTitle + ' : ' + seo.title}>
          <html lang={lang} />
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="apple-mobile-web-app-title" content={short_title} />
          <meta name="application-name" content={short_title} />
          <link rel="canonical" href={seo.url} />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph  */}
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content={article ? 'article' : null} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={twitter_username} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Helmet>
      );
    }}
  />
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  index_page: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  index_page: false,
};

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl: url
        pathPrefix
      }
    }
    prismicSiteConfig {
      data {
        defaultTitle: title
        alt_title
        author
        short_title
        defaultDescription: description
        logo {
          url
        }
        defaultBanner: banner {
          url
        }
        twitter_username
      }
      lang
    }
  }
`;

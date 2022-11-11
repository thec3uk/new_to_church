import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, title, url, image }) => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const metaTitle = title
    ? `${title} | ${queryData.site?.siteMetadata?.title}`
    : queryData.site?.siteMetadata?.title
  const metaDescription =
    description || queryData.site?.siteMetadata?.description

  const metaImage =
    image || `${queryData.site?.siteMetadata?.siteUrl}/social_share.jpeg`

  const lang = 'en-GB'

  const fullUrl = `${queryData.site?.siteMetadata?.siteUrl}${url}`

  return (
    <Helmet>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta name="apple-mobile-web-app-title" content={metaTitle} />
      <meta name="application-name" content={metaTitle} />
      <link rel="canonical" href={fullUrl} />
      {/* OpenGraph  */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter_username} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} /> */}

      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
        rel="stylesheet"
      />

      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Helmet>
  )
}

export default SEO

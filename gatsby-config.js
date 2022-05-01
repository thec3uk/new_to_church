require('dotenv').config({
  path: `.env`,
})
const config = require(`./src/config/site`)
const prismicRepositoryName = `thec3`

const linkResolver = require('./src/utils/linkResolver').linkResolver

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        // isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        // allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-background-image`,
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: `/:`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: prismicRepositoryName,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: linkResolver,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-90682079-2`,
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional create only fields (optional)
        siteSpeedSampleRate: 10,
        alwaysSendReferrer: true,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          process.env.NODE_ENV !== `production`
            ? `https://thec3.us19.list-manage.com/subscribe/post?u=baac982817e7fb161022a1253&amp;id=7443c2e349ff`
            : `https://thec3.us19.list-manage.com/subscribe/post?u=baac982817e7fb161022a1253&amp;id=d62f87b12a`,
      },
    },
    `gatsby-plugin-brotli`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: config.favicon,
        legacy: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require('./src/utils/algolia-queries'),
      },
    },
  ],
}

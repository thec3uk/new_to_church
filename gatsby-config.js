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
  trailingSlash: 'ignore',
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
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
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: linkResolver,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // routes: [
        //   {
        //     type: 'page',
        //     path: '/:parent_page?/:uid',
        //     resolvers: {
        //       parent_page: 'parent_page',
        //     },
        //   },
        // ],
        graphQuery: `
          {
            document {
              type
              uid
              url
            }
          }
        `,
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'ee3c430d-e2d2-4256-973e-7c0be0223d63',
        srcUrl: 'https://analytics.thec3.uk/script.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          process.env.NODE_ENV !== `production`
            ? `https://thec3.us19.list-manage.com/subscribe/post?u=baac982817e7fb161022a1253&amp;id=7443c2e349`
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

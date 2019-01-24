const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-90682079-2',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional create only fields (optional)
        siteSpeedSampleRate: 10,
        alwaysSendReferrer: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          process.env.NODE_ENV !== 'production'
            ? 'https://thec3.us19.list-manage.com/subscribe/post?u=baac982817e7fb161022a1253&amp;id=7443c2e349ff'
            : 'https://thec3.us19.list-manage.com/subscribe/post?u=baac982817e7fb161022a1253&amp;id=6958ad32ad',
      },
    },
    'gatsby-plugin-brotli',
    'gatsby-plugin-catch-links',
    'gatsby-remark-source-name',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: process.env.NODE_ENV !== 'production',
        // eslint-disable-next-line
        labelFormat: `[filename]--[local]`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'config/typography.js',
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};

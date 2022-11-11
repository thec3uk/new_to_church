module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'The C3 Church', // Navigation and Site Title
  description:
    'The C3 Church is an evangelical, charismatic Christian church based in Cambridge, Bury St Edmunds and Colchester, England.',
  url: process.env.URL || 'http://localhost:8000', // Domain of your site. No trailing slash!
  siteUrl: process.env.URL || 'http://localhost:8000/', // url + pathPrefix
  favicon: 'static/manifest-logo.png', // Used for manifest favicon generation
  shortName: 'The C3', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Andrew', // Author for schemaORGJSONLD
  themeColor: '#202945',
  backgroundColor: '#f05356',
  domain: 'thec3.uk',
}

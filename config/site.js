module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'The C3 Church', // Navigation and Site Title
  titleAlt: 'The C3 Church', // Title for JSONLD
  description:
    'The C3 Church is an evangelical, charismatic Christian church based in Cambridge and Bury St Edmunds, England.',
  url: 'https://thec3.uk', // Domain of your site. No trailing slash!
  siteUrl: 'https://gatsby-tutorial-starter.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/LogoWhite.png', // Used for SEO
  banner: 'static/logo/BackgroundGrey.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'GatsbyTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Justin', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@the_c3church', // Twitter Username
  topNav: [
    { slug: '/newtochurch/', title: 'New to Church' },
    { slug: '/nextsteps/', title: 'Next Steps' },
    { slug: '/outreach/', title: 'Outreach' },
    { slug: '/resources/', title: 'Resources' },
    { slug: '/giving/', title: 'Giving' },
  ],
  footerLinks: [
    { slug: '/copyright', title: 'Copyright' },
    { slug: '/terms', title: 'T&Cs' },
    { slug: '/privacy', title: 'Privacy' },
    { slug: '/help', title: 'Help' },
  ],
};

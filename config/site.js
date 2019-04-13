module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'The C3 Church', // Navigation and Site Title
  titleAlt: 'The C3 Church', // Title for JSONLD
  description:
    'The C3 Church is an evangelical, charismatic Christian church based in Cambridge and Bury St Edmunds, England.',
  url: process.env.URL || 'http://localhost:8000', // Domain of your site. No trailing slash!
  siteUrl: `${process.env.URL}` || 'http://localhost:8000/', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/images/LogoWhite.png', // Used for SEO
  banner: 'static/images/BackgroundGrey.png',
  // JSONLD / Manifest
  favicon: 'static/images/c3Logo.png', // Used for manifest favicon generation
  shortName: 'The C3', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Andrew', // Author for schemaORGJSONLD
  themeColor: '#202945',
  backgroundColor: '#f05356',
  twitter: '@thec3_church', // Twitter Username
  facebook_slug: 'thec3uk',
  instagram_slug: 'thec3_church',
  twitter_slug: 'thec3_church',
  phoneNumber: '01223 844415',
  emailContact: 'hello@thec3.uk',
  topNav: [
    { slug: '/online', title: 'Church Online' },
    { slug: '/next-steps', title: 'Next Steps' },
    { slug: '/outreach', title: 'Outreach' },
    { slug: '/giving', title: 'Giving' },
    { slug: '/myc3', title: 'My Area' },
  ],
  footerLinks: [
    { id: 'footer_vacanies', slug: '/vacancies', title: 'Work with us' },
    { id: 'footer_copyright', slug: '/copyright', title: 'Copyright' },
    { id: 'footer_tc', slug: '/terms', title: 'T&Cs' },
    { id: 'footer_privacy', slug: '/privacy', title: 'Privacy' },
    { id: 'footer_help', slug: '/help', title: 'Help' },
  ],
};

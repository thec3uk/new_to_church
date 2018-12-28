import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { SEO, Head, Footer, Hero, SideLinks, Nav } from 'components';

const Layout = ({ children, title }) => (
  <Fragment>
    <SEO title={title} />
    {children}
    <Footer />
  </Fragment>
);

const ContentLayout = ({ children, title }) => (
  <Layout title={title}>
    <Head />
    <header className="NonHomePage">
      <Nav index_page={false} />
    </header>
    <SideLinks index_page={false} />
    {children}
  </Layout>
);

const HeroLayout = ({ children, title, heroImage }) => (
  <ContentLayout title={title}>
    <Hero title={title} imageUrl={heroImage} />
    {children}
  </ContentLayout>
);

export { Layout, ContentLayout, HeroLayout };

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

HeroLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
};

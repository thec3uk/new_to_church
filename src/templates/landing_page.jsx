import React, { Fragment } from 'react';
import { SEO, Nav, SideLinks, Footer, Hero } from '../components';

const LandingPage = () => (
  <Fragment>
    <SEO />
    <header className="NonHomePage">
      <Nav />
    </header>
    <SideLinks />

    <Hero />

    <section className="slice_LandingMainArticle">
      <module alt="Article" module_id="698312" type_id="10" />
    </section>

    <section className="slice_LandingArticles">
      <div className="container">
        <module alt="Latest Articles" module_id="698315" type_id="1" />
      </div>
    </section>

    <Footer />
  </Fragment>
);

export default LandingPage;

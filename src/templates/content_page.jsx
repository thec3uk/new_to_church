import React, { Fragment } from 'react';
import { SEO, Nav, SideLinks, Footer, Hero } from '../components';

const ContentPage = () => (
  <Fragment>
    <SEO />
    <header className="NonHomePage">
      <Nav />
    </header>

    <SideLinks />
    <Hero />

    <section className="slice_content_page">
      <div className="container">
        <module alt="Article" module_id="698347" type_id="10" />
        <module alt="System Page Content" module_id="698348" type_id="82" />
        <aside className="sidebar">
          <nav>
            <module alt="Group Navigation" module_id="698349" type_id="14" />
          </nav>
          <module alt="Gallery" module_id="698354" type_id="84" />
        </aside>
      </div>
    </section>

    <Footer />
  </Fragment>
);

export default ContentPage;

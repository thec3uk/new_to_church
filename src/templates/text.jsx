import React from 'react';
import { Head, Header, SideLinks, Footer } from '../components';

const TextPage = () => (
  <html lang="en" dir="ltr">
    <Head />
    <body>
      <Header />
      <SideLinks />

      <section className="slice_system_page">
        <div className="container system_content">
          <module
            alt="System Page Left Column"
            module_id="699662"
            type_id="83"
          />
          <module alt="System Page Content" module_id="699654" type_id="82" />
        </div>
      </section>

      <Footer />
    </body>
  </html>
);

export default TextPage;

import React from 'react';
import PropTypes from 'prop-types';
import { Head, Header, SideLinks, Footer } from '../components';

const TextPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <html lang="en" dir="ltr">
      <Head />
      <body>
        <Header />
        <SideLinks />

        <section className="slice_system_page">
          <div className="container system_content">
            <div
              className="systemPageContent"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
        </section>

        <Footer />
      </body>
    </html>
  );
};

export default TextPage;

TextPage.propTypes = {
  data: PropTypes.object,
};

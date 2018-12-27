import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SEO, Head, Nav, SideLinks, Footer } from '../components';

const TextPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <html lang="en" dir="ltr">
      <Head />
      <SEO title={page.frontmatter.title} />
      <body>
        <header className="NonHomePage">
          <Nav index_page={false} />
        </header>
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

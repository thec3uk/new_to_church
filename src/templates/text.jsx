import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ContentLayout, Content } from '../layouts';

const TextPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <ContentLayout title={page.frontmatter.title}>
      <section className="slice_system_page">
        <div className="container system_content">
          <Content className="systemPageContent" input={page.html} />
        </div>
      </section>
    </ContentLayout>
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

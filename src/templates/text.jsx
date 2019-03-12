import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ContentLayout, Content } from '../layouts';

const TextPage = ({ data }) => {
  const page = data.prismicTextPage;
  return (
    <ContentLayout title={page.data.page_title}>
      <section className="slice_system_page">
        <div className="container system_content">
          <Content
            className="systemPageContent"
            input={page.data.body[0].primary.text.html}
          />
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
  query text($slug: String!) {
    prismicTextPage(uid: { eq: $slug }) {
      uid
      data {
        page_title
        body {
          primary {
            text {
              html
            }
          }
        }
      }
    }
  }
`;

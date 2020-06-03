import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ContentLayout, Content } from '../layouts';
import { ContactForm } from '../components';

const TextPage = ({ data }) => {
  const page = data.prismicTextPage.data;
  return (
    <ContentLayout title={page.page_title}>
      <section className="slice_system_page">
        <div className="container system_content">
          <Content className="systemPageContent" input={page.body} />
          {page.contact_form === 'yes' && (
            <div className="ArticleBody">
              <ContactForm
                title={page.page_title}
                toEmail={page.contact_form_to_email_address}
              />
            </div>
          )}
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
        contact_form
        contact_form_to_email_address
        body {
          ... on Node {
            id
          }
          ... on PrismicSliceType {
            slice_type
          }
          ... on PrismicTextPageBodyText {
            primary {
              text {
                html
                text
              }
            }
          }
        }
      }
    }
  }
`;

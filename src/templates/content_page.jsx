import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  SideGallery,
  Head,
  SEO,
  Nav,
  SideLinks,
  Footer,
  Hero,
} from '../components';

const ContentPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <Fragment>
      <SEO title={page.frontmatter.title} />
      <Head />
      <header className="NonHomePage">
        <Nav index_page={false} />
      </header>

      <SideLinks index_page={false} />
      <Hero
        title={page.frontmatter.title}
        imageUrl={page.frontmatter.heroImage}
      />

      <section className="slice_content_page">
        <div className="container">
          <div className="main-content">
            <div
              className="ArticleBody"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>

          <module alt="System Page Content" module_id="698348" type_id="82" />
          <aside className="sidebar">
            <nav>
              <module alt="Group Navigation" module_id="698349" type_id="14" />
            </nav>
            <SideGallery images={page.fields.galleryImageNodeList} />
          </aside>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default ContentPage;

ContentPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        heroImage
      }
      fields {
        cardNodeList {
          slug
          image
          title
          description
          cta
          id
        }
        galleryImageNodeList {
          id
          slug
          url
        }
      }
    }
  }
`;

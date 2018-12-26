import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  SideNav,
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

          <aside className="sidebar">
            <nav>
              <SideNav
                currentSlug={page.fields.slug}
                parent={page.fields.parentNav}
                siblings={page.fields.siblingNav}
              >
                {page.fields.childNav}
              </SideNav>
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
        slug
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
        parentNav {
          slug
          title
        }
        siblingNav {
          title
          slug
        }
        childNav {
          title
          slug
        }
      }
    }
  }
`;

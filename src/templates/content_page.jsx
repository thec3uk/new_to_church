import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SideNav, SideGallery, ContactForm } from '../components';
import { HeroLayout, Content } from '../layouts';

const ContentPage = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <HeroLayout
      title={page.frontmatter.title}
      heroImage={page.frontmatter.heroImage}
    >
      <section className="slice_content_page">
        <div className="container">
          <div className="main-content">
            <Content className="ArticleBody" input={page.html} />
            {page.frontmatter.contactForm &&
              page.frontmatter.contactForm.active === true && (
                <ContactForm
                  title={page.frontmatter.title}
                  toEmail={page.frontmatter.contactForm.email}
                />
              )}
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
    </HeroLayout>
  );
};

export default ContentPage;

ContentPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "content" } }
    ) {
      html
      frontmatter {
        title
        heroImage
        contactForm {
          email
          active
        }
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

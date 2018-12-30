import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, SideLinks, SideGallery } from '../components';
import { Layout, Content } from '../layouts';

const HomePage = ({ data }) => (
  <Layout title="The C3 Church">
    <Head index_page={true} />
    <header>
      <section className="slice_VideoWrapper">
        <div>
          <video
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            playinline="playinline"
            poster="/Images/Content/4/867706.jpg"
          >
            <source
              type="video/mp4"
              src="https://s3.amazonaws.com/media.cthree.org/9d4cc8be-ba5f-483d-b41a-a285e1866a4c.mp4"
            />
            <track default kind="captions" />
            <track kind="descriptions" />
          </video>
        </div>
        <div className="video-overlay">
          <Nav index_page={true} />
        </div>
      </section>

      <SideLinks index_page={true} />

      <section className="slice_WelcomeSlides_L">
        {/* The below should be pulled in as content*/}
        <div className="bannerSlides">
          <SideGallery images={data.markdownRemark.frontmatter.slideshow} />
        </div>
      </section>
    </header>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Content key={node.id} input={node.html} />
    ))}
  </Layout>
);

export default HomePage;

HomePage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { page: { eq: "index" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slideshow {
          title
          url
          slug
        }
      }
    }
  }
`;

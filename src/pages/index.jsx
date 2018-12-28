import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, SEO, Nav, SideLinks, Footer } from '../components';
import { Slide } from '../templates';

const Index = ({ data }) => (
  <Fragment>
    <Head index_page={true} />
    <SEO title="The C3 Church" />
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
          <ul className="gallery_ul">
            <Slide
              title="Our Bury St. Edmunds site is coming soon*Find out how to get involved here!"
              slideImage="/Images/Content/4/910611.jpg"
              url="/Publisher/Article.aspx?ID=529859"
            />
          </ul>
        </div>
      </section>
    </header>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} dangerouslySetInnerHTML={{ __html: node.html }} />
    ))}

    <Footer />
  </Fragment>
);

export default Index;

Index.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
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
  }
`;

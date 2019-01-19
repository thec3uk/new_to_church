import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ContentPage from '../templates/content_page';
import { HeroLayout } from '../layouts';

const TeachingSeries = ({ data }) => (
  <HeroLayout title="Teaching Series" layout="/Images/Content/4/867552.jpeg">
    <h1>Teaching Series</h1>

    <p>Browse our past teaching series below.</p>

    {data.allRssEntry.edges.map(({ node }) => (
      <div key={node.date}>
        <a href={node.link}>{node.title}</a>
        <p>{node.description}</p>
      </div>
    ))}
  </HeroLayout>
);

export default TeachingSeries;

TeachingSeries.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    allRssEntry(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          description
          date
          link
        }
      }
    }
  }
`;

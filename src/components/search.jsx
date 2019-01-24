import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import PropTypes from 'prop-types';

// Search component
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    };
  }

  render() {
    return (
      <div className="search-overlay">
        <a className="search-close" href="#">
          &thinsp;
        </a>
        <div>
          <div className="search_div">
            <input
              type="text"
              name="searchSite"
              size="22"
              placeholder="Search the Site"
              value={this.state.query}
              onChange={this.search}
              className="text"
            />
          </div>
          <input type="button" value="Go" className="button" />
        </div>
      </div>
    );
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };
}

Search.propTypes = {
  searchIndex: PropTypes.object,
};

export default Search;

import { createRef, default as React, useState, useMemo } from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

import SearchResult from './result'
import SearchBox from './search-box'
// import useClickOutside from './use-click-outside'

export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = React.useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID as string,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
      ),
    []
  )

  // useClickOutside(rootRef, () => setFocus(false))

  return (
    <div ref={rootRef} className="flex flex-col justify-end">
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
        <SearchResult
          indices={indices}
          show={showSearch && query && query.length > 0}
        />
      </InstantSearch>
    </div>
  )
}

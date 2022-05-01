import { PrismicLink } from '@prismicio/react'
import { default as React } from 'react'
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom'

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

// this is the component to customise for each search result
const PageHit = ({ hit }) => {
  return (
    <div>
      <PrismicLink href={`/${hit.uid}`}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </PrismicLink>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  )
}

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, show }) => (
  <div
    className={`${
      show ? 'flex' : 'hidden'
    } flex-col p-4 ml-4 top-24 absolute shadow border-2 w-1/3 right-48`}
  >
    <div>
      {indices.map((index) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      <PoweredBy />
    </div>
  </div>
)

export default SearchResult

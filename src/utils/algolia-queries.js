const indexName = `Pages`

const pageQuery = `{
  pages: allPrismicPage {
    edges {
      node {
        id
        dataRaw
        uid
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, dataRaw, uid, ...rest } }) {
  return {
    objectID: id,
    uid,
    ...dataRaw,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      return data.pages.edges.map(pageToAlgoliaRecord)
    },
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries

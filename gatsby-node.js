const path = require('path')
const linkResolver = require('./src/utils/linkResolver').linkResolver

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  const domainQuery = await graphql(`
    query domain {
      site {
        siteMetadata {
          domain
        }
      }
    }
  `)

  const domainTag = `domain:${domainQuery.data?.site.siteMetadata.domain}`

  // Query all Pages with their IDs and template data.
  const pages = await graphql(
    `
      query Pages($domainTag: String!) {
        allPrismicPage(filter: { tags: { eq: $domainTag } }) {
          nodes {
            id
            uid
            tags
            type
          }
        }
      }
    `,
    { domainTag: domainTag }
  )

  // Create pages for each Page in Prismic using the selected template.
  pages.data?.allPrismicPage.nodes.forEach((node) => {
    createPage({
      path: node.uid === 'home' ? '/' : `/${node.uid}`,
      component: path.resolve(__dirname, 'src/pages/page.tsx'),
      context: {
        uid: node.uid,
        domainTag: domainTag,
      },
    })
  })

  const redirects = await graphql(
    `
      query Redirects($domainTag: String!) {
        allPrismicRedirect(filter: { tags: { eq: $domainTag } }) {
          nodes {
            url
            uid
            type
            data {
              page_title
              permanent
              destination {
                link_type
                url
                type
                uid
              }
            }
          }
        }
      }
    `,
    { domainTag: domainTag }
  )

  redirects.data?.allPrismicRedirect.nodes.forEach((node) => {
    const url = linkResolver(node.data.destination)

    createRedirect({
      fromPath: `/${node.uid}`,
      isPermanent: node.data.permanent || true,
      toPath: url,
      redirectInBrowser: true,
    })
    createRedirect({
      fromPath: `/${node.uid.toUpperCase()}`,
      isPermanent: node.data.permanent || true,
      toPath: url,
      redirectInBrowser: true,
    })
  })
}

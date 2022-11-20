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
            url
            tags
            type
            data {
              parent_page {
                url
                uid
                type
                link_type
              }
            }
          }
        }
      }
    `,
    { domainTag: domainTag }
  )

  // Create pages for each Page in Prismic using the selected template.
  pages.data?.allPrismicPage.nodes.forEach((node) => {
    // console.log('gatby-node', node.uid)
    const url = linkResolver(node)
    // const fullPath =
    //   node.data.parent_page.uid === null
    //     ? node.uid === 'home'
    //       ? '/'
    //       : `/${node.uid}`
    //     : `/${node.data.parent_page.uid}/${node.uid}`
    createPage({
      path: url,
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
    console.log(node.uid, node.url)
    // if (node.data && node.data.destination) {
    // const url = linkResolver(node)

    createRedirect({
      fromPath: `/${node.uid}`,
      isPermanent: node.data.permanent || true,
      toPath: node.url,
      redirectInBrowser: true,
    })
    createRedirect({
      fromPath: `/${node.uid.toUpperCase()}`,
      isPermanent: node.data.permanent || true,
      toPath: node.url,
      redirectInBrowser: true,
    })
    // } else {
    //   console.error('node', node.uid)
    // }
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const { buildObjectType } = schema

  // List known embed fields. Any unknown fields will still be inferred.
  const PrismicEmbedType = buildObjectType({
    name: 'PrismicEmbedType',
    fields: {
      height: 'Int',
      embed_url: 'String',
      thumbnail_url: 'String',
      title: 'String',
      type: 'String',
      width: 'Int',
    },
  })

  createTypes(PrismicEmbedType)
}

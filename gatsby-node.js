const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const sortNodebySlug = (nodeArray, slugArray) => {
  nodeArray.sort((a, b) => {
    var aSlugIndex = slugArray.indexOf(a.slug);
    var bSlugIndex = slugArray.indexOf(b.slug);
    if (aSlugIndex < bSlugIndex) {
      return -1;
    }
    if (aSlugIndex > bSlugIndex) {
      return 1;
    }
    return 0;
  });
  return nodeArray;
};

const createRefNode = (
  node,
  createNodeField,
  getNode,
  getNodes,
  listKey,
  detailKey
) => {
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.frontmatter.hasOwnProperty(listKey)
  ) {
    const slugList = node.frontmatter[listKey];
    const filteredNodes = getNodes().filter(
      node =>
        node.internal.type === 'MarkdownRemark' &&
        node.frontmatter.hasOwnProperty(detailKey)
    );
    var nodeList = new Array();
    filteredNodes.forEach(node => {
      const slug = createFilePath({ node, getNode, basePath: 'pages' });
      if (slugList.includes(slug)) {
        var existing = node.frontmatter[detailKey];
        var obj = { ...existing, slug: slug, id: node.id };
        nodeList.push(obj);
      }
    });
    nodeList = sortNodebySlug(nodeList, slugList);
    if (nodeList === null) {
      nodeList = [];
    }
    createNodeField({
      node,
      name: `${detailKey}NodeList`,
      value: nodeList,
    });
  }
};

exports.onCreateNode = ({ node, getNode, getNodes, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.endsWith('index.md')
  ) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    const slugPath = slug.split('/');
    const depth = slugPath.length;
    const parentSlug = slugPath.slice(0, depth - 2).join('/') + '/';
    const parentNodes = getNodes().filter(
      node =>
        node.internal.type === 'MarkdownRemark' &&
        node.fileAbsolutePath
          .split(node.fields.sourceName)
          .slice(1)[0]
          .replace('index.md', '') === parentSlug
    );
    if (parentNodes.length == 1) {
      const parentTitle = parentNodes[0].frontmatter.title;
      createNodeField({
        node,
        name: 'parentNav',
        value: { slug: parentSlug, title: parentTitle },
      });
    }
    const nodes = getNodes().filter(
      node =>
        node.internal.type === 'MarkdownRemark' &&
        node.fileAbsolutePath
          .split(node.fields.sourceName)
          .slice(1)[0]
          .startsWith(parentSlug)
    );
    const getNav = (depthComp, slugComp) => {
      var nav = nodes
        .map(n => {
          var nslug = n.fileAbsolutePath
            .split(n.fields.sourceName)
            .slice(1)[0]
            .replace('index.md', '');
          if (
            nslug.startsWith(slugComp) &&
            nslug.split('/').length === depthComp &&
            nslug.endsWith('/')
          ) {
            return {
              slug: nslug,
              title: n.frontmatter.title,
            };
          }
        })
        .filter(n => n !== undefined);
      if (nav === null) {
        nav = [];
      }
      return nav;
    };

    createNodeField({
      node,
      name: 'siblingNav',
      value: getNav(depth, parentSlug),
    });
    createNodeField({
      node,
      name: 'childNav',
      value: getNav(depth + 1, slug),
    });
  }
  createRefNode(node, createNodeField, getNode, getNodes, 'cardList', 'card');
  createRefNode(
    node,
    createNodeField,
    getNode,
    getNodes,
    'gallery',
    'galleryImage'
  );
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

const getDestination = async (graphql, node) => {
  const data = node.data;
  var dest = '';
  switch (data.destination.link_type) {
    case 'Document':
      return graphql(
        `
          query($uid: String!) {
            prismicRedirect(uid: { eq: $uid }) {
              uid
              data {
                destination {
                  uid
                }
              }
            }
          }
        `,
        { uid: node.uid }
      ).then(({ data }) => {
        return '/' + data.prismicRedirect.data.destination.uid;
      });
    case 'Media':
      return graphql(
        `
          query($uid: String!) {
            prismicRedirect(uid: { eq: $uid }) {
              uid
              data {
                destination {
                  url
                }
              }
            }
          }
        `,
        { uid: node.uid }
      ).then(({ data }) => {
        return data.prismicRedirect.data.destination.url;
      });
    case 'Web':
      return graphql(
        `
          query($uid: String!) {
            prismicRedirect(uid: { eq: $uid }) {
              uid
              data {
                destination {
                  url
                }
              }
            }
          }
        `,
        { uid: node.uid }
      ).then(({ data }) => {
        return data.prismicRedirect.data.destination.url;
      });
    default:
      console.error('Unknown link_type: ' + data.destination.link_type);
  }
  return dest;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPrismicLandingPage {
          edges {
            node {
              uid
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicLandingPage.edges.forEach(({ node }) =>
        createPage({
          path: node.uid,
          component: path.resolve('src/templates/landing_page.jsx'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.uid,
          },
        })
      );
      resolve();
    });

    graphql(`
      {
        allPrismicContentPage {
          edges {
            node {
              uid
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicContentPage.edges.forEach(({ node }) =>
        createPage({
          path: node.uid,
          component: path.resolve('src/templates/content_page.jsx'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.uid,
          },
        })
      );
      resolve();
    });

    graphql(`
      {
        allPrismicTextPage {
          edges {
            node {
              uid
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicTextPage.edges.forEach(({ node }) =>
        createPage({
          path: node.uid,
          component: path.resolve('src/templates/text.jsx'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.uid,
          },
        })
      );
      resolve();
    });

    graphql(`
      {
        prismicHomepage {
          uid
        }
      }
    `).then(result => {
      createPage({
        path: '/',
        component: path.resolve('src/templates/homepage.jsx'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: result.data.prismicHomepage.uid,
        },
      });
      createRedirect({
        fromPath: '/' + result.data.prismicHomepage.uid,
        isPermanent: true,
        toPath: '/',
        redirectInBrowser: true,
      });
      resolve();
    });

    graphql(`
      {
        allPrismicRedirect {
          edges {
            node {
              uid
              data {
                permanent
                destination {
                  link_type
                }
              }
            }
          }
        }
      }
    `).then(result => {
      {
        result.data &&
          result.data.allPrismicRedirect.edges.forEach(({ node }) => {
            getDestination(graphql, node).then(url => {
              createRedirect({
                fromPath: '/' + node.uid,
                isPermanent: node.uid.permanent || true,
                toPath: url,
                redirectInBrowser: true,
              });
              createRedirect({
                fromPath: '/' + node.uid.toUpperCase(),
                isPermanent: node.uid.permanent || true,
                toPath: url,
                redirectInBrowser: true,
              });
            });
          });
        resolve();
      }
    });
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
      module: {
        rules: [
          {
            test: /react-notification-bar/,
            use: loaders.null(),
          },
        ],
      },
    });
  } else {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
    });
  }
};

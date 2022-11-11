const path = require('path');

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
      console.error(
        `Unknown link_type: ${data.destination.link_type} at uid: ${node.uid}`
      );
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
exports.onCreateWebpackConfig = (
  { stage, loaders, actions },
  { cssLoaderOptions = {}, postCssPlugins }
) => {
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
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              // loaders.miniCssExtract(),
              // loaders.css({ ...cssLoaderOptions, importLoaders: 2 }),
              // loaders.postcss({ plugins: postCssPlugins }),
              { loader: 'scoped-css-loader' },
            ],
          },
        ],
      },
    });
  }
};

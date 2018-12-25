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
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const contentTemplate = path.resolve('src/templates/content_page.jsx');
    const landingTemplate = path.resolve('src/templates/landing_page.jsx');
    const text = path.resolve('src/templates/text.jsx');
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                template
              }
            }
          }
        }
      }
    `).then(result => {
      // console.log(JSON.stringify(result, null, 4));
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const template = node.frontmatter.template;
        var templateFile = '';
        switch (template) {
          case 'content':
            templateFile = contentTemplate;
            break;
          case 'landing':
            templateFile = landingTemplate;
            break;
          case 'text':
            templateFile = text;
            break;
          default:
            console.error(
              `${
                node.fileAbsolutePath
              } is missing a template declaration in the frontmatter of the file`
            );
            return;
        }
        createPage({
          path: node.fields.slug,
          component: templateFile,
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

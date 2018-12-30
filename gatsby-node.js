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

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    const contentTemplate = path.resolve('src/templates/content_page.jsx');
    const landingTemplate = path.resolve('src/templates/landing_page.jsx');
    const homepageTemplate = path.resolve('src/templates/homepage.jsx');
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
                locationSlug
              }
            }
          }
        }
      }
    `).then(result => {
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
          case 'index':
            templateFile = homepageTemplate;
            break;
          case 'redirect':
            createRedirect({
              fromPath: node.fields.slug,
              isPermanent: true,
              toPath: node.frontmatter.locationSlug,
              redirectInBrowser: true,
            });
            return;
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

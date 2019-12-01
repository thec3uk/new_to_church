const linkResolver = function(doc) {
  // Fallback for other types, in case new custom types get created
  if (doc.uid === 'growth-path') {
    return '/thingthing';
  }
  if (doc.type === 'homepage') {
    return '/';
  }
  return '/' + doc.uid;
};

module.exports = linkResolver;

const config = require(`../config/site`)

const domainPrefix = `${config.domain}_`

exports.linkResolver = (node) => {
  if (node.uid === 'step1') {
    console.log('node', node)
  }
  if (node.type === 'page') {
    if (node.uid.startsWith(domainPrefix)) {
      const slug = node.uid.replace(domainPrefix, '')
      return `/${slug}`
    }
    if (node.uid === config.domain) return '/'
    return `/${node.uid}`
  }

  if (node.type === 'redirect') {
    if (node.data) {
      switch (node.data?.destination.link_type) {
        case 'Document':
          return `/${node.data.destination.uid}/`
        case 'Media':
        case 'Web':
          return node.data.destination.url
        default:
          console.error(`Unknown Redirect type ${node.uid}`)
          return '/'
      }
    }

    // console.log('REDIRECT', node)
    return `/${node.uid}`
  }

  return '/'
}

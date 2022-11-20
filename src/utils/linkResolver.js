const config = require(`../config/site`)

const domainPrefix = `${config.domain}_`

exports.linkResolver = (node) => {
  if (node.uid === 'shop') {
    console.log('Shop')
    console.log(node)
    console.log('Shop END')
  }
  if (node.uid === 'ascendcamp') {
    console.log('ascendcamp')
    console.log(node)
    console.log('ascendcamp END')
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
    if (node.data === undefined) {
      console.log(node.data)
      console.log(node)
    }
    if (node.data) {
      switch (node.data?.destination.link_type) {
        case 'Document':
          return `/${node.data.destination.uid}`
        case 'Media':
        case 'Web':
          return node.data.destination.url
        default:
          console.error(`Unknown Redirect type ${node.uid}`)
          return '/'
      }
    }
    if (node.document) {
      switch (node.document.type) {
        case 'redirect':
          return node.document.url
        default:
          console.error(`Unknown Redirect type ${node.uid}`)
          return '/'
      }
    }
  }

  return '/'
}

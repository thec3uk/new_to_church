const config = require(`../config/site`)

const domainPrefix = `${config.domain}_`

exports.linkResolver = (node) => {
  // if (node.type === 'page' && node.data) {
  //   console.log('Page with data')
  //   console.log(node)
  //   const fullPath =
  //     node.data.parent_page.url === null
  //       ? node.uid === 'home'
  //         ? '/'
  //         : `/${node.uid}`
  //       : `${node.data.parent_page.uid}/${node.uid}`
  //   return fullPath
  // })
  if (node.type === 'page') {
    // console.log('Page without data')
    // console.log(node)
    if (node.uid.startsWith(domainPrefix)) {
      const slug = node.uid.replace(domainPrefix, '')
      return `/${slug}`
    }
    if (node.uid === config.domain) return '/'
    return `/${node.uid}`
  }
  if (node.type === 'redirect') {
    switch (data.destination.link_type) {
      case 'Document':
        return `/${node.destination.uid}`
      case 'Media':
      case 'Web':
        return node.destination.url
      default:
        console.error(`Unknown Redirect type ${data.destination.link_type}`)
        return '/'
    }
  }

  return '/'
}

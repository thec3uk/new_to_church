const config = require(`../config/site`)

const domain = config.domain
const domainPrefix = `${domain}_`

exports.linkResolver = (node) => {
  if (node.uid === 'room-hire') {
    console.log(node)
  }
  if (node.uid === 'cambridge') {
    console.log(node)
  }

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
  if (node.uid === domain) return '/'
  if (node.type === 'page') {
    let slug = node.uid
    if (node.uid.startsWith(domainPrefix)) {
      slug = node.uid.replace(domainPrefix, '')
    }

    if (node.data && Object.hasOwn(node.data, 'parent_page')) {
      if (
        node.data.parent_page.uid !== domain &&
        node.data.parent_page.uid !== null
      ) {
        // console.log(node.data.parent_page.uid, node.data.parent_page)
        slug = `${node.data.parent_page.uid}/${slug}`
      }
    }
    return `/${slug}`
  }
  if (node.type === 'redirect') {
    return `/${node.uid}`
  }

  return '/'
}

// preview.js file

import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews-nano'

const PreviewPage = () => {
  return (
    <div className="m-20">
      <h1 className="text-2xl">Loading preview…</h1>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage)

import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const VideoMediaSlice = ({ slice }) => {
  return <components.VideoMedia data={slice.primary.video} />
}

export default VideoMediaSlice

export const query = graphql`
  fragment VideoMedia on PrismicMediaSliceVideo {
    primary {
      video {
        id
        width
        type
        html
        provider_url
        embed_url
        author_name
        author_url
        height
        thumbnail_height
        thumbnail_url
        thumbnail_width
        title
        version
        provider_name
      }
    }
  }
`

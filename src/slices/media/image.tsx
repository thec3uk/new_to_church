import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const ImageMediaSlice = ({ slice }) => {
  return (
    <components.ImageMedia
      image={slice.primary.image}
      alt={
        slice.primary.image.alt || 'No Alt provided please email hello@thec3.uk'
      }
      fullheight={slice.primary.fullheight}
    />
  )
}

export default ImageMediaSlice

export const query = graphql`
  fragment DefaultMedia on PrismicMediaDefault {
    primary {
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
      fullheight
    }
  }
`

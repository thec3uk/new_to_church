import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const ImageCardSlice = (data) => {
  return (
    <components.ImageCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subtitle}
      image={data.slice.primary.image}
      link={data.slice.primary.ctaLink}
      colour={data.slice.primary.colour}
    />
  )
}
export default ImageCardSlice

export const query = graphql`
  fragment ImageCard on PrismicCardSliceImageCard {
    primary {
      title
      subtitle
      ctaLink {
        ...Link
      }
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
      colour
    }
  }
`

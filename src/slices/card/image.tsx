import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const ImageCardSlice = (data) => {
  return (
    <components.ImageCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subTitle}
      image="/live.jpg"
    />
  )
}
export default ImageCardSlice

export const query = graphql`
  fragment ImageCard on PrismicCardImageCard {
    primary {
      title
      subtitle
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }
`

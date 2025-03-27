import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../../components'

const NewsletterLocationSlice = ({ slice }) => {
  return (
    <layout.Main>
      <components.NewsletterSignUpWithLocations data={slice.primary} />
    </layout.Main>
  )
}

export default NewsletterLocationSlice

export const query = graphql`
  fragment NewsletterLocationCard on PrismicCardSliceNewsletterLocationSlice {
    primary {
      ctaTitle
      subtitle
      title
      colour
      content {
        richText
      }
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }
`

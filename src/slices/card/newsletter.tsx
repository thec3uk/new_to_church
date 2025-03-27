import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../../components'

const NewsletterSlice = ({ slice }) => {
  return (
    <layout.Main>
      <components.NewsletterSignUp data={slice.primary} />
    </layout.Main>
  )
}

export default NewsletterSlice

export const query = graphql`
  fragment NewsletterCard on PrismicCardSliceNewsletterSlice {
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

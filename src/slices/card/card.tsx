import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const DefaultCardSlice = ({ slice }) => {
  return (
    <components.Card
      title={slice.primary.title}
      subtitle={slice.primary.subtitle}
      cta={slice.primary.ctaTitle}
      to={slice.primary.ctaLink}
      colour={slice.primary.colour}
      image={slice.primary.image}
    >
      <PrismicRichText field={slice.primary.content.richText} />
    </components.Card>
  )
}

export default DefaultCardSlice

export const query = graphql`
  fragment DefaultCard on PrismicCardSliceDefault {
    primary {
      ctaTitle
      ctaLink {
        ...Link
      }
      colour
      subtitle
      title
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

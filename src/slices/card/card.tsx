import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const DefaultCardSlice = (data) => {
  return (
    <components.Card
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subTitle}
      cta={data.slice.primary.ctaTitle}
      to={data.slice.primary.ctaLink}
      colour={data.slice.primary.colour}
    >
      <PrismicRichText field={data.slice.primary.content.richText} />
    </components.Card>
  )
}

export default DefaultCardSlice

export const query = graphql`
  fragment DefaultCard on PrismicCardDefault {
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

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
        id
      }
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

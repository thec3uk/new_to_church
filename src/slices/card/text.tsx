import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const TextCardSlice = (data) => {
  return (
    <components.TextCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subtitle}
      text={data.slice.primary.content.richText}
      cta={data.slice.primary.ctaTitle}
      to={data.slice.primary.ctaLink}
      colour={data.slice.primary.colour}
      titleImage={data.slice.primary.image}
    />
  )
}
export default TextCardSlice

export const query = graphql`
  fragment TextCard on PrismicCardTextCard {
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

import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const TextCardSlice = (data) => {
  return (
    <components.TextCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subTitle}
      text={data.slice.primary.content.text}
      cta={data.slice.primary.ctaTitle}
      to={data.slice.primary.ctaLink}
      titleImage="/card.jpg"
    />
  )
}
export default TextCardSlice

export const query = graphql`
  fragment TextCard on PrismicCardTextCard {
    primary {
      ctaTitle
      ctaLink {
        id
      }
      subtitle
      title
      content {
        text
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

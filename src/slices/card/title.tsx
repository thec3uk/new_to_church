import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const TitleCardSlice = (data) => {
  return (
    <components.TitleCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subTitle}
      titleImage="/card.jpg"
    />
  )
}

export default TitleCardSlice

export const query = graphql`
  fragment TitleCard on PrismicCardTitleCard {
    primary {
      ctaTitle
      subtitle
      title
      ctaLink {
        id
      }
    }
  }
`

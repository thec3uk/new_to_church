import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

export const FAQCardSlice = (data) => {
  return (
    <components.FAQCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subtitle}
      faqs={data.slice.items}
      colour={data.slice.primary.colour}
      text={data.slice.primary.content.richText}
    />
  )
}

export default FAQCardSlice

export const query = graphql`
  fragment FAQCard on PrismicCardFaqCard {
    variation
    primary {
      colour
      title
      content {
        richText
      }
      subtitle
    }
    items {
      question
      answer {
        richText
      }
    }
  }
`

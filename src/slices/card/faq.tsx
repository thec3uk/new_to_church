import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

export const FAQCardSlice = (data) => {
  return (
    <components.FAQCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subTitle}
      faqs={data.slice.items}
      text=""
    />
  )
}

export default FAQCardSlice

export const query = graphql`
  fragment FAQCard on PrismicCardFaqCard {
    variation
    primary {
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

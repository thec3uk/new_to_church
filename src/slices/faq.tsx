import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../components'

const FAQSlice = ({ slice }) => {
  return (
    <layout.Main>
      <components.FAQs data={slice} />
    </layout.Main>
  )
}

export default FAQSlice

export const query = graphql`
  fragment FAQSlice on PrismicPageDataBodyFaqSection {
    primary {
      faqTitle: title {
        text
      }
      description {
        richText
      }
      eyebrow_headline {
        text
      }
    }
    items {
      question
      answer {
        richText
      }
    }
  }
`

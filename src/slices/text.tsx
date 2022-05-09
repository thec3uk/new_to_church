import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../components'

const TextSlice = ({ slice }) => {
  return (
    <layout.Main>
      <components.Text>
        <PrismicRichText
          field={slice.primary.content.richText}
          fallback={<p>No content</p>}
        />
      </components.Text>
    </layout.Main>
  )
}

export default TextSlice

export const query = graphql`
  fragment TextSlice on PrismicPageDataBodyText {
    primary {
      content {
        richText
      }
    }
  }
`

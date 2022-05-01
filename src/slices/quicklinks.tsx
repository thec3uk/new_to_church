import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../components'

const QuickLinkSlice = ({ slice, context }) => {
  return (
    <layout.Aside>
      <components.QuickLinks data={slice.primary.link.document.data} />
    </layout.Aside>
  )
}

export default QuickLinkSlice

export const query = graphql`
  fragment QuickLinksSlice on PrismicPageDataBodyQuickLinksBlock {
    primary {
      link {
        ...QuickLinks
      }
    }
  }
  fragment QuickLinks on PrismicLinkType {
    document {
      ... on PrismicQuickLinks {
        data {
          title
          slices {
            ... on PrismicLinkDefault {
              variation
              slice_type
              primary {
                title {
                  richText
                }
                url {
                  uid
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

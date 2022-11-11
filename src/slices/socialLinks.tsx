import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../components'

const SocialLinkSlice = ({ slice, context }) => {
  return (
    <layout.Aside>
      <components.SocialLinks data={slice.primary.link.document.data} />
    </layout.Aside>
  )
}

export default SocialLinkSlice

export const query = graphql`
  fragment SocialLinksSlice on PrismicPageDataBodySocialLinksBlock {
    primary {
      link {
        ...SocialLinks
      }
    }
  }
  fragment SocialLinks on PrismicLinkType {
    document {
      ... on PrismicSocialLinks {
        data {
          title
          youtubeUrl {
            url
          }
          facebookUrl {
            url
          }
          instagramUrl {
            url
          }
        }
      }
    }
  }
`

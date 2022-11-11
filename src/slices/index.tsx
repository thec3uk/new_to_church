import CardSlice from './card'
import MediaSlice from './media'
import FAQSlice from './faq'
import TextSlice from './text'
import ButtonSlice from './button'
import QuickLinkSlice from './quicklinks'
import SocialLinkSlice from './socialLinks'
import HeaderSlice from './header'
import { graphql } from 'gatsby'
import NewsletterSlice from './card/newsletter'

export const slices = {
  faq_section: FAQSlice,
  media: MediaSlice,
  card: CardSlice,
  text: TextSlice,
  button: ButtonSlice,
  quick_links_block: QuickLinkSlice,
  social_links_block: SocialLinkSlice,
  header: HeaderSlice,
}

export const query = graphql`
  fragment Link on PrismicLinkType {
    url
    type
    uid
    link_type
    document {
      ... on PrismicPage {
        uid
        type
        url
      }
      ... on PrismicRedirect {
        uid
        url
        type
      }
    }
  }
`

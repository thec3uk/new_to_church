// {PrismicPage.url}.js file

import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import SEO from '../components/SEO'

import { layout } from '../components'

import { slices } from '../slices'

const PageTemplate = ({ data }) => {
  if (!data) return null
  const page = data.prismicPage
  if (!page) return null

  return (
    <layout.Layout>
      <SEO
        title={page.data.seo_title}
        description={page.data.seo_description}
        url={page.url}
        image={page.data.seo_image?.url}
      />
      <SliceZone slices={page.data.body} components={slices} />
    </layout.Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    prismicPage(uid: { eq: $uid }, tags: { eq: "domain:thec3.uk" }) {
      _previewable
      uid
      url
      data {
        seo_title
        seo_description
        seo_image {
          url
        }
        body {
          ...FAQCard
          ...DefaultCard
          ...TextCard
          ...TitleCard
          ...ImageCard
          ...DefaultMedia
          ...FAQSlice
          ...TextSlice
          ...ButtonSlice
          # ...RedButtonSlice
          # ...YellowButtonSlice
          # ...TealButtonSlice
          # ...PurpleButtonSlice
          ...QuickLinksSlice
          ...SocialLinksSlice
          ...HeroWithImage
          ...HeroWithVideo
          ...HeroWithCustomComponent
          ...TextHero
          ...VideoMedia
          ...NewsletterCard
          ...NewsletterLocationCard
          ... on PrismicSharedSliceType {
            id
            variation
            slice_type
          }
          ... on PrismicSliceType {
            id
            slice_type
          }
        }
      }
    }
  }
`

export default withPrismicPreview(PageTemplate)

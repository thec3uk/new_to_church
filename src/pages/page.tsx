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
      <SEO title={page.data.body.slice_type} description={'SEO TEXT'} />
      <SliceZone slices={page.data.body} components={slices} />
    </layout.Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    prismicPage(uid: { eq: $uid }, tags: { eq: "domain:thec3.uk" }) {
      _previewable
      uid
      data {
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
          ...RedButtonSlice
          ...YellowButtonSlice
          ...TealButtonSlice
          ...PurpleButtonSlice
          ...QuickLinksSlice
          ...SocialLinksSlice
          ...HeroWithImage
          ...HeroWithCustomComponent
          ...TextHero
          ...VideoMedia
          ...NewsletterCard
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

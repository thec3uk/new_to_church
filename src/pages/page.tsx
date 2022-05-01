// {PrismicPage.url}.js file

import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SliceZone } from '@prismicio/react'

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
      <SliceZone
        slices={page.data.body}
        components={slices}
        context={{
          quickLinks: page.data.quick_links_block,
        }}
      />
    </layout.Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }, tags: { eq: "domain:thec3.uk" }) {
      data {
        quick_links_block {
          ...QuickLinks
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
          ...RedButtonSlice
          ...YellowButtonSlice
          ...TealButtonSlice
          ...PurpleButtonSlice
          ...QuickLinksSlice
          ...SocialLinksSlice
          ...HeroWithImage
          ...HeroWithCustomComponent
          ...TextHero
          ... on PrismicSharedSliceType {
            variation
            slice_type
            __typename
          }
          ... on PrismicSliceType {
            slice_type
          }
        }
      }
    }
  }
`

export default PageTemplate

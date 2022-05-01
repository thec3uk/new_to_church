import * as React from 'react'
import Layout from '../components/layout'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

const Error404Page = () => (
  <Layout>
    <h1>You are here!</h1>
    <h2>But nothing found for you #404</h2>
  </Layout>
)

export default withPrismicUnpublishedPreview(Error404Page)

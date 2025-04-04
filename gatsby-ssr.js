import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from './src/utils/linkResolver'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: {
          page: React.lazy(() => import('./src/pages/page')),
        },
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)

export const onRenderBody = ({ setHtmlAttributes }, pluginOptions) => {
  setHtmlAttributes({
    className: 'bg-gray-50',
  })
}

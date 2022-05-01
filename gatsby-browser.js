import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { PrismicProvider } from '@prismicio/react'
import { Link } from 'gatsby'

import { linkResolver } from './src/utils/linkResolver'
import HomeTemplate from './src/pages/index'
import PageTemplate from './src/pages/page'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: componentResolverFromMap({
            homepage: HomeTemplate,
            page: PageTemplate,
          }),
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)

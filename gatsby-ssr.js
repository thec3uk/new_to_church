import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import { PrismicProvider } from '@prismicio/react'
import { Link as GatsbyLink } from 'gatsby'

import { linkResolver } from './src/utils/linkResolver'
// import HomeTemplate from './src/pages/index'
import PageTemplate from './src/pages/page'

/**
 * An adapter to support Gatsby's `<Link>` component when using `<PrismicLink>`.
 */
const GatsbyLinkShim = React.forwardRef(({ href, ...props }, ref) => {
  return <GatsbyLink to={href} ref={ref} {...props} />
})
GatsbyLinkShim.displayName = 'GatsbyLinkShim'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={GatsbyLinkShim}
  >
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: componentResolverFromMap({
            // homepage: HomeTemplate,
            page: PageTemplate,
          }),
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)

export const onRenderBody = ({ setHtmlAttributes }, pluginOptions) => {
  setHtmlAttributes({
    className: 'bg-gray-50',
  })
}

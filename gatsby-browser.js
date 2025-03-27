const React = require('react')

const { PrismicPreviewProvider } = require('gatsby-plugin-prismic-previews')
const PrismicProvider = require('@prismicio/react').PrismicProvider

const GatsbyLink = require('gatsby').Link

const linkResolver = require('./src/utils/linkResolver').linkResolver
const PageTemplate = require('./src/pages/page')

/**
 * An adapter to support Gatsby's `<Link>` component when using `<PrismicLink>`.
 */
const GatsbyLinkShim = React.forwardRef(({ href, ...props }, ref) => {
  return <GatsbyLink to={href} ref={ref} {...props} />
})
GatsbyLinkShim.displayName = 'GatsbyLinkShim'

exports.wrapRootElement = ({ element }) => (
  <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={GatsbyLinkShim}
  >
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: {
            page: PageTemplate,
          },
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)

exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

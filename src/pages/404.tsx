import * as React from 'react'
import Layout from '../components/layout'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews-nano'
import ContainedHero from '../components/hero/container'
import { Link } from 'gatsby'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-4 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

const linkColours = [
  'from-red-500-full to-black-full',
  // 'from-red-500-full to-yellow-300-full',
  // 'from-teal-500-full to-red-500-full',
  // 'from-yellow-300-full to-teal-500-full',
]

const Error404Page = () => (
  <Layout>
    <ContainedHero background={undefined} hideOnMobile={false}>
      <h1 className="font-title font-bold text-5.5xl lowercase">
        the page is not here!
      </h1>
      <div className="mt-4 font-sans text-xl">
        He is not here; he has risen, just as he said. Come and see the place
        where he lay.
        <br />
        <i>Matthew 28:6</i>
      </div>
      <div className="px-2 py-2 mt-8 -mx-2 text-2xl text-white bg-black">
        the page has gone ahead to...
      </div>
      <div className="flex flex-col mt-8 space-y-4 text-2xl">
        <Link
          to="/locations"
          className={`${commonLinkClasses} ${linkColours[0]}`}
        >
          Locations
        </Link>
        <Link
          to="/shaping"
          className={`${commonLinkClasses} ${linkColours[0]}`}
        >
          Next Steps
        </Link>
        <Link
          to="/reaching"
          className={`${commonLinkClasses} ${linkColours[0]}`}
        >
          Sundays
        </Link>
        <a
          href="https://www.google.com/maps/place/Sea+of+Galilee/@32.7982869,35.5134838,12z"
          className={`${commonLinkClasses} ${linkColours[0]}`}
        >
          Galilee
        </a>
      </div>
    </ContainedHero>
  </Layout>
)

export default withPrismicUnpublishedPreview(Error404Page)

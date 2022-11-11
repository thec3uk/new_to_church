import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { layout, components } from '../../components'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-1 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

const HeroWithImage = ({ slice }) => {
  const linkColours = [
    'from-red-500-full to-black-full',
    // 'from-red-500-full to-yellow-300-full',
    // 'from-teal-500-full to-red-500-full',
    // 'from-yellow-300-full to-teal-500-full',
  ]

  const image = getImage(slice.primary.backgroundImage)
  const background = (
    <GatsbyImage
      image={image}
      alt={slice.primary.backgroundImage.alt || 'Needs an alt text'}
      className="object-cover object-center w-full h-full aspect-video"
    />
  )

  return (
    <layout.Hero background={background} fullbleed={slice.primary.isFullBleed}>
      <h1 className="font-title font-bold text-5.5xl lowercase">
        {slice.primary.title}
      </h1>
      <div className="mt-4 font-sans text-xl">
        <PrismicRichText field={slice.primary.leadParagraph.richText} />
      </div>
      <div className="px-2 py-2 mt-8 -mx-2 text-2xl text-white bg-black">
        <h2>{slice.primary.callout}</h2>
      </div>
      <div className="flex flex-col mt-8 space-y-4 text-2xl">
        {slice.items.map((link, idx) => {
          return (
            <PrismicLink
              key={`${idx}-${link.linkTitle}`}
              field={link.linkUrl}
              className={`${commonLinkClasses} ${linkColours[0]}`}
            >
              {link.linkTitle}
            </PrismicLink>
          )
        })}
      </div>
    </layout.Hero>
  )
}

export default HeroWithImage

export const query = graphql`
  fragment HeroWithImage on PrismicHeaderHeroWithImage {
    primary {
      title
      callout
      isFullBleed
      leadParagraph {
        richText
      }
      backgroundImage {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
    items {
      linkUrl {
        ...Link
      }
      linkTitle
    }
  }
`

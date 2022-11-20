import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { layout, components } from '../../components'
import { ResponsiveVideo } from '../../components/responsiveVideo'
import { linkResolver } from '../../utils/linkResolver'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-1 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

const HeroWithVideo = ({ slice }) => {
  const linkColours = [
    'from-red-500-full to-black-full',
    // 'from-red-500-full to-yellow-300-full',
    // 'from-teal-500-full to-red-500-full',
    // 'from-yellow-300-full to-teal-500-full',
  ]

  // const background = (
  //   <div
  //     className={`object-cover object-center w-full h-full aspect-video prose`}
  //     dangerouslySetInnerHTML={{ __html: slice.primary.video.html }}
  //   />
  // )

  const background = (
    <ResponsiveVideo
      video={slice.primary.video.embed_url}
      playing
      volume={0}
      loop
    />
    // <div
    //   className={`object-cover object-center w-full h-full aspect-video prose`}
    //   dangerouslySetInnerHTML={{ __html: slice.primary.video.html }}
    // />
  )

  return (
    <layout.Hero background={background} fullbleed>
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
              linkResolver={linkResolver}
            >
              {link.linkTitle}
            </PrismicLink>
          )
        })}
      </div>
    </layout.Hero>
  )
}

export default HeroWithVideo

export const query = graphql`
  fragment HeroWithVideo on PrismicHeaderHeroWithVideo {
    primary {
      title
      callout
      isFullBleed
      leadParagraph {
        richText
      }
      video {
        id
        width
        type
        html
        provider_url
        embed_url
        author_name
        author_url
        height
        thumbnail_height
        thumbnail_url
        thumbnail_width
        title
        version
        provider_name
        prismicId
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

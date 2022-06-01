import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { layout, components } from '../../components'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-4 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

const TextHero = ({ slice }) => {
  const linkColours = ['from-red-500-full to-black-full']

  const background = <div></div>

  return (
    <layout.Hero background={background} alignment={slice.primary.alignment}>
      <h1 className="font-title font-bold text-5.5xl lowercase">
        {slice.primary.title}
      </h1>
      <div className="mt-4 font-sans text-xl">
        <PrismicRichText field={slice.primary.leadParagraph.richText} />
      </div>
      <div className="px-2 py-2 mt-8 -mx-2 text-2xl text-white bg-black">
        <h2>{slice.primary.callout}</h2>
      </div>
      {/* <div className="flex flex-col mt-8 space-y-4 text-2xl">
        {slice.items.map((link, idx) => {
          return (
            <PrismicLink
              href={link.linkUrl.url}
              className={`${commonLinkClasses} ${linkColours[idx % 3]}`}
            >
              {link.linkTitle}
            </PrismicLink>
          )
        })}
      </div> */}
    </layout.Hero>
  )
}

export default TextHero

export const query = graphql`
  fragment TextHero on PrismicHeaderTextOnlyHero {
    primary {
      title
      callout
      leadParagraph {
        richText
      }
      alignment
    }
  }
`

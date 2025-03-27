import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { layout, components } from '../../components'
import CarouselHero from './components/carousel'
import Map from './components/map'
import ContactForm from './components/contactForm'

import { linkResolver } from '../../utils/linkResolver'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-4 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

const heroWithCustomComponent = ({ slice }) => {
  const linkColours = [
    'from-red-500-full to-black-full',
    // 'from-teal-500-full to-red-500-full',
    // 'from-yellow-300-full to-teal-500-full',
  ]

  const mapping: Record<string, React.ReactNode> = {
    map: Map,
    carousel: CarouselHero,
    contact_form: ContactForm,
  }
  const Component = mapping[slice.primary.componentName]
  const fullbleed = slice.primary.componentName === 'map'

  return (
    <layout.Hero
      background={<Component />}
      fullbleed={fullbleed}
      hideOnMobile={slice.primary.componentName !== 'contact_form'}
    >
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
              key={idx}
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

export default heroWithCustomComponent

export const query = graphql`
  fragment HeroWithCustomComponent on PrismicHeaderSliceHeroWithCustomComponent {
    primary {
      title
      callout

      leadParagraph {
        richText
      }
      componentName
    }
    items {
      linkUrl {
        ...Link
      }
      linkTitle
    }
  }
`

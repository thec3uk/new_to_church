import { PrismicLink } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components } from '../../components'

const TitleCardSlice = (data) => {
  return (
    <components.TitleCard
      title={data.slice.primary.title}
      subtitle={data.slice.primary.subTitle}
      colour={data.slice.primary.colour}
      titleImage={data.slice.primary.image}
    >
      {data.slice.primary.ctaLink && data.slice.primary.ctaTitle && (
        <div className="flex flex-col justify-end w-full h-full">
          <PrismicLink
            field={data.slice.primary.ctaLink}
            className="block w-full px-6 py-1 text-xl font-bold text-center transition-colors duration-300 bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50 hover:text-red-500"
          >
            {data.slice.primary.ctaTitle}
          </PrismicLink>
        </div>
      )}
    </components.TitleCard>
  )
}

export default TitleCardSlice

export const query = graphql`
  fragment TitleCard on PrismicCardTitleCard {
    primary {
      ctaTitle
      subtitle
      title
      colour
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
      ctaLink {
        ...Link
      }
    }
  }
`

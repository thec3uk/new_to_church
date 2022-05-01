import { PrismicLink } from '@prismicio/react'
import * as React from 'react'
import TitleCard from './title'

const TextCard = ({
  title,
  subtitle,
  text,
  to,
  cta,
  titleImage,
}: {
  title: string
  subtitle: string
  text: string
  to?: string
  cta?: string
  titleImage?: string
}) => {
  return (
    <TitleCard title={title} subtitle={subtitle} titleImage={titleImage}>
      <p className="mt-4 md:columns-2 text-gray-50">{text}</p>
      {to && cta && (
        <PrismicLink
          href={to}
          className="block w-full px-6 py-1 mt-4 text-xl font-bold text-center bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50"
        >
          {cta}
        </PrismicLink>
      )}
    </TitleCard>
  )
}

export default TextCard

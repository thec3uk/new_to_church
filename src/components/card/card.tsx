import { PrismicLink } from '@prismicio/react'
import * as React from 'react'
import BaseCard from './base'
import {
  EmptyLinkField,
  FilledLinkToWebField,
  FilledLinkToDocumentField,
  FilledLinkToMediaField,
} from '@prismicio/types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { linkResolver } from '../../utils/linkResolver'

const Card = ({
  title,
  subtitle,
  cta,
  to,
  colour = 'teal',
  children,
  image,
}: {
  title: string
  cta: string
  to: any
  colour?: string
  subtitle: string
  children?: React.ReactNode
  image: any
}) => {
  const gImage = getImage(image)

  return (
    <BaseCard colour={colour ? colour : 'teal'}>
      <div className="flex flex-col justify-between row-span-3 col-span-full sm:col-span-3 md:col-span-7 sm:row-span-full">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold capitalize">
            <span className="md:hidden">
              {title}
              {title && subtitle && `:`}
              {title && subtitle && <br />}
            </span>
            {subtitle}
          </h2>
          {children && (
            <div className="font-medium leading-snug tracking-wide prose prose-h4:text-xl">
              {children}
            </div>
          )}
        </div>
        {to && (
          <PrismicLink
            field={
              to as
                | EmptyLinkField<'Any'>
                | FilledLinkToWebField
                | FilledLinkToDocumentField<string, string, never>
                | FilledLinkToMediaField
            }
            className="w-full px-6 py-2 mt-2 text-xl font-bold text-center capitalize transition-colors duration-300 bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50"
            linkResolver={linkResolver}
          >
            {cta}
          </PrismicLink>
        )}
      </div>
      <div className="h-full row-span-3 row-start-1 col-span-full sm:col-span-2 md:col-span-4 lg:col-span-4 sm:row-span-full">
        {to && cta ? (
          <PrismicLink
            field={
              to as
                | EmptyLinkField<'Any'>
                | FilledLinkToWebField
                | FilledLinkToDocumentField<string, string, never>
                | FilledLinkToMediaField
            }
            linkResolver={linkResolver}
          >
            <GatsbyImage
              image={gImage}
              alt={image.alt || 'An Image needing an alt text'}
              className="object-cover w-full h-full rounded-lg group-hover:text-red-500 "
            />
          </PrismicLink>
        ) : (
          <GatsbyImage
            image={gImage}
            alt={image.alt || 'An Image needing an alt text'}
            className="object-cover w-full h-full rounded-lg group-hover:text-red-500 "
          />
        )}
      </div>
      <div className="hidden col-start-12 md:flex justify-start items-center [writing-mode:vertical-lr] row-span-full">
        <h2 className="font-bold underline lowercase md:text-4xl lg:text-5xl whitespace-nowrap">
          {title}
        </h2>
      </div>
    </BaseCard>
  )
}

export default Card

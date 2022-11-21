import * as React from 'react'
import TitleCard from './title'
import { getImage, ImageDataLike } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { PrismicLink } from '@prismicio/react'
import { linkResolver } from '../../utils/linkResolver'

const ImageCard = ({
  title,
  subtitle,
  image,
  link,
  colour = 'transparent',
}: {
  title?: string
  image: ImageDataLike
  subtitle?: string
  link?: any
  colour?: string
}) => {
  const gImage = getImage(image)
  const bgImage = convertToBgImage(gImage)

  const fromColour =
    colour === 'transparent'
      ? 'from-black'
      : colour === 'transparentBlack'
      ? 'from-white'
      : ''

  const Card = () => (
    <BackgroundImage
      Tag="div"
      {...bgImage}
      preserveStackingContext
      className={`h-56 bg-center bg-cover before:shadow before:rounded before:content-none md:h-72 lg:h-full lg:min-h-90 aspect-auto`}
    >
      <div className={`${fromColour} bg-gradient-to-b h-full`}>
        <TitleCard title={title} subtitle={subtitle} colour={colour} />
      </div>
    </BackgroundImage>
  )
  return (
    <>
      {link.type === 'page' || link.type === 'redirect' ? (
        <PrismicLink field={link} className="group">
          <Card />
        </PrismicLink>
      ) : link.link_type === 'Web' ? (
        <a href={link.url} className="group">
          <Card />
        </a>
      ) : (
        <Card />
      )}
    </>
  )
}

export default ImageCard

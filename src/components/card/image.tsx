import * as React from 'react'
import TitleCard from './title'
import { getImage, ImageDataLike } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image-es5'
import { PrismicLink } from '@prismicio/react'

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
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className={`h-56 bg-center bg-cover before:shadow before:rounded before:content-none md:h-72 lg:h-full min-h-[25rem] ${
        title === null ? 'aspect-video' : 'aspect-auto'
      }`}
    >
      <div className={`${fromColour} bg-gradient-to-b h-full`}>
        <TitleCard title={title} subtitle={subtitle} colour={colour} />
      </div>
    </BackgroundImage>
  )
  return (
    <>
      {link.type ? (
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

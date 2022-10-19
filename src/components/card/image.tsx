import * as React from 'react'
import TitleCard from './title'
import { getImage } from 'gatsby-plugin-image'
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
  image: string
  subtitle?: string
  link?: any
  colour?: string
}) => {
  const gImage = getImage(image)
  const bgImage = convertToBgImage(gImage)

  console.log(subtitle)

  const Card = () => (
    <BackgroundImage
      Tag="div"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className="h-56 bg-center bg-cover before:shadow before:rounded before:content-none md:h-72 lg:h-full lg:min-h-80"
    >
      <TitleCard title={title} subtitle={subtitle} colour={colour} />
    </BackgroundImage>
  )
  return (
    <>
      {link.type ? (
        <PrismicLink field={link} className="group">
          <Card />
        </PrismicLink>
      ) : (
        <Card />
      )}
    </>
  )
}

export default ImageCard

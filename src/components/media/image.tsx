import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FullBleedMedia, { containerClassNames } from './fullbleed'

const ImageMedia = ({ image, alt }: { image: any; alt: string }) => {
  const gImage = getImage(image)
  return (
    <FullBleedMedia>
      <GatsbyImage image={gImage} alt={alt} className={containerClassNames} />
    </FullBleedMedia>
  )
}

export default ImageMedia

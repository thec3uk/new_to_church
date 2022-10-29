import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FullBleedMedia, {
  fullScreenContainerClassNames,
  autoHeightContainerClassNames,
} from './fullbleed'

const ImageMedia = ({
  image,
  alt,
  fullheight,
}: {
  image: any
  alt: string
  fullheight: boolean
}) => {
  const gImage = getImage(image)
  const containerClasses = fullheight
    ? fullScreenContainerClassNames
    : autoHeightContainerClassNames
  return (
    <FullBleedMedia reducedPadding={!fullheight}>
      <GatsbyImage image={gImage} alt={alt} className={containerClasses} />
    </FullBleedMedia>
  )
}

export default ImageMedia

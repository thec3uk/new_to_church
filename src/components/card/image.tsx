import * as React from 'react'
import TitleCard from './title'

const ImageCard = ({
  title,
  subtitle,
  image,
}: {
  title?: string
  image: string
  subtitle?: string
}) => {
  return (
    //   TODO: this needs to be configurable
    <div className="bg-[url('/live.jpg')] bg-cover bg-center rounded h-56 md:h-72 lg:h-full lg:min-h-80">
      <TitleCard title={title} subtitle={subtitle} colour={'transparent'} />
    </div>
  )
}

export default ImageCard

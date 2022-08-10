import * as React from 'react'
import { ResponsiveVideo } from '../responsiveVideo'

import FullBleedMedia, { containerClassNames } from './fullbleed'

const VideoMedia = ({ data }) => {
  console.log(data)

  return (
    <FullBleedMedia>
      <div className="w-screen h-full">
        <ResponsiveVideo video={data.embed_url} playing volume={0} loop />
      </div>
    </FullBleedMedia>
  )
}

export default VideoMedia

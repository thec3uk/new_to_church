import * as React from 'react'

import FullBleedMedia, { containerClassNames } from './fullbleed'

const VideoMedia = ({ data }) => {
  return (
    <FullBleedMedia>
      <div className={containerClassNames}></div>
    </FullBleedMedia>
  )
}

export default VideoMedia

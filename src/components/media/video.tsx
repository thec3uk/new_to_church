import * as React from 'react'

import FullBleedMedia, { containerClassNames } from './fullbleed'

const VideoMedia = ({ data }) => {
  return (
    <FullBleedMedia>
      <div
        className={`${containerClassNames} prose`}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </FullBleedMedia>
  )
}

export default VideoMedia

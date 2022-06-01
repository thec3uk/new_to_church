import * as React from 'react'

import { layout, components } from '../../components'

import ImageMediaSlice from './image'
import VideoMediaSlice from './video'

const MediaSlice = ({ slice }) => {
  const variations: Record<string, React.ReactNode> = {
    default: ImageMediaSlice,
    video: VideoMediaSlice,
  }
  const Component = variations[slice.variation]

  return (
    <layout.FullBleed hash={slice.id}>
      <Component slice={slice} />
    </layout.FullBleed>
  )
}

export default MediaSlice

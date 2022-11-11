import ReactPlayer from 'react-player'
import * as React from 'react'

export function ResponsiveVideo({
  video,
  playing = false,
  volume = 100,
  loop = false,
}: {
  video: string
  playing?: boolean
  volume?: number
  loop?: boolean
}) {
  return (
    <div>
      <div className="relative player-wrapper pt-[60%]">
        <ReactPlayer
          url={video}
          className="react-player"
          playing={playing}
          width="100%"
          height="100%"
          volume={volume}
          loop={loop}
        />
      </div>
    </div>
  )
}

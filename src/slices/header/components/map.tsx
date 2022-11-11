import * as React from 'react'

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
  const MapBox = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYW5kcmV3LW1pbGxlciIsImEiOiJja3lsbmJkN2szN2p3Mm9wOGlhcXkydG01In0.S2lQ5pVgz__BouSzEfmsIw',
    // accessToken: process.env.MAPBOX_ACCESS_TOKEN,
  })
  return (
    <MapBox
      style="mapbox://styles/mapbox/streets-v9"
      className="w-full h-full shadow"
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[0.158, 52.2]} />
      </Layer>
    </MapBox>
  )
}

export default Map

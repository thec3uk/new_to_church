import * as React from 'react'

import { layout, components } from '../components'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-4 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

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

const Hero = () => {
  const background = (
    // <Map />
    <img
      src={'/live2.jpg'}
      className="object-cover w-screen h-auto m-0 -ml-2 lg:mx-auto aspect-video"
    />
  )

  return (
    <layout.Hero background={background} fullbleed>
      <h1 className="font-title font-bold text-5.5xl ">our locations</h1>
      <p className="mt-4 font-sans text-xl">
        Join us every Sunday at one of locations
      </p>
      <div className="px-2 py-2 mt-8 -mx-2 text-2xl text-white bg-black">
        <h2>where is your nearest location?</h2>
      </div>
      <div className="flex flex-col mt-8 space-y-4 text-2xl">
        <a
          className={`${commonLinkClasses} from-red-500-full to-yellow-300-full`}
        >
          Cambridge
        </a>
        <a
          className={`${commonLinkClasses} from-teal-500-full to-red-500-full`}
        >
          Bury St. Edmunds
        </a>
        <a
          className={`${commonLinkClasses} from-yellow-300-full to-teal-500-full`}
        >
          Colchester
        </a>
        <a
          className={`${commonLinkClasses} from-red-500-full to-yellow-300-full`}
        >
          Online
        </a>
      </div>
    </layout.Hero>
  )
}

const Home = () => (
  <layout.Layout>
    <Hero />
    <layout.Main>
      <components.Text>
        <h3>BURY</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          cum tempora nam nesciunt <a>aperiam doloribus!</a> Provident
          laboriosam eveniet optio praesentium, temporibus incidunt magni
          blanditiis voluptatem assumenda laborum ab quasi fuga.
        </p>
      </components.Text>
      <components.Button size="lg" to="">
        TEST
      </components.Button>
    </layout.Main>

    {/* <layout.FullBleed>
      <components.Media image="" />
    </layout.FullBleed> */}
    <layout.Main>
      <components.TextCard
        title="locations"
        subtitle="find your place"
        text={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi cum tempora nam nesciunt aperiam doloribus! Provident laboriosam eveniet optio praesentium, temporibus incidunt magni blanditiis voluptatem assumenda laborum ab quasi fuga.'
        }
        cta="find out more"
        to="/locations"
        titleImage="/card.jpg"
      />
    </layout.Main>
  </layout.Layout>
)

export default Home

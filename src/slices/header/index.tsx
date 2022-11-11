import * as React from 'react'

import TextHero from './textHero'
import heroWithCustomComponent from './withComponent'
import HeroWithImage from './withImage'
import HeroWithVideo from './withVideo'

const DefaultHeaderSlice = ({ slice }) => {
  return <div></div>
}

const HeaderSlice = ({ slice }) => {
  const variations: Record<string, React.ReactNode> = {
    default: DefaultHeaderSlice,
    heroWithImage: HeroWithImage,
    heroWithVideo: HeroWithVideo,
    heroWithCustomComponent: heroWithCustomComponent,
    textOnlyHero: TextHero,
  }
  const Component = variations[slice.variation]

  return <Component slice={slice} />
}

export default HeaderSlice

import * as React from 'react'
import ContainedHero from './container'
import FullBleedHero from './fullbleed'

const Hero = ({
  background,
  fullbleed = false,
  alignment,
  children,
  hideOnMobile,
}: {
  background: React.ReactNode
  fullbleed?: boolean
  alignment?: string
  children: React.ReactNode
  hideOnMobile?: boolean
}) => {
  const HeroComponent = fullbleed ? FullBleedHero : ContainedHero
  return (
    <HeroComponent
      background={background}
      alignment={alignment}
      hideOnMobile={hideOnMobile}
    >
      {children}
    </HeroComponent>
  )
}

export default Hero

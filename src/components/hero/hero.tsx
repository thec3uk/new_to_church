import * as React from 'react'
import ContainedHero from './container'
import FullBleedHero from './fullbleed'

const Hero = ({
  background,
  fullbleed = false,
  alignment,
  children,
}: {
  background: React.ReactNode
  fullbleed?: boolean
  alignment?: string
  children: React.ReactNode
}) => {
  const HeroComponent = fullbleed ? FullBleedHero : ContainedHero
  return (
    <HeroComponent background={background} alignment={alignment}>
      {children}
    </HeroComponent>
  )
}

export default Hero

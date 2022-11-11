import * as React from 'react'

const CarouselHero = () => {
  return (
    <>
      <div
        id="section-1"
        className="inline-block relative w-1/3 h-32 -mr-6 bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
      ></div>
      <div
        id="section-2"
        className="inline-block relative w-1/3 h-32 top-[4.5rem] bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
      ></div>
      <div
        id="section-3"
        className="inline-block relative w-1/3 h-32 -ml-6 bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
      ></div>
      <div
        id="section-4"
        className="inline-block relative w-1/3 h-32 top-2 -mr-6 bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
      ></div>
    </>
  )
}

export default CarouselHero

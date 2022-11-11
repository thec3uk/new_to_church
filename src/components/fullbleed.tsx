import * as React from 'react'

const FullBleed = ({ children, hash }) => {
  return (
    <section
      id={hash}
      className="my-6 -mx-2 col-span-full md:-mx-4 md:my-4 lg:my-3"
    >
      {children}
    </section>
  )
}

export default FullBleed

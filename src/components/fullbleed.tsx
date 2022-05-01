import * as React from 'react'

const FullBleed = ({ children }) => {
  return (
    <section className="my-6 -mx-2 col-span-full md:-mx-4 md:my-4 lg:my-3">
      {children}
    </section>
  )
}

export default FullBleed

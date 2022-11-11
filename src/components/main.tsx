import * as React from 'react'

const Main = ({ children, hash }) => {
  return (
    <section
      id={hash}
      className="my-6 lg:col-span-8 lg:col-start-2 md:my-4 lg:my-3"
    >
      {children}
    </section>
  )
}

export default Main

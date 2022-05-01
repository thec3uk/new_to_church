import * as React from 'react'

const Main = ({ children }) => {
  return (
    <section className="my-6 lg:col-span-8 lg:col-start-2 md:my-4 lg:my-3">
      {children}
    </section>
  )
}

export default Main
